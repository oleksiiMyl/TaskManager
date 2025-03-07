import { validateTitle } from './validation';

describe('validateTitle', () => {
  test('should return true if title have 3 or more symbols', () => {
    const result = validateTitle('title');
    expect(result).toBeTruthy();
  });

  test('should return false if title have 2 or less symbols', () => {
    const resultWithEmptyTitle = validateTitle('');
    const resultWithTwoSymbols = validateTitle('45');
    expect(resultWithEmptyTitle).toBeFalsy();
    expect(resultWithTwoSymbols).toBeFalsy();
  });
});
