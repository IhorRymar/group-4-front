import modalScliceReducer from 'redux/modal/modal-sclice';
import logoutModalSliceReducer from 'redux/logout-modal/logout-modal';

import { combineReducers } from 'redux';

const initialState = false;

const isLoadingReducer = (state = initialState, action) => {
  const pending = [
    'auth/signup/pending',
    'auth/login/pending',
    'auth/current/pending',
    'auth/logout/pending',
    'transactions/add/pending',
    'transactions/fetch/pending',
    'transactions/fetchById/pending',
    'categories/fetch/pending',
    'balance/fetch/pending',
    'statistics/fetch/pending',
    'currency/fetch/pending',
  ];

  const isPending = pending.includes(action.type);

  return isPending;
};

const globalReducer = combineReducers({
  loading: isLoadingReducer,
  isAddTransactionModalOpen: modalScliceReducer,
  logoutModal: logoutModalSliceReducer,
});

export default globalReducer;
