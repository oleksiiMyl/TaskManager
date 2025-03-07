import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STATUS_LIST } from '../../constants/statuses';

type draggableStateType = {
  isDragging: boolean;
  dropArea: (typeof STATUS_LIST)[number] | '';
};

export const initialState: draggableStateType = {
  isDragging: false,
  dropArea: '',
};

export const draggableSlice = createSlice({
  name: 'draggable',
  initialState,
  reducers: {
    setIsDragging: (state, action: PayloadAction<boolean>) => {
      state.isDragging = action.payload;
    },
    setDropArea: (state, action: PayloadAction<(typeof STATUS_LIST)[number] | ''>) => {
      state.dropArea = action.payload;
    },
    clearDraggableState: () => initialState,
  },
});

export const { setIsDragging, setDropArea, clearDraggableState } = draggableSlice.actions;

export default draggableSlice.reducer;
