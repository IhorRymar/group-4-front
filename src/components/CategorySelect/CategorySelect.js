import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useFormikContext } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactionsCategories } from 'redux/categories/categories-operations';
import { useEffect } from 'react';
import { getCategories } from 'redux/categories/categories-selector';

export default function CategorySelect({ name }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionsCategories());
  }, [dispatch]);

  const categories = useSelector(getCategories);

  // const categories = {
  //   'Main expenses': 0,
  //   Products: 1,
  //   Car: 2,
  //   'Self care': 3,
  //   'Child care': 4,
  //   'Household products': 5,
  //   Education: 6,
  //   Leisure: 6,
  //   'Other expenses': 8,
  //   Entertainment: 9,
  // };
  const [category, setCategory] = useState('');
  const { setFieldValue } = useFormikContext();

  const handleChange = event => {
    setCategory(event.target.value);
    setFieldValue(name, event.target.value);
    console.log(category);
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
        {categories.map(option => {
          return (
            <MenuItem key={option._id} value={option.category_id}>
              {option.category_name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
