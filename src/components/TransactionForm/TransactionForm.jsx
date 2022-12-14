import { ErrorMessage, Formik } from 'formik';

import moment from 'moment';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  addTransaction,
  fetchTransactions,
  updateTransactionById,
} from '../../redux/transactions/transactions-operation';
import * as Yup from 'yup';
import {
  StyledForm,
  CheckboxContainter,
  CheckboxField,
  MoneyText,
  TextField,
  TabletWrapper,
} from './TransactionForm.styled';
import { Comment } from './Comment/Comment';
import { DatePicker } from './DatePicker/DatePicker';
import CategorySelect from './CategorySelect/CategorySelect';
import { StyledButton } from '../ModalAddTransaction/StyledButton/StyledButton';
import { useDispatch } from 'react-redux';
import { CalendarIcon } from './DatePicker/DatePicker.styled';

export const TransactionForm = ({ toggleModal, transaction, typeForm }) => {
  const initalTransactionType =
    typeForm === 'add' ? 'income' : transaction?.transactionType;
  console.log(initalTransactionType);
  const dispatch = useDispatch();
  const [transactionType, setTransactonType] = useState(initalTransactionType);
  const isIncomeHandler = e => {
    let isChecked = e.target.checked;
    isChecked ? setTransactonType('expense') : setTransactonType('income');
  };

  const initialDate = moment(transaction?.date).utc();
  const initialValues =
    typeForm === 'add'
      ? { date: initialDate, amount: '', category: 'none', comment: '' }
      : {
          date: initialDate,
          amount: transaction?.amount,
          category: transaction?.category,
          comment: transaction?.comment,
        };

  const addTrasactionSchema = Yup.object().shape({
    category: Yup.string(),
    amount: Yup.number().required(),
    date: Yup.date().required(),
    comment: Yup.string().max(50),
  });

  const handleSubmit = async ({ category, ...rest }, actions) => {
    let result =
      transactionType === 'expense'
        ? { transactionType, category, ...rest }
        : { transactionType, ...rest };

    const submitData =
      typeForm === 'add' ? { ...result } : { id: transaction._id, ...result };
    try {
      switch (typeForm) {
        case 'add':
          await dispatch(addTransaction(submitData));
          console.log(submitData);
          break;
        case 'update':
          await dispatch(updateTransactionById(submitData));
          console.log(submitData);
          break;

        default:
          console.log('switchDefault');
      }

      //   await dispatch(fetchTransactions());
      toggleModal();
    } catch (error) {
      toast.error`${error.message}`;
    }
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
          {typeForm === 'add' && (
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
          )}
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
          <StyledButton type="submit">
            {typeForm === 'add' ? 'Add transaction' : 'Update transaction'}
          </StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
