"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'


export default function Page() {
    const searchParams = useSearchParams()

    const heartAttackRisk = (searchParams.get('prediction') === '1') ? true : false;
    const hasHighBloodPressure = (searchParams.get('high_bp') === '1') ? true : false;
    const hasHighCholestrol = (searchParams.get('high_chol') === '1') ? true : false;
    const name = searchParams.get('name')



    return (
        <main>
            <div className='flex flex-row' style={{ backgroundColor: '#FFFFFF', height: '100vh' }}>
                <div className='flex w-full flex-col pt-9 pl-8 gap-y-10'>
                    <div>
                        <h1 className='text-4xl text-black font-sans font-semibold'>Hi, {name}</h1>
                        <h2 className='text-3xl text-black font-sans font-medium'>Here is your result breakdown</h2>
                    </div>
                    
                    {heartAttackRisk ? (
                        <h1 className='text-2xl text-black font-sans font-normal'><b className="text-red-500">You are at-risk </b>for heart disease and heart attack</h1>
                        
                    ) : (
                        <h1 className='text-2xl text-black font-sans font-normal'><b className="text-green-500">You are not at-risk </b>for heart disease and heart attack</h1>
                    )}  
                    
                    <div>
                        <h3 className='text-2xl text-black font-sans font-medium'>More information on your health:</h3>
                        
                        {hasHighBloodPressure ? (
                            <div className="flex flex-col rounded-xl border-2 border-red-300 bg-[#FFDFDF] px-3 py-2 max-w-2xl">
                                <h4 className='text-xl text-black font-sans font-medium'>Do you currently have high blood pressure?</h4>
                                <h1 className='text-2xl text-black font-sans font-medium pb-3'>Yes</h1>    
                            </div>
                        ) : (
                            <div className="flex flex-col rounded-xl border-2 border-green-300 bg-[#DFFFE6] px-3 py-2 max-w-2xl">
                                <h4 className='text-xl text-black font-sans font-medium'>Do you currently have high blood pressure?</h4>
                                <h1 className='text-2xl text-black font-sans font-medium pb-3'>No</h1>    
                            </div>
                        )}
                        
                        
                    </div>

                    <div className='flex flex-col gap-y-32'>
                        {hasHighCholestrol ? (
                            <div className="flex flex-col rounded-xl border-2 border-red-300 bg-[#FFDFDF] px-3 py-2 max-w-2xl">
                                <h4 className='text-xl text-black font-sans font-medium'>Do you currently have high cholestrol?</h4>
                                <h1 className='text-2xl text-black font-sans font-medium pb-3'>Yes</h1>    
                            </div>
                            ) : (
                            <div className="flex flex-col rounded-xl border-2 border-green-300 bg-[#DFFFE6] px-3 py-2 max-w-2xl">
                                <h4 className='text-xl text-black font-sans font-medium'>Do you currently have high cholestrol?</h4>
                                <h1 className='text-2xl text-black font-sans font-medium pb-3'>No</h1>    
                            </div>
                            )}

                        <Link href="/survey" passHref>
                        <button className='px-4 py-2 w-fit h-fit text-black font-sans font-medium text-xl
                                            rounded-xl shadow-lg bg-gray-600 bg-opacity-10 flex'>Take the survey again</button>
                        </Link>
                    </div>
                </div>

                <div className="flex w-full flex-col pt-16 pr-3">
                    <h1 className='text-xl text-black font-sans font-semibold'>Metrics we collect and why?</h1>
                    <h1 className='text-mg text-black font-sans font-normal pb-6'>Find out how we determine your risk for heart disease and heart attack</h1>
                    
            
                    <h2 className='text-sm text-black font-sans font-semibold'>High Blood Pressure</h2>
                    <p1 className='text-sm text-black font-sans font-normal pb-3'>People with a history of elevated blood pressure levels are more at-risk for heart conditions like heart disease and heart attack.</p1>
                    
                    <h3 className='text-sm text-black font-sans font-semibold'>High Cholestrol</h3>
                    <p1 className='text-sm text-black font-sans font-normal pb-3'>Elevated cholesterol levels increase the likelihood of plaque buildup in arteries, heightening the risk of heart disease and heart attack.</p1>

                    <h4 className='text-sm text-black font-sans font-semibold'>Smoker</h4>
                    <p1 className='text-sm text-black font-sans font-normal pb-3'>Smoking damages the blood vessels and heart, significantly raising the risk of heart disease and heart attack.</p1>

                    <h5 className='text-sm text-black font-sans font-semibold'>Stroke</h5>
                    <p1 className='text-sm text-black font-sans font-normal pb-3'>Having a stroke is often associated with underlying cardiovascular issues, increasing the risk of heart disease and heart attack.</p1>

                    <h6 className='text-sm text-black font-sans font-semibold'>Diabetes</h6>
                    <p1 className='text-sm text-black font-sans font-normal pb-3'>Diabetes can damage blood vessels and nerves that control the heart, raising the risk of heart disease and heart attack.</p1>

                    <h7 className='text-sm text-black font-sans font-semibold'>Physical Health</h7>
                    <p1 className='text-sm text-black font-sans font-normal pb-3'>Poor physical health, including sedentary lifestyle and lack of exercise, contributes to higher risk of heart disease and heart attack.</p1>

                    <h8 className='text-sm text-black font-sans font-semibold'>Difficulty Walking</h8>
                    <p1 className='text-sm text-black font-sans font-normal pb-3'>Difficulty walking is often a sign of poor cardiovascular health and physical inactivity, increasing the risk of heart disease and heart attack.</p1>

                    <h9 className='text-sm text-black font-sans font-semibold'>Age</h9>
                    <p1 className='text-sm text-black font-sans font-normal pb-3'>Advancing age is a significant risk factor for heart disease and heart attack due to the natural wear and tear on the cardiovascular system.</p1>
                
                </div>
            </div>
        </main>
    )
  }
