// import { ErrorMessage, Formik } from 'formik';

// import moment from 'moment';
// import { useState } from 'react';
// import { toast } from 'react-toastify';
// import {
//   addTransaction,
//   fetchTransactions,
//   updateTransactionById,
// } from '../../redux/transactions/transactions-operation';
// import * as Yup from 'yup';
// import {
//   StyledForm,
//   CheckboxContainter,
//   CheckboxField,
//   MoneyText,
//   TextField,
//   TabletWrapper,
// } from '../AddTransactionForm/AddTransactionForm.styled';
// import { Comment } from 'components/AddTransactionForm/Comment/Comment';
// import { DatePicker } from '../AddTransactionForm/DatePicker/DatePicker';
// import CategorySelect from '../AddTransactionForm/CategorySelect/CategorySelect';
// import { StyledButton } from '../ModalAddTransaction/StyledButton/StyledButton';
// import { useDispatch } from 'react-redux';
// import { CalendarIcon } from '../AddTransactionForm/DatePicker/DatePicker.styled';

// export const ModalEditForm = ({ toggleModal, transaction, typeModal }) => {
//   const initalTransactionType =
//     typeModal === 'add' ? 'income' : transaction?.transactionType;

//   const dispatch = useDispatch();
//   const [transactionType, setTransactonType] = useState(initalTransactionType);
//   const isIncomeHandler = e => {
//     let isChecked = e.target.checked;
//     isChecked ? setTransactonType('expense') : setTransactonType('income');
//   };

//   const initialDate = moment(transaction?.date).utc();
//   const initialValues = {
//     date: initialDate,
//     amount: transaction?.amount,
//     category: transaction?.category,
//     comment: transaction?.comment,
//   };

//   const addTrasactionSchema = Yup.object().shape({
//     category: Yup.string(),
//     amount: Yup.number().required(),
//     date: Yup.date().required(),
//     comment: Yup.string().max(50),
//   });

//   const handleSubmit = async ({ category, ...rest }, actions) => {
//     let result =
//       transactionType === 'expense'
//         ? { transactionType, category, ...rest }
//         : { transactionType, ...rest };

//     const updatePayload = { id: transaction._id, transaction: result };

//     try {
//       switch (typeModal) {
//         case 'add':
//           await dispatch(updateTransactionById(updatePayload));
//           break;
//         case 'edit':
//           await dispatch(addTransaction(result));
//           break;

//         default:
//           toggleModal();
//       }

//       await dispatch(fetchTransactions());
//       toggleModal();
//     } catch (error) {
//       toast.error`${error.message}`;
//     }
//     actions.resetForm();
//   };

//   return (
//     <>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//         validationSchema={addTrasactionSchema}
//       >
//         <StyledForm autoComplete="off">
//           {typeModal === 'add' && (
//             <label htmlFor="transactionType">
//               <CheckboxContainter>
//                 <MoneyText
//                   style={
//                     transactionType === 'income'
//                       ? { color: '#24cca7' }
//                       : { color: '#E0E0E0' }
//                   }
//                 >
//                   Income
//                 </MoneyText>
//                 <CheckboxField
//                   type="checkbox"
//                   name="transactionType"
//                   onChange={e => isIncomeHandler(e)}
//                   value={transactionType}
//                 />

//                 <MoneyText
//                   style={
//                     transactionType === 'expense'
//                       ? { color: '#FF6596' }
//                       : { color: '#E0E0E0' }
//                   }
//                 >
//                   Expenses
//                 </MoneyText>
//               </CheckboxContainter>
//             </label>
//           )}
//           {transactionType === 'expense' ? (
//             <label htmlFor="category">
//               <CategorySelect name="category" />
//             </label>
//           ) : (
//             ''
//           )}
//           <TabletWrapper>
//             <label htmlFor="amount">
//               <TextField type="number" name="amount" placeholder="0.00" />
//               <ErrorMessage
//                 name="amount"
//                 render={msg => {
//                   toast.error(`${msg}`, { toastId: String(new Date()) });
//                 }}
//               />
//             </label>
//             <label htmlFor="date" style={{ position: 'relative' }}>
//               <DatePicker name="date" />
//               <CalendarIcon />
//             </label>
//           </TabletWrapper>
//           <label htmlFor="comment">
//             <Comment name="comment" placeholder="Comment" minRows={4} />
//           </label>
//           <StyledButton type="submit">Update transaction</StyledButton>
//         </StyledForm>
//       </Formik>
//     </>
//   );
// };
