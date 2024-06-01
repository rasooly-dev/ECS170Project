export default function Page() {
    return (
        <main>
            <div className='flex flex-col'>     
                <div className='flex  p-10 flex-col space-y-10 rounded-2xl' style={{ backgroundColor: '#9F7A7A'}}>
                    <div className='flex pt-1'>
                        <h1 className='text-5xl text-left text-white'>Please complete this survey</h1>
                    </div>
                    <div className='flex p-5 flex-col rounded-2xl' style={{ backgroundColor: '#FFFFFF'}}>
                        <div className='flex pr-96'>
                            <h1 className='text-3xl text-left text-black font-hammersmith font-semibold'>1. What is your name?</h1>
                        </div>
                    </div>
                    <div className='flex p-5 flex-col rounded-2xl' style={{ backgroundColor: '#FFFFFF'}}>
                        <div className='flex pr-96'>
                            <h1 className='text-3xl text-left text-black font-hammersmith font-semibold'>2. What is your age?</h1>
                        </div>
                    </div>
                    <div className='flex p-5 flex-col rounded-2xl' style={{ backgroundColor: '#FFFFFF'}}>
                        <div className='flex pr-96'>
                            <h1 className='text-3xl text-left text-black font-hammersmith font-semibold'>3. What is your gender?</h1>
                        </div>
                    </div>
                    <div className='flex p-5 flex-col rounded-2xl' style={{ backgroundColor: '#FFFFFF'}}>
                        <div className='flex pr-96'>
                            <h1 className='text-3xl text-left text-black font-hammersmith font-semibold'>4. What is your blood pressure?</h1>
                        </div>
                    </div>
                    <div className='flex p-5 flex-col rounded-2xl' style={{ backgroundColor: '#FFFFFF'}}>
                        <div className='flex pr-96'>
                            <h1 className='text-3xl text-left text-black font-hammersmith font-semibold'>5. What is your cholestrol level (mg/dL)?</h1>
                        </div>
                    </div>
                    <div className='flex p-5 flex-col rounded-2xl' style={{ backgroundColor: '#FFFFFF'}}>
                        <div className='flex pr-96'>
                            <h1 className='text-3xl text-left text-black font-hammersmith font-semibold'>6. Do you smoke?</h1>
                        </div>
                    </div>
                    <div className='flex p-5 flex-col rounded-2xl' style={{ backgroundColor: '#FFFFFF'}}>
                        <div className='flex pr-96'>
                            <h1 className='text-3xl text-left text-black font-hammersmith font-semibold'>7. Have you had a stroke in the past?</h1>
                        </div>
                    </div>
                    <div className='flex p-5 flex-col rounded-2xl' style={{ backgroundColor: '#FFFFFF'}}>
                        <div className='flex pr-96'>
                            <h1 className='text-3xl text-left text-black font-hammersmith font-semibold'>8. Do you have diabetes?</h1>
                        </div>
                    </div>
                    <div className='flex p-5 flex-col rounded-2xl' style={{ backgroundColor: '#FFFFFF'}}>
                        <div className='flex pr-96'>
                            <h1 className='text-3xl text-left text-black font-hammersmith font-semibold'>9. Rate your General Health from 1 - 5.</h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center pt-20'>
                    <button className='bg-[#EAC8C8] px-12 py-5 w-fit h-fit text-dark font-hammersmith font-semibold text-4xl rounded-3xl shadow-2xl flex'>Get Results!</button>
                </div>
            </div>
        </main>
    )
  }

