from typing import Union

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np
import tensorflow as tf
from keras.saving import register_keras_serializable
from tensorflow import keras
import pickle
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



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


model = keras.models.load_model('NeuralNetwork4withDropout-32-6-0.2.keras')
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

        # HeartDiseaseorAttack    HighBP    HighChol    Smoker    Stroke    Diabetes    PhysHlth    DiffWalk    Age
        features = np.array([highBloodPressure, highChol, data.smoke, data.stroke, data.diabetes, data.physHealth, data.diffWalk, data.age]).astype(np.float32)

        df = pd.DataFrame([features], columns=["HighBP", "HighChol", "Smoker", "Stroke", "Diabetes", "PhysHlth", "DiffWalk", "Age"])
        df[["PhysHlth", "Age"]] = scalar.transform(df[['PhysHlth', 'Age']])

        X = df.iloc[0:1]
        print(X)
        prediction = model.predict(X)

        return {"prediction": int(np.round(prediction[0])), "high_bp": int(highBloodPressure), "high_chol": int(highChol) }

    
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    


@app.get("/")
def read_root():
    return {"message": "Heart Disease Prediction API"}

