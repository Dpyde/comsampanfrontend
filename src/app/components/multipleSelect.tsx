
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { prompt } from '@/app/font';

export default function SelectLabels() {
  const [sport, setSport] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSport(event.target.value);
  };

  return (
    <div className='mt-3'>
     <FormControl
        variant="outlined"
        sx={{ m: 1, minWidth: 300,
        backgroundColor: '#f0f0f0',
        borderRadius: 2,
        borderWidth: 2,
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4C5FFF',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4C5FFF',
        },
    
  }}
>
  <InputLabel sx={{fontFamily: 'var(--font-prompt)', color: 'black', fontWeight: '500'}} id="select-sport-label">เลือกประเภทกีฬา</InputLabel>
  <Select
    labelId="select-sport-label"
    id="select-sport"
    value={sport}
    label="เลือกประเภทกีฬา"
    onChange={handleChange}
  >
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    <MenuItem value={10}>บาสเกตบอลชาย</MenuItem>
    <MenuItem value={20}>บาสเกตบอลหญิง</MenuItem>
    <MenuItem value={30}>ฟุตบอล</MenuItem>
  </Select>
</FormControl>

      
    </div>
  );
}