import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import React from "react";
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <main className='w-full h-full text-center'>
      <HeroHighlight className="flex flex-col justify-center items-center h-full pt-40">
          <h1 className="text-4xl font-bold text-center text-white w-9/12">This is an AI Model that determines if an individual is at an increased risk of heart disease,</h1>  
          <Highlight className={"text-4xl font-bold text-center text-white w-1/2 mt-2"}>take the survey now</Highlight>                                         
          <Image src="./heart.svg"
                  alt="Heart Icon"
                  width={100}
                  height={100}
                  className='w-1/4 sm:w-2/12 h-fit py-10'
                />            
      </HeroHighlight>
      <Link href="/survey" passHref className=''>
              <button className='px-8 py-4 my-10 w-fit h-fit text-white font-hammersmith font-semibold text-2xl
                                  rounded-xl shadow-lg bg-indigo-600 bg-opacity-100 text-center'>Start Survey</button>
            </Link>   
    </main>
  );
}


    // <main>
    //     <div className='flex justify-between w-full h-full p-10'>
    //       <div className='flex flex-col justify-center items-center mt-10'>
    //         <h1 className='text-5xl font-hammersmith text-dark font-semibold text-center max-w-sm'>Heart Disease Calculator</h1>

    //       </div>
    //       <div className='flex flex-col items-center'>
    //         <div className='bg-[#CC9090] p-4 pb-60 rounded-2xl mb-10'>
    //           <h2 className='text-3xl font-hammersmith text-white font-medium pb-4'>About me!</h2>
    //           <p className='font-hammersmith text-white text-lg font-medium max-w-2xl'>This app was created to help people predict their probability of Heart Disease.
    //               We do this by using.... short description!!!</p>
    //         </div>

    //       </div>
    //     </div>
    // </main>