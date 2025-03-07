import { render, screen } from '@testing-library/react';
import BoardColumn from '.';

const CHILDREN_TEXT = 'children';

describe('BoardColumn component', () => {
  test('should be rendered', () => {
    render(
      <BoardColumn>
        <div>{CHILDREN_TEXT}</div>
      </BoardColumn>
    );
    const boardColumnElement = screen.getByText(CHILDREN_TEXT);
    expect(boardColumnElement).toBeInTheDocument();
  });

  test('should render with correct state', () => {
    render(
      <BoardColumn isDroppable>
        <div>{CHILDREN_TEXT}</div>
      </BoardColumn>
    );
    const boardColumnElement = screen.getByText(CHILDREN_TEXT);
    expect(boardColumnElement.parentElement).toHaveClass('is-droppable');
  });
});
