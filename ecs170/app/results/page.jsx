export default function Page() {
    const heartAttackRisk = true;
    return (
        <main>
            <div>
                {heartAttackRisk ? (
                    <div className='flex flex-col justify-center items-center bg-[#B36868] min-h-screen h-screen pb-5'>
                        <div className='bg-[#FFDBDB] p-4 rounded-3xl shadow-2xl mt-auto'>
                            <h2 className='text-4xl font-hammersmith text-black max-w-4xl text-center'>You  <b className="font-black underline">are  at  risk  of</b>  Heart Disease*</h2>
                        </div>
                        <div className='flex flex-row gap-10 rounded-3xl pt-20'>
                            <button className='bg-[#FFDBDB] px-6 py-5 w-fit h-fit text-black font-hammersmith text-xl rounded-3xl shadow-2xl'>Retake Survey</button>
                            <button className='bg-[#FFDBDB] px-6 py-5 w-fit h-fit text-black font-hammersmith text-xl rounded-3xl shadow-2xl'>Find out more!</button>
                        </div>
                        <h4 className="text-white mt-auto">*Please consult your physician for a more comprehensive analysis</h4>
                    </div>
                    
                ) : (
                    <div className='flex  p-36 flex-col items-center' style={{ backgroundColor: '#8DA784', height: '100vh' }}>
                        <div className='bg-[#F1FFDB] p-8 pb-4 pt-4 rounded-3xl mb-10 shadow-2xl'>
                            <h2 className='text-7xl font-hammersmith text-black font-medium pb-5'>You  are  not  at  risk  of  Heart</h2>
                            <h2 className='text-7xl text-center  font-hammersmith text-black font-medium '>Disease.</h2>
                        </div>
                        <div className='flex p-40 flex-row space-x-12 rounded-3xl'>
                            <button className='bg-[#F1FFDB] px-6 py-5 w-fit h-fit text-black font-hammersmith text-4xl rounded-3xl shadow-2xl flex'>Retake Survey</button>
                            <button className='bg-[#F1FFDB] px-6 py-5 w-fit h-fit text-black font-hammersmith text-4xl rounded-3xl shadow-2xl flex'>Find out more!</button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
  }