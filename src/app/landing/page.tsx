"use client";
import React from 'react'

const page = () => {
  return (
    <div className='bg-cover bg-center min-h-screen flex justify-center items-center' style={{backgroundImage: "url('/Background.svg')"}}>
        <div className='flex flex-col text-center items-center'>
            <div className='pixel-font text-7xl'>Welcome to</div>
            <div className='pixel-font text-9xl'>COMSANPAN</div>
            <div className='pixel-font text-5xl text-[#B2F8E7]'>มาเข้าร่วมงานคอมสัมพันธ์กันเถอะ</div>
            <img className='w-120 h-90 mt-12' src="/image.png" alt="" />
            <button className='w-86 h-[64px] pixel-font text-6xl rounded-xl bg-[#4C5FFF] mt-10 hover:bg-white hover:text-black'>Get Started</button>

        </div>
            

        
        

    </div>
  )
}

export default page