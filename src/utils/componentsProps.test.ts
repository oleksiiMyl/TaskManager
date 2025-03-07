import { getBadgeTypeByStatus } from './componentsProps';
import { IN_PROGRESS, IN_REVIEW, IN_TEST, DONE } from '../constants/statuses';

describe('getBadgeTypeByStatus', () => {
  test('should return correct property', () => {
    const inProgress = getBadgeTypeByStatus(IN_PROGRESS);
    const inReview = getBadgeTypeByStatus(IN_REVIEW);
    const inTest = getBadgeTypeByStatus(IN_TEST);
    const done = getBadgeTypeByStatus(DONE);
    const toDo = getBadgeTypeByStatus('CUSTOM_STATUS');

    expect(inProgress).toBe('progress');
    expect(inReview).toBe('review');
    expect(inTest).toBe('test');
    expect(done).toBe('done');
    expect(toDo).toBe(undefined);
  });
});
