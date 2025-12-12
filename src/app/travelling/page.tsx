'use client';

import Image from "next/image";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NavBar from "../components/navbar";
import { useState } from "react";

// img and text just only examples.
export default function Travelling() {
    const [transport, setTransport] = useState<'bts' | 'mrt' | 'bus'>('mrt');
    const transportData = {
        bts: {
            img : "/transport/Map-BTS-IT-1.png",
            text: `ลงที่ BTS สยาม ${"\n"} จากนั้นต่อรถหรือนั่งวินมาที่สามย่านมิตรทาวน์`
        },
        mrt: {
            img : "/transport/Map-MRT-IT.png",
            text: `ลงที่ MRT สถานีสามย่าน ${"\n"} จากนั้นเดินไปที่จามจุรีสแควร์ และออกทางประตู KFC`
        },
        bus: {
            img : "/transport/Map-BUS-IT-1.png",
            text: `สามารถนั่งรถเมล์สาย 29, 47, 50, หรือ 93 ${"\n"} ลงที่ป้ายจามจุรีสแควร์`
        }
    }

    return (
        <div className="pixel-font flex flex-col items-center w-full min-h-screen bg-darkblue">
            
            <div className="flex flex-col items-start mx-10 lg:mt-20">
                <div className="text-[64px] lg:text-[72px] text-lightgreen tracking-wider my-4" > HOW TO GO </div>
                <div className="flex bg-[#1E1E1E] rounded-[10px] p-1 gap-1"> 
                    <button
                        onClick={() => setTransport("bts")}
                        className={`flex items-center pixel-font gap-2 py-1 px-2 text-white rounded-full transition ${
                            transport === 'bts' ? "bg-[#4C5FFF]" : "bg-transparent"
                        }`}
                    >
                        <Image src="transport/logo/BTS.svg" alt="bts_svg" width={20} height={20}/>
                        <span className="text-[20px] lg:text-[24px]"> BTS </span>
                    </button>

                    <button
                        onClick={() => setTransport("mrt")}
                        className={`flex items-center pixel-font gap-2 py-1 px-2 text-white rounded-full transition ${
                            transport === 'mrt' ? "bg-[#4C5FFF]" : "bg-transparent"
                        }`}
                    >
                        <Image src="transport/logo/MRT.svg" alt="mrt_svg" width={20} height={20}/>
                        <span className="text-[20px] lg:text-[24px]"> MRT </span>
                    </button>

                    <button
                        onClick={() => setTransport("bus")}
                        className={`flex items-center pixel-font gap-2 py-1 px-2 text-white rounded-full transition ${
                            transport === 'bus' ? "bg-[#4C5FFF]" : "bg-transparent"
                        }`}
                    >
                        <Image src="transport/logo/BUS.svg" alt="bus_svg" width={20} height={20}/>
                        <span className="text-[20px] lg:text-[24px]"> BUS </span>
                    </button>
                </div>
                
                <div className="rounded-[15px] flex items-center justify-center my-4 overflow-hidden">
                    <Image
                        src={(transportData[transport]).img}
                        alt={transport}
                        width={800}
                        height={600}
                        className="object-contain"
                    />
                </div>

                <p className="text-white pixel-font text-[18px] sm:text-[25px] md:text-[30px] lg:text-[40px] leading-relaxed text-center px-2 mb-10 whitespace-pre-line break-words max-w-[790px] mx-auto">
                    {transportData[transport].text}
                </p>
            </div>
        </div>        
    )
}
