import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import {
  StyledSelect,
  StyledMenuItem,
  dropdownIcon,
  MenuProps,
} from './CategorySelect.styled';
import { useFormikContext } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactionsCategories } from 'redux/categories/categories-operations';
import { useEffect } from 'react';
import { getCategories } from 'redux/categories/categories-selector';
import {} from './CategorySelect.styled';
export default function CategorySelect({ name }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionsCategories());
  }, [dispatch]);

  const categories = useSelector(getCategories);

  const { setFieldValue, values } = useFormikContext();

  const handleChange = event => {
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
      }}
    >
      <StyledSelect
        labelId="category"
        id="category"
        displayEmpty
        value={values.category}
        onChange={handleChange}
        MenuProps={MenuProps}
        IconComponent={dropdownIcon}
      >
        <StyledMenuItem value="none" disabled>
          <span style={{ color: '#E0E0E0' }}>Choose Category</span>
        </StyledMenuItem>
        {categories.map(option => {
          return (
            <StyledMenuItem key={option._id} value={option.category_id}>
              {option.category_name}
            </StyledMenuItem>
          );
        })}
      </StyledSelect>
    </FormControl>
  );
}
