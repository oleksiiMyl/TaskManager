import Header from '../../components/Header';
import HeaderTitle from '../../components/Header/Title';
import HeaderAction from '../../components/Header/Action';
import Container from '../../components/Container';
import Button from '../../components/Button';

import { useAppDispatch } from '../../store/hooks';
import { openSidebar } from '../../store/reducers/sidebarSlice';

import { CREATE_MODE } from '../../constants/sidebar';
import { HEADER_TITLE, CREATE_NEW_TASK_ACTION_TEXT } from '../../constants/header';

const HeaderContainer = () => {
  const dispatch = useAppDispatch();

  const handleCreateTask = () => {
    dispatch(openSidebar(CREATE_MODE));
  };

  return (
    <Header>
      <Container>
        <HeaderTitle>{HEADER_TITLE}</HeaderTitle>
        <HeaderAction>
          <Button onClick={handleCreateTask}>{CREATE_NEW_TASK_ACTION_TEXT}</Button>
        </HeaderAction>
      </Container>
    </Header>
  );
};

export default HeaderContainer;
