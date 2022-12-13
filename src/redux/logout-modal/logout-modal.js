import { createSlice } from '@reduxjs/toolkit';

const logoutModalSlice = createSlice({
  name: 'logout-modal',
  initialState: false,
  reducers: {
    toggleModal: (_, action) => {
      return action.payload;
    },
  },
});

export const { toggleModal } = logoutModalSlice.actions;
export default logoutModalSlice.reducer;
