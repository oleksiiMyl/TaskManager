import { FC, ReactElement } from 'react';
import './styles.scss';

type SidebarType = {
  children: ReactElement | ReactElement[];
};

const Sidebar: FC<SidebarType> = ({ children }) => <div className="sidebar">{children}</div>;

export default Sidebar;
