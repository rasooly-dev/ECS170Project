from typing import Union

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np
import tensorflow as tf
from keras.saving import register_keras_serializable
import pickle
import pandas as pd



# @register_keras_serializable()
@register_keras_serializable()
def weighted_binary_crossentropy(weights):
    @register_keras_serializable()
    def loss(y_true, y_pred):
        y_true = tf.cast(y_true, tf.float32)
        weights_v = y_true * weights[1] + (1. - y_true) * weights[0]
        return tf.keras.backend.binary_crossentropy(y_true, y_pred) * weights_v
    return loss

class_weights = {
    0: 0.5519894511003669,
    1: 5.308667810655841
}

custom_objects = {
    'custom_loss_function': weighted_binary_crossentropy([class_weights[0], class_weights[1]])
}

# uvicorn main:app --reload
# To reload the application

app = FastAPI()

model = pickle.load(open('NN4withDropout.pkl', 'rb'))
scalar = pickle.load(open('scaler.pkl', 'rb'))



class HeartDiseaseInput(BaseModel):
    age: int
    # 0 is female, 1 is male
    sex: int
    bloodPressure: int
    chol: int
    smoke: int
    stroke: int
    diabetes: int
    diffWalk: int
    physHealth: int

@app.post("/prediction")
def predict(data: HeartDiseaseInput):
    try:
        # TODO: Calcualte if they have high blood pressure or high chol based on age and sex
        highBloodPressure = 1 if data.bloodPressure > 135 else 0
        highChol = 1 if data.chol > 240 else 0

        binary_features = np.array([[highBloodPressure, highChol, data.smoke, data.stroke, data.diabetes, data.diffWalk]])
        non_binary_features = np.array([[data.physHealth, data.age]])
        non_binary_features_scaled = scalar.transform(non_binary_features)
        # input_data_scaled = np.concatenate([binary_features, non_binary_features_scaled], axis=1)
        # HeartDiseaseorAttack    HighBP    HighChol    Smoker    Stroke    Diabetes    PhysHlth    DiffWalk    Age
        input_data_scaled = np.concatenate([binary_features, non_binary_features_scaled], axis=1)

        columns = ['highBloodPressure', 'highChol', 'smoke', 'stroke', 'diabetes', 'physHlth', 'diffWalk', 'age']

        df = pd.DataFrame([np.array([binary_features["highBloodPressure"], binary_features["highChol"], binary_features["data.smoke"], binary_features["stroke"], binary_features["diabetes"], non_binary_features_scaled["physHealth"], binary_features["diffWalk"], non_binary_features["age"]])], columns=columns)

        # df = pd.DataFrame(input_data_scaled, columns=columns)
        
        # df = df[['highBloodPressure', 'highChol', 'smoke', 'stroke', 'diabetes', 'physHlth', 'diffWalk', 'age']]

        # binary_df = pd.DataFrame(binary_features, columns=['highBloodPressure', 'highChol', 'smoke', 'stroke', 'diabetes', 'diffWalk'])
        # non_binary_df = pd.DataFrame(non_binary_features_scaled, columns=['physHlth', 'age'])
        
        # input_data_df = pd.concat([binary_df, non_binary_df], axis=1)
        # columns = ['highBloodPressure', 'highChol', 'smoke', 'stroke', 'diabetes', 'physHlth', 'diffWalk', 'age']
        # input_data_df = input_data_df[column_order]
        # input_data_scaled = input_data_df.values



        # input_data = np.array([[highBloodPressure, highChol, data.smoke, data.stroke, data.diabetes, data.physHealth, data.diffWalk, data.age]])
        # # bp, col, smoke, stroke
        # input_data_scaled = scalar.transform(input_data)


        prediction = model.predict(df)

        return {"prediction": int(prediction[0]), "high_bp": int(highBloodPressure), "high_chol": int(highChol) }

    
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    


@app.get("/")
def read_root():
    return {"message": "Heart Disease Prediction API"}

