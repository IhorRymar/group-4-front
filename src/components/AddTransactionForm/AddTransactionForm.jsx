import { Formik } from 'formik';
import { useState } from 'react';
import moment from 'moment';
import {
  CheckboxContainter,
  CheckboxField,
  MoneyText,
  StyledForm,
  TextField,
  Comment,
} from './AddTransactionForm.styled';
import { DatePicker } from '../DatePicker/DatePicker3';
import BasicSelect from '../DropDown/DropDown';
import { StyledButton } from '../StyledButton/StyledButton';

export const AddTransactionForm = () => {
  moment.updateLocale('uk');
  const initialDate = moment().format('DD.MM.YYYY');
  const [transactionType, setTransactonType] = useState('Income');
  const isIncomeHandler = e => {
    let isChecked = e.target.checked;
    isChecked ? setTransactonType('Expenses') : setTransactonType('Income');
  };

  const initialValues = {
    transactionType: { transactionType },
    amount: '',
    date: initialDate,
    comment: '',
    category: '...',
  };

  const handleSubmit = ({ transactionType, ...rest }, actions) => {
    let values = {
      ...transactionType,
      ...rest,
    };
    console.log(values);

    actions.resetForm();
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <StyledForm autoComplete="off">
          <label htmlFor="transactionType">
            <CheckboxContainter>
              <MoneyText
                style={
                  transactionType === 'Income'
                    ? { color: '#24cca7' }
                    : { color: '#E0E0E0' }
                }
              >
                Income
              </MoneyText>
              <CheckboxField
                type="checkbox"
                name="money"
                onChange={e => isIncomeHandler(e)}
              />

              <MoneyText
                style={
                  transactionType === 'Expenses'
                    ? { color: '#FF6596' }
                    : { color: '#E0E0E0' }
                }
              >
                Expenses
              </MoneyText>
            </CheckboxContainter>
          </label>
          {transactionType === 'Expenses' ? (
            <label htmlFor="category">
              <BasicSelect name="category" />
            </label>
          ) : (
            ''
          )}
          <label htmlFor="amount">
            <TextField type="text" name="amount" placeholder="0.00" />
          </label>
          <label htmlFor="date">
            <DatePicker name="date" />
          </label>
          <label htmlFor="comment">
            <Comment name="comment" placeholder="Comment" minRows={5} />
          </label>
          <StyledButton type="submit">Add transaction</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
