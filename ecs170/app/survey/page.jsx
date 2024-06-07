import React from 'react';
import SurveyQuestion from '@/components/SurveyQuestion';
import Link from 'next/link';
import Image from 'next/image';

const SurveyPage = () => (

  <div className="font-sans content-center">
      <h1 className="text-4xl text-white ml-4 inline-flex">Please complete this survey
      <Image src="./checkbox.svg"
                  alt="Checkbox Icon"
                  width={40}
                  height={40}
                /> 
      </h1>

      <div className="columns-2">
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
        question="What is your Blood Pressure? (Provide Fraction)" 
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
      </div>
        
    <Link href="/results" className="float-right">
      <button type='button' className="font-sans bg-white hover:bg-custom-blue hover:text-white text-xl px-8 py-2 rounded drop-shadow">Submit</button>
    </Link>
  </div>

);

export default SurveyPage;
