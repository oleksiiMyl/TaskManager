import { render, screen } from '@testing-library/react';
import Input from '.';

const PLACEHOLDER = 'placeholder';
const TEST_ID = 'input';

describe('Input component', () => {
  test('should be rendered with text type', () => {
    render(<Input data-testid={TEST_ID} />);
    const input = screen.getByTestId(TEST_ID);
    expect(input).toBeInTheDocument();
    expect(input).toHaveProperty('type', 'text');
    expect(input).not.toHaveProperty('type', 'password');
  });

  test('should be rendered with placeholder', () => {
    render(<Input data-testid={TEST_ID} placeholder={PLACEHOLDER} />);
    const input = screen.getByPlaceholderText(PLACEHOLDER);
    expect(input).toBeInTheDocument();
  });

  test('should be rendered in disabled state', () => {
    render(<Input data-testid={TEST_ID} disabled />);
    const input = screen.getByTestId(TEST_ID);
    expect(input).toBeDisabled();
  });

  test('should be rendered with invalid state', () => {
    render(<Input data-testid={TEST_ID} isInvalid />);
    const input = screen.getByTestId(TEST_ID);
    expect(input).toHaveClass('isInvalid');
  });
});
