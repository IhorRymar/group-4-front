import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatistics } from 'redux/Statistics/statistics-operations';
import { fetchTransactions } from 'redux/transactions/transactions-operation';

import { months, convertMonthNameToNumber } from 'services/monthList';

import { TableContainer, SelectWrapper, TableHeader, TableTitle, List, ListItem, ColorBox, TextWrapper, ListItemText, NotificationText, TotalContainer, TotalText, TotalNumber } from './Table.styled';
import { StyledSelect, MenuProps, StyledMenuItem, dropdownIcon } from './SelectStyles';

const currentDate = new Date();
const currentMonth = currentDate.toLocaleString('en-EN', { month: 'long' });
const currentYear = currentDate.getFullYear();

const Table = ({ stats }) => {
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
  const allTransactions = useSelector(state => state.transactions.items.result);
  // const yearList = [...new Set(allTransactions.map(item => item.date.substring(0, 4)))];

  const dispatch = useDispatch();

  useEffect(() => {
    const period = {
    startMonth: monthNumber,
    startYear: year,
    } ;
    dispatch(fetchStatistics(period));
    dispatch(fetchTransactions());
  }, [dispatch, monthNumber, year]);

  console.log(allTransactions);

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
          {/* {(yearList.length !== 0) ? yearList.map(year => {
            return (
              <StyledMenuItem key={year} value={year}>{year}</StyledMenuItem>
            )
          }) :
            <StyledMenuItem key={currentYear} value={currentYear}>{currentYear}</StyledMenuItem>
          } */}
          <StyledMenuItem key={currentYear} value={currentYear}>{currentYear}</StyledMenuItem>
        </StyledSelect>
      </SelectWrapper>
      <TableHeader>
        <TableTitle>Category</TableTitle>
        <TableTitle>Sum</TableTitle>
      </TableHeader>
      <List>
        {(expenses.length !== 0) ? expenses.map(({ totalSum, category, categoryName }) => {
          return (
            <ListItem key={category}>
              <ColorBox color={category}></ColorBox>
              <TextWrapper>
                <ListItemText>{categoryName}</ListItemText>
                <ListItemText>{totalSum.toFixed(2)}</ListItemText>
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
        <TotalNumber exp>{expensesTotal.toFixed(2)}</TotalNumber>
      </TotalContainer>
      <TotalContainer>
        <TotalText>Income:</TotalText>
        <TotalNumber>{incomeTotal.toFixed(2)}</TotalNumber>
      </TotalContainer>
    </TableContainer>
  );
}

export default Table;