import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskType } from '../../types/task';

export type modalStateType = {
  isOpen: boolean;
  additionalData: TaskType | {};
};

export const initialState: modalStateType = {
  isOpen: false,
  additionalData: {},
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<TaskType>) => {
      state.isOpen = true;
      state.additionalData = action.payload;
    },
    closeModal: () => initialState,
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
