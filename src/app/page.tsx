'use client';

import Image from "next/image";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NavBar from "./components/navbar";
import Table from "./components/Table";
import ResultTable from "./components/ResultTable";
import QuizResultTable from "./components/QuizResultTable";
import PromptResultTable from "./components/PromptResultTable";


export default function Home() {
  return (
    <div className="flex flex-col items-center  w-full h-full">
      <NavBar />
      {/* <div className="mt-30"><Table /></div> */}
      {/* <div className="mt-30"><ResultTable /> </div> */}
      <div className="mt-30">< QuizResultTable /></div>
      <div className="mt-10"><PromptResultTable/></div>
    </div>
)
}
