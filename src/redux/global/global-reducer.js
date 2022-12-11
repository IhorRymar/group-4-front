import modalScliceReducer from 'redux/modal/modal-sclice';
import { combineReducers } from 'redux';

const initialState = false;

const isLoadingReducer = (state = initialState, action) => {
  const pending = [
    'auth/signup/pending',
    'auth/login/pending',
    'auth/current/pending',
    'transactions/add/pending',
  ];

  const isPending = pending.includes(action.type);

  return isPending;
};

const globalReducer = combineReducers({
  loading: isLoadingReducer,
  isAddTransactionModalOpen: modalScliceReducer,
});

export default globalReducer;
