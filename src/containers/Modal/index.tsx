import Overlay from '../../components/Overlay';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { modalAdditionalDataSelector } from '../../store/selectors/modal';
import { closeModal } from '../../store/reducers/modalSlice';
import { deleteTask } from '../../store/reducers/tasksSlice';

import {
  MODAL_TITLE,
  MODAL_DESCRIPTION_PART_1,
  MODAL_DESCRIPTION_PART_2,
  MODAL_DECLINE_ACTION_TEXT,
  MODAL_ACCEPT_ACTION_TEXT,
} from '../../constants/modal';

import { TaskType } from '../../types/task';

const ModalContainer = () => {
  const dispatch = useAppDispatch();
  const additionalData = useAppSelector(modalAdditionalDataSelector);

  const handleCancel = () => {
    dispatch(closeModal());
  };

  const handleAccept = () => {
    dispatch(deleteTask(additionalData as TaskType));
    dispatch(closeModal());
  };

  const modalDescription = (
    <>
      {MODAL_DESCRIPTION_PART_1} <strong>"{(additionalData as TaskType).title}"</strong>{' '}
      {MODAL_DESCRIPTION_PART_2}
    </>
  );

  return (
    <Overlay>
      <Modal title={MODAL_TITLE} description={modalDescription}>
        <Button variant="secondary" onClick={handleCancel}>
          {MODAL_DECLINE_ACTION_TEXT}
        </Button>
        <Button onClick={handleAccept}>{MODAL_ACCEPT_ACTION_TEXT}</Button>
      </Modal>
    </Overlay>
  );
};

export default ModalContainer;
