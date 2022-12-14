import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isAddModalOpen: false,
    isEditModalOpen: false,
    isLogOutModalOpen: false,
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
  },
});

export const { isAddModalOpen, isEditModalOpen, isLogOutModalOpen } =
  modalSlice.actions;
export default modalSlice.reducer;
