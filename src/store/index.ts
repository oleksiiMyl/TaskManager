import { configureStore } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import tasksReducer from './reducers/tasksSlice';
import modalReducer from './reducers/modalSlice';
import sidebarReducer from './reducers/sidebarSlice';
import draggableReducer from './reducers/draggableSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    modal: modalReducer,
    sidebar: sidebarReducer,
    draggable: draggableReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
