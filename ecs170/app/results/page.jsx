export default function Page() {
    const heartAttackRisk = false;
    return (
        <main>
            <div>
                {heartAttackRisk ? (
                    <div className='flex  p-36 flex-col items-center' style={{ backgroundColor: '#B36868', height: '100vh' }}>
                        <div className='bg-[#FFDBDB] p-16 pb-4 pt-4 rounded-3xl mb-10 shadow-2xl'>
                            <h2 className='text-7xl font-hammersmith text-black font-semibold font-medium pb-5'>You  are  at  risk  of  Heart</h2>
                            <h2 className='text-7xl text-center  font-hammersmith text-black font-semibold font-medium '>Disease.</h2>
                        </div>
                        <div className='flex p-40 flex-row space-x-12 rounded-3xl'>
                            <button className='bg-[#FFDBDB] px-6 py-5 w-fit h-fit text-black font-hammersmith font-medium text-4xl rounded-3xl shadow-2xl flex'>Retake Survey</button>
                            <button className='bg-[#FFDBDB] px-6 py-5 w-fit h-fit text-black font-hammersmith font-medium text-4xl rounded-3xl shadow-2xl flex'>Find out more!</button>
                        </div>
                    </div>
                ) : (
                    <div className='flex  p-36 flex-col items-center' style={{ backgroundColor: '#8DA784', height: '100vh' }}>
                        <div className='bg-[#F1FFDB] p-8 pb-4 pt-4 rounded-3xl mb-10 shadow-2xl'>
                            <h2 className='text-7xl font-hammersmith text-black font-semibold font-medium pb-5'>You  are  not  at  risk  of  Heart</h2>
                            <h2 className='text-7xl text-center  font-hammersmith text-black font-semibold font-medium '>Disease.</h2>
                        </div>
                        <div className='flex p-40 flex-row space-x-12 rounded-3xl'>
                            <button className='bg-[#F1FFDB] px-6 py-5 w-fit h-fit text-black font-hammersmith font-medium text-4xl rounded-3xl shadow-2xl flex'>Retake Survey</button>
                            <button className='bg-[#F1FFDB] px-6 py-5 w-fit h-fit text-black font-hammersmith font-medium text-4xl rounded-3xl shadow-2xl flex'>Find out more!</button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
  }