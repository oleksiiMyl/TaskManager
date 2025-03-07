import { render, screen } from '@testing-library/react';
import Modal from '.';

const MODAL_TITLE = 'title';
const MODAL_DESCRIPTION = 'desc';

describe('Modal component', () => {
  test('should be rendered with correct content', () => {
    render(
      <Modal title={MODAL_TITLE} description={MODAL_DESCRIPTION}>
        <div />
      </Modal>
    );

    const modalTitle = screen.getByText(MODAL_TITLE);
    expect(modalTitle).toBeInTheDocument();

    const modalDescription = screen.getByText(MODAL_DESCRIPTION);
    expect(modalDescription).toBeInTheDocument();
  });
});
