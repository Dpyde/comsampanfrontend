'use client';

import Image from "next/image";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NavBar from "./components/navbar";
import Table from "./components/Table";
import ResultTable from "./components/ResultTable";
import QuizResultTable from "./components/QuizResultTable";
import PromptResultTableFirst from "./components/PromptResultTableFirst";
import PromptResultTableSecond from "./components/PromptResultTableSecond";
import QuizResultTableFinal from "./components/QuizResultTableFinal";
import PromptResultTableFinal from "./components/PromptResultTableFinal";
import { Xwrapper } from "react-xarrows";


export default function Home() {
  return (
      <div className="flex flex-col items-center  w-full h-full">
        <NavBar />
        {/* <div className="mt-30"><Table /></div> */}
        {/* <div className="mt-30"><ResultTable /> </div> */}
        <div className="mt-10">< QuizResultTable /></div>
        <div className="mt-10"><PromptResultTableFirst/></div>
        <div className="mt-10"><PromptResultTableSecond/></div>
        <div className="mt-10"><QuizResultTableFinal/></div>
        <div className="mt-10"><PromptResultTableFinal/></div>
      </div>
  )
}
