// import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses } from 'redux/Statistics/statistics-operations';

import { TableContainer, SelectWrapper, TableHeader, TableTitle, List, ListItem, ColorBox, TextWrapper, ListItemText, TotalContainer, TotalText, TotalNumber } from './Table.styled';
import { StyledSelect, MenuProps, StyledMenuItem } from './SelectStyles';

const currentDate = new Date();
const currentMonth = currentDate.toLocaleString('en-EN', { month: 'long' });
const currentYear = currentDate.getFullYear();

const Table = ({stats}) => {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const expenses = useSelector(state => state.statistics.stats);

  // const period = {
  //   startMonth: '1',
  //   startYear: '2022',
  // };

  const dispatch = useDispatch();

  console.log(expenses);

  useEffect(() => {
    const period = {
      startMonth: 1,
      startYear: 2022,
    };

    dispatch(fetchExpenses(period));
  }, [dispatch]);

  return (
    <TableContainer>
      <SelectWrapper>
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
      </SelectWrapper>
      <TableHeader>
        <TableTitle>Category</TableTitle>
        <TableTitle>Sum</TableTitle>
      </TableHeader>
      <List>
        {stats.map(({ type, category, sum, index }) => {
          if (type === '-') {
            return (
              <ListItem key={category}>
                <ColorBox color={category}></ColorBox>
                <TextWrapper>
                  <ListItemText>{category}</ListItemText>
                  <ListItemText>{sum}</ListItemText>
                </TextWrapper>
              </ListItem>
            )
          }
          return null;
        }
        )}
      </List>
      <TotalContainer>
        <TotalText>Expenses:</TotalText>
        <TotalNumber exp>1000.00</TotalNumber>
      </TotalContainer>
      <TotalContainer>
        <TotalText>Income:</TotalText>
        <TotalNumber>2000.00</TotalNumber>
      </TotalContainer>
    </TableContainer>
  );
}

//MUI Styled:

const dropdownIcon = (props) => (
  <svg {...props} width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L10 10L19 1" stroke="black"/>
  </svg>
);

// Table.propTypes = {
//   stats: PropTypes.arrayOf(PropTypes.shape({
//     category: PropTypes.string.isRequired,
//     sum: PropTypes.string.isRequired,
//   })).isRequired,
// };

export default Table;