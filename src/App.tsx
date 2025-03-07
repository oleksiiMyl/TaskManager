import { createPortal } from 'react-dom';

import HeaderContainer from './containers/Header';
import BoardContainer from './containers/Board';
import ModalContainer from './containers/Modal';
import SidebarContainer from './containers/Sidebar';
import { useAppSelector } from './store/hooks';
import { sidebarModeSelector } from './store/selectors/sidebar';
import { modalIsOpenSelector } from './store/selectors/modal';

import './app.scss';

const App = () => {
  const sidebarMode = useAppSelector(sidebarModeSelector);
  const modalIsOpen = useAppSelector(modalIsOpenSelector);

  return (
    <div className="app">
      <HeaderContainer />
      <BoardContainer />
      {sidebarMode && createPortal(<SidebarContainer />, document.body)}
      {modalIsOpen && createPortal(<ModalContainer />, document.body)}
    </div>
  );
};

export default App;
