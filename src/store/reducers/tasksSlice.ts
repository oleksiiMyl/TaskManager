import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskType } from '../../types/task';
import { TO_DO, IN_PROGRESS, IN_REVIEW, IN_TEST, DONE } from '../../constants/statuses';

export type TasksStateType = Record<string, TaskType[] | []>;

export const initialState: TasksStateType = {
  [TO_DO]: [],
  [IN_PROGRESS]: [],
  [IN_REVIEW]: [],
  [IN_TEST]: [],
  [DONE]: [],
};

export const tasksSlice = createSlice({
  name: 'tasksByStatus',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<TaskType>) => {
      state[TO_DO] = [...state[TO_DO], action.payload];
    },
    deleteTask: (state, action: PayloadAction<TaskType>) => {
      const { status, id } = action.payload;
      state[status] = state[status].filter((task) => task.id !== id);
    },
    updateTask: (
      state,
      action: PayloadAction<{ initialTask: TaskType; updatedTask: TaskType }>
    ) => {
      const { initialTask, updatedTask } = action.payload;
      const initialStatus = initialTask.status;
      const updatedStatus = updatedTask.status;

      if (initialStatus !== updatedStatus) {
        state[initialStatus] = state[initialStatus].filter((task) => task.id !== initialTask.id);
        state[updatedStatus] = [...state[updatedStatus], updatedTask];
      } else {
        state[updatedStatus] = state[updatedStatus].map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        );
      }
    },
  },
});

export const { createTask, deleteTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;
