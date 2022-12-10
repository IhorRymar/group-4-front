import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatistics } from 'redux/Statistics/statistics-operations';

import { months, convertMonthNameToNumber } from 'services/monthList';

import { TableContainer, SelectWrapper, TableHeader, TableTitle, List, ListItem, ColorBox, TextWrapper, ListItemText, NotificationText, TotalContainer, TotalText, TotalNumber } from './Table.styled';
import { StyledSelect, MenuProps, StyledMenuItem, dropdownIcon } from './SelectStyles';

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

  const monthNumber = convertMonthNameToNumber(month, year);
  const expenses = useSelector(state => state.statistics.expenses);
  const income = useSelector(state => state.statistics.income);
  const expensesTotal = expenses.reduce((acc, item) => acc + item.totalSum, 0);
  const incomeTotal = income.reduce((acc, item) => acc + item.totalSum, 0);

  
  const dispatch = useDispatch();

  useEffect(() => {
    const period = {
    startMonth: monthNumber,
    startYear: year,
    } ;
    dispatch(fetchStatistics(period));
  }, [dispatch, monthNumber, year]);

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
          {months.map(month => {
            return (
              <StyledMenuItem key={month} value={month}>{month}</StyledMenuItem>
            )
          })}
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
        {(expenses.length !== 0) ? expenses.map(({ totalSum, categoryName, index }) => {
          return (
            <ListItem key={categoryName}>
              <ColorBox color={categoryName}></ColorBox>
              <TextWrapper>
                <ListItemText>{categoryName}</ListItemText>
                <ListItemText>{totalSum}</ListItemText>
              </TextWrapper>
            </ListItem>
          );
        }
        ) :
        <ListItem>
          <NotificationText>No expenses were found in this period.</NotificationText>
        </ListItem>
        }
      </List>
      <TotalContainer>
        <TotalText>Expenses:</TotalText>
        <TotalNumber exp>{expensesTotal}</TotalNumber>
      </TotalContainer>
      <TotalContainer>
        <TotalText>Income:</TotalText>
        <TotalNumber>{incomeTotal}</TotalNumber>
      </TotalContainer>
    </TableContainer>
  );
}

export default Table;