import { TO_DO, IN_PROGRESS, IN_REVIEW, IN_TEST, DONE } from '../../constants/statuses';
import { TaskType } from '../../types/task';
import { TasksStateType } from '../reducers/tasksSlice';

export const TO_DO_TASK: TaskType = {
  id: '123',
  title: 'to do title',
  description: 'to do description',
  assignee: '',
  status: TO_DO,
};

export const IN_REVIEW_TASK: TaskType = {
  id: '133',
  title: 'in review title',
  description: 'in review description',
  assignee: 'Jack',
  status: IN_REVIEW,
};

export const ALL_TASKS: TasksStateType = {
  [TO_DO]: [TO_DO_TASK],
  [IN_PROGRESS]: [],
  [IN_REVIEW]: [IN_REVIEW_TASK],
  [IN_TEST]: [],
  [DONE]: [],
};
