'use client';

import Image from "next/image";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TableComponent from "./components/Table";
import ResultTable from "./components/ResultTable";

export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center  items-center">
      
      {/* <TableComponent /> */}
      <ResultTable />
    </div>
)
}
