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
    </main>
  );
}
