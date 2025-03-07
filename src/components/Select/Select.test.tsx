import { render, screen, fireEvent } from '@testing-library/react';
import Select from '.';

const TEST_ID = 'select';

const OPTION_VALUE_1 = 'option 1';
const OPTION_VALUE_2 = 'option 2';

const OPTIONS = [OPTION_VALUE_1, OPTION_VALUE_2];

describe('Select component', () => {
  test('should be rendered with correct role', () => {
    render(<Select data-testid={TEST_ID} options={OPTIONS} />);

    const select = screen.getByTestId(TEST_ID);
    expect(select).toBeInTheDocument();
    expect(select).toHaveRole('menu');
  });

  test('should be rendered in disabled state', () => {
    render(<Select data-testid={TEST_ID} options={OPTIONS} disabled />);

    const select = screen.getByTestId(TEST_ID);
    expect(select).toBeDisabled();
  });

  test('should have correct onChange work', () => {
    const mockedOnChange = jest.fn();
    render(
      <Select
        data-testid={TEST_ID}
        options={OPTIONS}
        defaultValue={OPTION_VALUE_1}
        onChange={mockedOnChange}
      />
    );

    const select = screen.getByTestId(TEST_ID);

    expect(select).toHaveValue(OPTION_VALUE_1);
    expect(mockedOnChange).toHaveBeenCalledTimes(0);

    fireEvent.change(select, { target: { value: OPTION_VALUE_2 } });

    expect(mockedOnChange).toHaveBeenCalledTimes(1);
    expect(select).toHaveValue(OPTION_VALUE_2);
  });
});
