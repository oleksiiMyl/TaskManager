import { FC, ReactElement } from 'react';
import './styles.scss';

type SidebarContentType = {
  children: ReactElement | ReactElement[];
};

const SidebarContent: FC<SidebarContentType> = ({ children }) => (
  <div className="sidebar__content">{children}</div>
);

export default SidebarContent;
