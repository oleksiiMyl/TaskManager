import { IN_PROGRESS, IN_REVIEW, IN_TEST, DONE } from '../constants/statuses';

export const getBadgeTypeByStatus = (status: string) => {
  switch (status) {
    case IN_PROGRESS:
      return 'progress';
    case IN_REVIEW:
      return 'review';
    case IN_TEST:
      return 'test';
    case DONE:
      return 'done';
    default:
      return undefined;
  }
};
