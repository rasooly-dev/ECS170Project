import React from 'react';
import SurveyQuestion from '@/components/SurveyQuestion';

const SurveyPage = () => (
  <div className="font-hammersmith content-center">
    <div className="bg-[#9F7A7A] rounded-2xl pb-2 shadow">
        <h1 className="font-bold text-4xl text-white ml-4">Please complete this survey</h1>
        <SurveyQuestion question="Enter your full name." type="text" name="name" />
        <SurveyQuestion question="Enter your age." type="int" name="age" />
        <SurveyQuestion
        question="Gender"
        type="select"
        name="gender"
        options={['Male', 'Female']}
        />
        <SurveyQuestion question="What is your Blood Pressure? (Provide Fraction)" type="int" name="blood_pressure" />
        <SurveyQuestion question="What is your Cholesterol level? (mg/dL)" type="int" name="cholesterol" />
        <SurveyQuestion
        question="Do you smoke?"
        type="radio"
        name="smoke"
        options={['Yes', 'No']}
        />
        <SurveyQuestion
        question="Have you had a stroke in the past?"
        type="radio"
        name="stroke"
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
        />
    </div>
    <div className="flex justify-center mt-8">
      <button type='button' className="bg-[#EAC8C8] text-[#4E2525] text-xl px-4 py-2 shadow rounded-xl">Get Results!</button>
    </div>
    
  </div>
);

export default SurveyPage;
