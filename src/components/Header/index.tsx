import { FC, ReactElement } from 'react';
import './styles.scss';

type HeaderType = {
  children: ReactElement | ReactElement[];
};

const Header: FC<HeaderType> = ({ children }) => <header className="header">{children}</header>;

export default Header;
