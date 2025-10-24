'use client';

import Image from "next/image";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NavBar from "./components/navbar";
import Table from "./components/Table";
import ResultTable from "./components/ResultTable";


export default function Home() {
  return (
    <div className="flex flex-col items-center  w-full h-full">
      <NavBar />
      {/* <Table /> */}
      {/* <ResultTable /> *
    </div>
)
}
