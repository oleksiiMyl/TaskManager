import { FC, ReactNode } from 'react';
import './styles.scss';

type ControlType = {
  children: ReactNode;
};

const Control: FC<ControlType> = ({ children }) => <div className="control">{children}</div>;

export default Control;
