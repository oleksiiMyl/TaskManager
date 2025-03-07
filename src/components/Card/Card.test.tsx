import { render, screen } from '@testing-library/react';
import Card from '.';

const CARD_TITLE = 'card title';
const CARD_ASSIGNEE = 'You';

describe('Card component', () => {
  test('should be rendered with correct title', () => {
    render(
      <Card title={CARD_TITLE} assignee={CARD_ASSIGNEE}>
        <div />
      </Card>
    );
    const card = screen.getByText(CARD_TITLE);
    expect(card).toBeInTheDocument();
  });

  test('should render with correct assignee text', () => {
    render(
      <Card title={CARD_TITLE} assignee={CARD_ASSIGNEE}>
        <div />
      </Card>
    );
    const card = screen.getByText(CARD_ASSIGNEE);
    expect(card).toBeInTheDocument();
  });

  test('should render with custom data attribute', () => {
    render(
      <Card title={CARD_TITLE} assignee={CARD_ASSIGNEE} data-role="info" data-testid="1">
        <div />
      </Card>
    );
    const card = screen.getByTestId('1');
    expect(card).toHaveAttribute('data-role');
  });
});
