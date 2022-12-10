import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useFormikContext } from 'formik';

export default function CategorySelect({ name }) {
  const options = [
    'Main expenses',
    'Products',
    'Car',
    'Self care',
    'Child care',
    'Household products',
    'Education',
    'Leisure',
    'Other expenses',
    'Entertainment',
  ];
  const [category, setCategory] = useState('');
  const { setFieldValue } = useFormikContext();

  const handleChange = event => {
    setCategory(event.target.value);
    setFieldValue(name, event.target.value);
  };

  return (
    <FormControl
      variant="standard"
      sx={{
        m: 1,
        width: '100%',
        marginBottom: '40px',
        marginRight: 0,
        marginLeft: 0,
        fontSize: '12px',
        borderBottomWidth: '1px',
        // borderBottom: `1px solid ${(p) => p.theme.color.muted}`,
      }}
    >
      <Select
        labelId="category"
        id="category"
        value={category}
        onChange={handleChange}
      >
        <MenuItem value="" placeholder="Choose category">
          <em>Choose category</em>
        </MenuItem>
        {options.map(option => {
          return (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
