import { FC, ReactElement } from 'react';
import './styles.scss';

type ModalType = {
  title: string;
  description: string | ReactElement;
  children: ReactElement | ReactElement[];
};

const Modal: FC<ModalType> = ({ title, description, children }) => {
  return (
    <div className="modal">
      <h2 className="modal__title">{title}</h2>
      <p>{description}</p>
      <div className="modal__actions">{children}</div>
    </div>
  );
};

export default Modal;
