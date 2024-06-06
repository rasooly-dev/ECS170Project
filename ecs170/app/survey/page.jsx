import React from 'react';
import SurveyQuestion from '@/components/SurveyQuestion';
import Link from 'next/link';
import Image from 'next/image';

const SurveyPage = () => (

  <div className="font-sans content-center">
      <h1 className="text-4xl text-white ml-4 inline-flex font-thin">Please complete this survey
      <Image src="./checkbox.svg"
                  alt="Checkbox Icon"
                  width={40}
                  height={40}
                /> 
      </h1>

      <div className="columns-2">
        <SurveyQuestion question="Enter your full name." type="text" name="name" />
        <SurveyQuestion question="Enter your age." type="int" name="age" />
        <SurveyQuestion
        question="Gender"
        type="radio"
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
        
    <Link href="/results" className="float-right">
      <button type='button' className="font-sans bg-white hover:bg-[#000000] hover:text-white text-xl px-2 py-2 rounded drop-shadow">Submit</button>
    </Link>
  </div>

);

export default SurveyPage;
