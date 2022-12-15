import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isAddModalOpen: false,
    isEditModalOpen: false,
    isLogOutModalOpen: false,
    isDelModalOpen: false,
  },
  reducers: {
    isAddModalOpen: (state, action) => {
      state.isAddModalOpen = action.payload;
    },
    isEditModalOpen: (state, action) => {
      state.isEditModalOpen = action.payload;
    },
    isLogOutModalOpen: (state, action) => {
      state.isLogOutModalOpen = action.payload;
    },
    isDelModalOpen: (state, action) => {
      state.isDelModalOpen = action.payload;
    },
  },
});

export const {
  isAddModalOpen,
  isEditModalOpen,
  isLogOutModalOpen,
  isDelModalOpen,
} = modalSlice.actions;
export default modalSlice.reducer;
