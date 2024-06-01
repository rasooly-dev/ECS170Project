from typing import Union

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np


# uvicorn main:app --reload
# To reload the application

app = FastAPI()

# TODO: update this with actual model
model = joblib.load("./Logistic_Regression.pkl")


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

        input_data = np.array([[highBloodPressure, highChol, data.smoke, data.stroke, data.diabetes, data.physHealth, data.diffWalk, data.age]])
        # bp, col, smoke, stroke
        prediction = model.predict(input_data)

        return {"prediction": int(prediction[0])}
    
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    


@app.get("/")
def read_root():
    return {"message": "Heart Disease Prediction API"}

