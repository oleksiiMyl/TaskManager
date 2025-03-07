import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TO_DO, STATUS_LIST } from '../../constants/statuses';
import { CREATE_MODE, EDIT_MODE } from '../../constants/sidebar';

import { TaskType } from '../../types/task';

type SidebarModeType = typeof CREATE_MODE | typeof EDIT_MODE;

export type SidebarStateType = {
  mode?: SidebarModeType;
  currentTask: {
    id?: string;
    title: string;
    description: string;
    assignee?: string;
    status: (typeof STATUS_LIST)[number];
  };
};

export const initialState: SidebarStateType = {
  mode: undefined,
  currentTask: {
    id: undefined,
    title: '',
    description: '',
    assignee: '',
    status: TO_DO,
  },
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: (state, action: PayloadAction<SidebarModeType>) => {
      state.mode = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.currentTask.id = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.currentTask.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.currentTask.description = action.payload;
    },
    setAssignee: (state, action: PayloadAction<string>) => {
      state.currentTask.assignee = action.payload;
    },
    setStatus: (state, action: PayloadAction<(typeof STATUS_LIST)[number]>) => {
      state.currentTask.status = action.payload;
    },
    setCurrentTask: (state, action: PayloadAction<TaskType>) => {
      state.currentTask = action.payload;
    },
    clearSidebar: () => initialState,
  },
});

export const {
  openSidebar,
  setId,
  setTitle,
  setDescription,
  setAssignee,
  setStatus,
  clearSidebar,
  setCurrentTask,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
