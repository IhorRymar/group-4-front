import { ErrorMessage, Formik } from 'formik';
import { useState } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import {
  CheckboxContainter,
  CheckboxField,
  MoneyText,
  StyledForm,
  TextField,
  Comment,
} from './AddTransactionForm.styled';
import { DatePicker } from '../DatePicker/DatePicker';
import CategorySelect from '../CategorySelect/CategorySelect';
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
    category: '...',
    amount: '',
    date: initialDate,
    comment: '',
  };

  const addTrasactionSchema = Yup.object().shape({
    category: Yup.string().required(),
    amount: Yup.number().required(),
    date: Yup.date().required(),
    comment: Yup.string().max(50),
  });

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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={addTrasactionSchema}
      >
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
              <CategorySelect name="category" />
            </label>
          ) : (
            ''
          )}
          <label htmlFor="amount">
            <TextField type="text" name="amount" placeholder="0.00" />
            <ErrorMessage
              name="amount"
              render={msg => {
                toast.error(`${msg}`, { toastId: String(new Date()) });
              }}
            />
          </label>
          <label htmlFor="date">
            <DatePicker name="date" />
          </label>
          <label htmlFor="comment">
            <Comment name="comment" placeholder="Comment" minRows={1} />
          </label>
          <StyledButton type="submit">Add transaction</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
