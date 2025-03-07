import { render, screen } from '@testing-library/react';
import Badge from '.';

import { TO_DO, IN_PROGRESS } from '../../constants/statuses';

describe('Badge component', () => {
  test('should render with correct text', () => {
    render(<Badge>{TO_DO}</Badge>);
    const badgeElement = screen.getByText(TO_DO);
    expect(badgeElement).toBeInTheDocument();
  });

  test('should render with correct className', () => {
    render(<Badge status="progress">{IN_PROGRESS}</Badge>);
    const badgeElement = screen.getByText(IN_PROGRESS);
    expect(badgeElement).toHaveClass('badge--progress');
  });
});
