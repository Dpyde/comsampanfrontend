"use client";
import React from 'react'
import MultipleSelect from "../components/multipleSelect";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TeamSelect from '../components/teamSelectforstaff';
import { prompt } from "@/app/font";



const page = () => {
    const [value, setValue] = React.useState("score");

  return (
    <div className='flex flex-col items-center gap-3 mt-5'>
        <div className='text-7xl text-[#B2F8E7] pixel-font'>Staff Report</div>
        <MultipleSelect />
        <div className='mt-4'>
            <div className='font-semibold text-2xl'>เลือกรอบการแข่งขัน</div>
            <div className='flex justify-center'>
                <FormControl className={prompt.variable}>
                <RadioGroup
                    row
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    sx={{ gap: 2,
                    '& .MuiFormControlLabel-label': {
                    color: "white",
                    fontSize: "1.2rem",
                    fontFamily: "var(--font-prompt)",
                },
                }}
                >
                <FormControlLabel
                    value="score"
                    control={<Radio sx={{ color: "white" }} />}
                    label="รอบเก็บคะแนน"
                    sx={{ color: "white" }}
                />
                <FormControlLabel
                    value="final"
                    control={<Radio sx={{ color: "white" }} />}
                    label="รอบชิง"
                    sx={{ color: "white" }}
                />
                </RadioGroup>
                </FormControl>

            </div>
             
            <div>
                <div className='font-semibold text-2xl mt-4'>เลือกคู่การแข่งขัน และกรอกคะแนน</div>
                <div>e.g. ทีม A ได้ 0 คะแนน แข่งกับทีม B ได้ 1 คะแนน ให้กดเลือก ทีม A กรอกเฉพาะเลข 0 </div>
                <div>และกดเลือก ทีม B กรอกเฉพาะเลข 1</div>

         </div>
        </div>
       
        <TeamSelect />

        <button className='w-64 h-[64px] pixel-font text-6xl rounded-xl bg-[#4C5FFF] mt-1 hover:bg-white hover:text-black'>confirm</button>
    </div>
  )
}

export default page