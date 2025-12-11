import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useState, useRef } from "react";

export default function SelectSport({onSportChange,
}: {
  onSportChange?: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [sport, setSport] = useState("");
  const ref = useRef(null);

  const handleSelect = (value: string) => {
  setSport(value);
  onSportChange?.(value);
  setOpen(false);
};

  return (
    <div className="relative w-full">
      {/* Select box */}
      <div
        ref={ref}
        onClick={() => setOpen(!open)}
        className="w-full border border-white text-white px-4 py-3 rounded cursor-pointer"
      >
        {sport || "เลือกชนิดกีฬา"}
      </div>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute top-[100%] left-0 w-full bg-white text-black rounded shadow-lg mt-1 z-50">
          {["ฟุตซอล","บาสเกตบอลชาย","บาสเกตบอลหญิง","แข่งเกม prompt","แข่งเกมตอบคำถาม"].map(
            (item) => (
              <div
                key={item}
                onClick={() => handleSelect(item)}
                className="px-4 py-3 hover:bg-gray-200 cursor-pointer"
              >
                {item}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
