import { FC, ReactElement } from 'react';
import './styles.scss';

type SidebarHeaderType = {
  children: ReactElement | ReactElement[];
};

const SidebarHeader: FC<SidebarHeaderType> = ({ children }) => (
  <header className="sidebar__header">{children}</header>
);

export default SidebarHeader;
