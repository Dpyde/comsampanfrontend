"use client";
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  return (
    <div className='bg-cover min-[1024px]:mt-22 bg-center min-h-screen flex justify-center items-center' style={{backgroundImage: "url('/Background.svg')"}}>
        <div className='flex flex-col text-center items-center px-4'>
            <div className='pixel-font text-4xl md:text-7xl lg:text-9xl'>Welcome to</div>
            <div className='pixel-font text-6xl md:text-9xl'>COMSANPAN</div>
            <img className='w-80 h-60 md:w-120 md:h-90 mt-8 md:mt-12' src="/image.png" alt="" />
            <button className='w-64 h-12 md:w-86 md:h-[64px] pixel-font text-4xl md:text-6xl rounded-xl bg-[#4C5FFF] mt-8 md:mt-10 hover:bg-white hover:text-black' onClick={() => router.push('/schedule')}>Get Started</button>

        </div>
            

        
        

    </div>
  )
}

export default page