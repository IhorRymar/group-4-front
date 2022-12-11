import { ErrorMessage, Formik } from 'formik';
import { useState } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
import { addTransaction } from 'services/transactions';
import * as Yup from 'yup';
import {
  CheckboxContainter,
  CheckboxField,
  MoneyText,
  StyledForm,
  TextField,
  TabletWrapper,
} from './AddTransactionForm.styled';
import { Comment } from 'components/AddTransactionForm/Comment/Comment';
import { DatePicker } from './DatePicker/DatePicker';
import CategorySelect from './CategorySelect/CategorySelect';
import { StyledButton } from '../StyledButton/StyledButton';
import { useDispatch } from 'react-redux';
import { CalendarIcon } from './DatePicker/DatePicker.styled';

export const AddTransactionForm = ({ toggleModal }) => {
  moment.updateLocale('uk');
  const initialDate = moment().format('DD.MM.YYYY');
  const [transactionType, setTransactonType] = useState('income');
  const isIncomeHandler = e => {
    let isChecked = e.target.checked;
    isChecked ? setTransactonType('expense') : setTransactonType('income');
  };

  const dispatch = useDispatch();

  const initialValues = {
    date: initialDate,
    amount: '',
    category: '',
    comment: '',
  };

  const addTrasactionSchema = Yup.object().shape({
    category: Yup.string(),
    amount: Yup.number().required(),
    date: Yup.date().required(),
    comment: Yup.string().max(50),
  });

  const handleSubmit = async ({ category, ...rest }, actions) => {
    const resultValues = {
      category,
      ...rest,
      transactionType,
    };
    let result =
      transactionType === 'expense'
        ? { transactionType, category, ...rest }
        : { transactionType, ...rest };

    console.log(resultValues);

    await dispatch(addTransaction(result));
    actions.resetForm();
    toggleModal();
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
                  transactionType === 'income'
                    ? { color: '#24cca7' }
                    : { color: '#E0E0E0' }
                }
              >
                Income
              </MoneyText>
              <CheckboxField
                type="checkbox"
                name="transactionType"
                onChange={e => isIncomeHandler(e)}
                value={transactionType}
              />

              <MoneyText
                style={
                  transactionType === 'expense'
                    ? { color: '#FF6596' }
                    : { color: '#E0E0E0' }
                }
              >
                Expenses
              </MoneyText>
            </CheckboxContainter>
          </label>
          {transactionType === 'expense' ? (
            <label htmlFor="category">
              <CategorySelect name="category" />
            </label>
          ) : (
            ''
          )}
          <TabletWrapper>
            <label htmlFor="amount">
              <TextField type="number" name="amount" placeholder="0.00" />
              <ErrorMessage
                name="amount"
                render={msg => {
                  toast.error(`${msg}`, { toastId: String(new Date()) });
                }}
              />
            </label>
            <label htmlFor="date" style={{ position: 'relative' }}>
              <DatePicker name="date" />
              <CalendarIcon />
            </label>
          </TabletWrapper>
          <label htmlFor="comment">
            <Comment name="comment" placeholder="Comment" minRows={4} />
          </label>
          <StyledButton type="submit">Add transaction</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
