import { render, screen } from '@testing-library/react';
import Button from '.';

const BUTTON_TEXT = 'button text';

describe('Button component', () => {
  test('should be rendered', () => {
    render(<Button>{BUTTON_TEXT}</Button>);
    const button = screen.getByText(BUTTON_TEXT);
    expect(button).toBeInTheDocument();
  });

  test('should render with correct type', () => {
    render(<Button type="submit">{BUTTON_TEXT}</Button>);
    const button = screen.getByText(BUTTON_TEXT);
    expect(button).toHaveProperty('type', 'submit');
  });

  test('should render with correct class', () => {
    render(<Button variant="secondary">{BUTTON_TEXT}</Button>);
    const button = screen.getByText(BUTTON_TEXT);
    expect(button).toHaveClass('button--secondary');
  });

  test('should render with disabled state', () => {
    render(<Button disabled>{BUTTON_TEXT}</Button>);
    const button = screen.getByText(BUTTON_TEXT);
    expect(button).toBeDisabled();
  });
});
