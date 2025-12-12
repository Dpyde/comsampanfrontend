"use client";
import React from 'react'
import NavBar from '../components/navbar';

const page = () => {
  return (
    <div className='flex flex-col items-center w-full min-h-screen bg-darkblue'>
        <NavBar />
        <div>
             <div className='pixel-font text-[#B2F8E7] text-[64px] lg:text-[72px] mt-25'>Schedule</div>
            <img className=' mt-12 w-[800px] h-[600px]' src="timeline/timeline.svg" alt="" />

        </div>
    </div>
  )
}

export default page