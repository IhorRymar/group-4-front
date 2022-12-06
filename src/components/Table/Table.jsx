import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { styled, Select, MenuItem } from "@mui/material"

import css from './Table.module.css';



const Table = ({items}) => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className={css.container}>
      <div className={css.selectWrapper}>
        <StyledSelect
          value={month}
          onChange={handleMonthChange}
          displayEmpty
          IconComponent={dropdownIcon}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span>Month</span>;
            }
            return selected;
          }}
          MenuProps={MenuProps}
        >
          <StyledMenuItem value={'January'}>January</StyledMenuItem>
          <StyledMenuItem value={'February'}>February</StyledMenuItem>
          <StyledMenuItem value={'March'}>March</StyledMenuItem>
          <StyledMenuItem value={'April'}>April</StyledMenuItem>
          <StyledMenuItem value={'May'}>May</StyledMenuItem>
          <StyledMenuItem value={'June'}>June</StyledMenuItem>
          <StyledMenuItem value={'July'}>July</StyledMenuItem>
          <StyledMenuItem value={'August'}>August</StyledMenuItem>
          <StyledMenuItem value={'September'}>September</StyledMenuItem>
          <StyledMenuItem value={'October'}>October</StyledMenuItem>
          <StyledMenuItem value={'November'}>November</StyledMenuItem>
          <StyledMenuItem value={'December'}>December</StyledMenuItem>
        </StyledSelect>
        <StyledSelect
          value={year}
          onChange={handleYearChange}
          displayEmpty
          IconComponent={dropdownIcon}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span>Year</span>;
            }
            return selected;
          }}
          MenuProps={MenuProps}
        >
          <StyledMenuItem value={'2019'}>2019</StyledMenuItem>
          <StyledMenuItem value={'2020'}>2020</StyledMenuItem>
          <StyledMenuItem value={'2021'}>2021</StyledMenuItem>
          <StyledMenuItem value={'2022'}>2022</StyledMenuItem>
        </StyledSelect>
      </div>
      <div className={css.tableHeader}>
        <p className={css.tableTitle}>Category</p>
        <p className={css.tableTitle}>Sum</p>
      </div>
      <ul className={css.list}>
        {items.map(({ type, category, sum, index }) => {
          if (type === '-') {
            return (
              <li key={index} className={css.listItem}>
                <div className={css.categoryColorBox}></div>
                <div className={css.textWrapper}>
                  <p className={css.listItemText}>{category}</p>
                  <p className={css.listItemText}>{sum}</p>
                </div>
              </li>
            )
          }
          return null;
        }
        )}
      </ul>
      <div className={css.totalWrapper}>
        <p>Expenses:</p>
        <p>1000</p>
      </div>
      <div className={css.totalWrapper}>
        <p>Income:</p>
        <p>2000</p>
      </div>
    </div>
  );
}

//MUI Styled:

const dropdownIcon = (props) => (
  <svg {...props} width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L10 10L19 1" stroke="black"/>
  </svg>
);

const StyledSelect = styled(Select)({
  width: '280px',
  color: '#000',
  fontFamily: 'Circe',
  borderRadius: '30px',
  marginBottom: '20px',
  borderColor: '#4A56E2',

  '@media screen and (min-width: 768px)': {
    width: '160px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#000',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#4A56E2',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #4A56E2',
    outline: 'none',
  },
  '& .MuiSelect-outlined': {
    padding: '13px 20px',
    color: '#000',
  },
  '& .MuiSelect-icon': {
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  '& .MuiMenu-list': {
    backgroundColor: 'red,'
  }
});

const MenuProps = {
  anchorPosition: { top: 200, left: 400 },
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  }, 
  PaperProps: {
    style: {
      background: 'rgba(255, 255, 255, 0.7)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(25px)',
      borderRadius: '20px', 
      maxHeight: '232px',
    }
  }
};

const StyledMenuItem = styled(MenuItem)({
  fontFamily: 'Circe',

  '&:hover': {
    color: '#ff6596',
    backgroundColor: '#fff',
  },
  '&.Mui-selected': {
    color: '#ff6596',
    backgroundColor: '#fff'
  },
  '&.MuiMenu-list': {
    borderRadius: '0',
  },
});


Table.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
    sum: PropTypes.string.isRequired,
  })).isRequired,
};

export default Table;