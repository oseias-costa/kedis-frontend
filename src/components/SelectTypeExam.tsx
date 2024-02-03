import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectTypeExam() {
  const [age, setAge] = React.useState('Cloud Pratictioner');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 180}} size="small">
      <InputLabel id="demo-select-small-label">Exame</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        defaultValue='Cloud Pratictioner'
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={"Cloud Pratictioner"} defaultValue="Cloud Pratictioner">Cloud Pratictioner</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}