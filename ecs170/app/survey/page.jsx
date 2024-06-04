import React from 'react';
import SurveyQuestion from '@/components/SurveyQuestion';

const SurveyPage = () => (
  <div className=''>
    <h1 className='text-4xl'>Survey Page</h1>
    <SurveyQuestion question="Enter your name" type="text" name="name" />
    <SurveyQuestion question="Enter your age" type="int" name="age" />
    <SurveyQuestion
      question="Gender"
      type="select"
      name="gender"
      options={['Male', 'Female']}
    />
    <SurveyQuestion question="What is your Blood Pressure" type="int" name="blood_pressure" />
    <SurveyQuestion question="What is your Cholesterol level" type="int" name="cholesterol" />
    <SurveyQuestion
      question="Do you smoke"
      type="radio"
      name="smoke"
      options={['Yes', 'No']}
    />
    <SurveyQuestion
      question="Have you had a stroke in the past"
      type="radio"
      name="stroke"
      options={['Yes', 'No']}
    />
    <SurveyQuestion
      question="Do you have diabetes"
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
);

export default SurveyPage;
