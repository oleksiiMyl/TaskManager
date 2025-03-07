import { FC, ReactElement } from 'react';
import './styles.scss';

type HeaderActionType = {
  children: ReactElement | ReactElement[];
};

const HeaderAction: FC<HeaderActionType> = ({ children }) => (
  <div className="header__action">{children}</div>
);

export default HeaderAction;
