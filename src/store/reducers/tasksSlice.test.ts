import reducer, { createTask, deleteTask, updateTask, initialState } from './tasksSlice';

import { IN_REVIEW_TASK, TO_DO_TASK, ALL_TASKS } from '../mockData/tasks';

import { TO_DO, IN_REVIEW, IN_TEST } from '../../constants/statuses';

describe('tasksSlice', () => {
  test('should create new task and add in to_do array', () => {
    const previousState = initialState;

    const expectedResult = { ...previousState, [TO_DO]: [...previousState[TO_DO], TO_DO_TASK] };

    expect(reducer(previousState, createTask(TO_DO_TASK))).toEqual(expectedResult);
  });

  test('should delete task correctly', () => {
    const previousState = ALL_TASKS;

    const expectedResult = {
      ...previousState,
      [IN_REVIEW]: previousState[IN_REVIEW].filter((task) => task.id !== IN_REVIEW_TASK.id),
    };

    expect(reducer(previousState, deleteTask(IN_REVIEW_TASK))).toEqual(expectedResult);
  });

  test('should update task and change board place correctly', () => {
    const previousState = ALL_TASKS;

    const initialTask = TO_DO_TASK;
    const updatedTask = { ...TO_DO_TASK, assignee: 'Hanna', status: IN_TEST };

    const expectedResult = {
      ...previousState,
      [TO_DO]: previousState[TO_DO].filter((task) => task.id !== initialTask.id),
      [IN_TEST]: [...previousState[IN_TEST], updatedTask],
    };

    expect(reducer(previousState, updateTask({ initialTask, updatedTask }))).toEqual(
      expectedResult
    );
  });
});
