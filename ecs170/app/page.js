import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <main>
        <div className='flex justify-between w-full h-full p-10'>
          <div className='flex flex-col justify-center items-center mt-10'>
            <h1 className='text-5xl font-hammersmith text-dark font-semibold text-center max-w-sm'>Heart Disease Calculator</h1>
            <Image src="./heart.svg"
                  alt="Heart Icon"
                  width={100}
                  height={100}
                  className='w-3/4 h-fit'
                />
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-[#CC9090] p-4 pb-60 rounded-2xl mb-10'>
              <h2 className='text-3xl font-hammersmith text-white font-medium pb-4'>About me!</h2>
              <p className='font-hammersmith text-white text-lg font-medium max-w-2xl'>This app was created to help people predict their probability of Heart Disease.
                  We do this by using.... short description!!!</p>
            </div>
            <Link href="/survey" passHref>
              <button className='px-8 py-4 w-fit h-fit text-dark font-hammersmith font-semibold text-2xl
                                  rounded-xl shadow-lg bg-gray-600 bg-opacity-10 flex'>Start Survey</button>
            </Link>
          </div>
        </div>
    </main>
  );
}
