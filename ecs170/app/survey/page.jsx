"use client"
import React from 'react';
import SurveyQuestion from '@/components/SurveyQuestion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const SurveyPage = () => {

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
            
    const formData = {
      name: e.currentTarget.name.value,
      gender: e.currentTarget.gender.value,
      cholesterol: e.currentTarget.cholesterol.value,
      stroke: e.currentTarget.stroke.value,
      walking: e.currentTarget.walking.value,
      age: e.currentTarget.age.value,
      blood_pressure: e.currentTarget.blood_pressure.value,
      smoke: e.currentTarget.smoke.value,
      diabetes: e.currentTarget.diabetes.value,
      health_rating: e.currentTarget.health_rating.value,
    };
    // Transform the formData to match the expected input for your backend
    const dataToSend = {
      age: parseInt(formData.age),
      sex: formData.gender === 'Male' ? 1 : 0,
      bloodPressure: parseInt(formData.blood_pressure),
      chol: parseInt(formData.cholesterol),
      smoke: formData.smoke === 'Yes' ? 1 : 0,
      stroke: formData.stroke === 'Yes' ? 1 : 0,
      diabetes: formData.diabetes === 'Yes' ? 1 : 0,
      diffWalk: formData.walking === 'Yes' ? 1 : 0,
      physHealth: parseInt(formData.health_rating),
    };

    
    try {
      const response = await fetch('http://127.0.0.1:8000/prediction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        const params = new URLSearchParams()
        params.set('name', formData.name)
        params.set('prediction', result.prediction)
        params.set('high_bp', result.high_bp)
        params.set('high_chol', result.high_chol)
        console.log(result)
        // Navigate to results page and pass the result data
        router.push(`results?${params.toString()}`)
      } catch (error) {
        console.error('Error making prediction:', error);
      }
  }


  return (
    <div className="font-sans content-center">
      <h1 className="text-4xl text-white ml-4 inline-flex">Please complete this survey
      <Image src="./checkbox.svg"
                  alt="Checkbox Icon"
                  width={40}
                  height={40}
                /> 
      </h1>

      <form className="columns-2" onSubmit={handleSubmit}>
        
        <SurveyQuestion 
        question="Enter your full name."
        type="text" name="name" 
        description={"Your name will not be collected or affect your score."}
        />
        <SurveyQuestion
        question="Gender"
        type="radio"
        name="gender"
        options={['Male', 'Female']}
        description={"Gender is used to accurately calculate blood pressure and other metrics."}
        />
        <SurveyQuestion 
        question="What is your Cholesterol level? (mg/dL)" 
        type="int" 
        name="cholesterol" 
        description={"Please use your most recent cholesterol level reading (within 24-72 hours)."}
        />
        <SurveyQuestion
        question="Have you had a stroke in the past?"
        type="radio"
        name="stroke"
        options={['Yes', 'No']}
        description={"Gathering some past medical history will allow us to give you a more accurate reading."}
        />
        <SurveyQuestion
        question="Do you have any difficulty walking?"
        type="radio"
        name="walking"
        options={['Yes', 'No']}
        description={"Difficulty walking includes: Walking, climbing stairs, and jumping."}
        />
        <SurveyQuestion question="Enter your age." type="int" name="age" />
        <SurveyQuestion 
        question="What is your Blood Pressure?" 
        type="int" 
        name="blood_pressure" 
        description={"Please use your most recent blood pressure reading (within 24-72 hours)."}
        />
        <SurveyQuestion
        question="Do you smoke?"
        type="radio"
        name="smoke"
        options={['Yes', 'No']}
        />
        <SurveyQuestion
        question="Do you have diabetes?"
        type="radio"
        name="diabetes"
        options={['Yes', 'No']}
        />
        <SurveyQuestion
        question="Rate your general health on a scale of 1 to 5"
        type="slider"
        name="health_rating"
        min="1"
        max="5"
        step="1"
        description={"Try to assess your daily physical activity like climbing the stairs or walking: Heaving/trouble breathing when doing these activities is a sign of poor physical health."}
        />
      {/* <Link href="/results" className="float-right"> */}
        <button type='submit' className="font-sans bg-white hover:bg-custom-blue hover:text-white text-xl px-8 py-2 rounded drop-shadow">Submit</button>
      {/* </Link> */}
      </form>

  </div>
  )
};

export default SurveyPage;
