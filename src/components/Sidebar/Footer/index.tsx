import { FC, ReactElement } from 'react';
import './styles.scss';

type SidebarFooterType = {
  children: ReactElement | ReactElement[];
};

const SidebarFooter: FC<SidebarFooterType> = ({ children }) => (
  <footer className="sidebar__footer">{children}</footer>
);

export default SidebarFooter;
