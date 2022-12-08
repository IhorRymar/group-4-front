const initialState = {
  loading: false,
};

export const globalReducer = (state = initialState, action) => {
  const pending = [
    'auth/signup/pending',
    'auth/login/pending',
    'auth/current/pending',
  ];

  const isPending = pending.includes(action.type);

  if (isPending) {
    return {
      loading: true,
    };
  }
  return {
    loading: false,
  };
};
