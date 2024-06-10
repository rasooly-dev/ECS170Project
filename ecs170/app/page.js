import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import React from "react";
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <main className='w-full h-full text-center'>
      <HeroHighlight className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-center text-white w-9/12">This is an AI Model that determines if an individual is at an increased risk of heart disease,</h1>  
          <Highlight className={"text-4xl font-bold text-center text-white w-1/2 mt-2"}>take the survey now</Highlight>                                         
          <Image src="./heart.svg"
                  alt="Heart Icon"
                  width={100}
                  height={100}
                  className='w-1/4 sm:w-2/12 h-fit py-10'
                /> 
            <Link href="/survey" passHref className=''>
              <button className='px-8 py-4 my-10 w-fit h-fit text-white font-hammersmith font-semibold text-2xl
                                  rounded-xl shadow-lg bg-indigo-600 bg-opacity-100 text-center'>Start Survey</button>
            </Link>   
      </HeroHighlight>
      <div className='flex flex-col justify-center items-center'>
        <h3 className="text-xl font-bold text-white w-9/12 my-2">More about us</h3>
        <p className="font-bold text-white w-9/12">We are a project team of six students from the ECS 170 - Intro. to Artificial Intelligence course taught at the 
            University of California - Davis. To tackle the growing rate of heart disease and heart attack in the United States, 
            we decided to develop a supervised machine learning model to detect whether or not users could potentially 
            be at-risk for heart disease and heart attack. A machine learning model uses a predefined set of data points with 
            input features and a target value to make meaningful predictions based on that data. We use a method known as 
            classification to assess your overall risk. You can read the full project report 
            <Link href="https://google.com" className='underline text-blue-500'> here</Link>.
          </p>

        <h3 className="text-xl font-bold text-white w-9/12 mt-8 mb-2">Before you get started</h3>
        <p className="font-bold text-white w-9/12 mb-8">Our trained model only provides can estimated guess on whether or not you are an at-risk patient.
            Our research suggests that around 27% percent of users will not get a valid prediction. The model's prediction should not replace 
            the opinion of a medical professional: We suggest consulting your local medical health provider if you are found to be at-risk.
          </p>
      </div>
    </main>
  );
}
