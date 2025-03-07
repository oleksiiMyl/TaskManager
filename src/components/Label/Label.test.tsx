import { render, screen } from '@testing-library/react';
import Label from '.';

const LABEL_TEXT = 'Label';
const TEST_ID = 'label';

describe('Label component', () => {
  test('should be rendered with correct text', () => {
    render(<Label data-testid={TEST_ID}>{LABEL_TEXT}</Label>);
    const label = screen.getByTestId(TEST_ID);
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(LABEL_TEXT);
  });

  test('should be rendered with additional attribute', () => {
    render(
      <Label data-testid={TEST_ID} htmlFor="1">
        {LABEL_TEXT}
      </Label>
    );
    const label = screen.getByTestId(TEST_ID);
    expect(label).toHaveProperty('htmlFor', '1');
  });

  test('should be rendered in required state', () => {
    render(
      <Label data-testid={TEST_ID} isRequired>
        {LABEL_TEXT}
      </Label>
    );
    const label = screen.getByTestId(TEST_ID);
    expect(label).toHaveClass('isRequired');
  });
});
