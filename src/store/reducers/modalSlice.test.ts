import reducer, { openModal, closeModal, initialState } from './modalSlice';

import { IN_REVIEW_TASK } from '../mockData/tasks';

describe('modalSlice', () => {
  test('should open modal and set correct additional data', () => {
    const previousState = initialState;

    expect(reducer(previousState, openModal(IN_REVIEW_TASK))).toEqual({
      isOpen: true,
      additionalData: IN_REVIEW_TASK,
    });
  });

  test('should close modal and clear additional data', () => {
    const previousState = {
      isOpen: true,
      additionalData: IN_REVIEW_TASK,
    };

    expect(reducer(previousState, closeModal())).toEqual(initialState);
  });
});
