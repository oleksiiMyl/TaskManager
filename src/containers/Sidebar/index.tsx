import { ChangeEventHandler, useEffect, useState } from 'react';
import { v4 as idv4 } from 'uuid';

import Overlay from '../../components/Overlay';
import Button from '../../components/Button';
import Sidebar from '../../components/Sidebar';
import SidebarHeader from '../../components/Sidebar/Header';
import SidebarContent from '../../components/Sidebar/Content';
import SidebarFooter from '../../components/Sidebar/Footer';
import Control from '../../components/Control';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import ValidationError from '../../components/ValidationError';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  clearSidebar,
  setId,
  setTitle,
  setDescription,
  setAssignee,
  setStatus,
} from '../../store/reducers/sidebarSlice';
import { createTask, updateTask } from '../../store/reducers/tasksSlice';
import { currentTaskSelector, sidebarModeSelector } from '../../store/selectors/sidebar';
import { STATUS_LIST } from '../../constants/statuses';
import {
  CREATE_TASK_TITLE,
  EDIT_TASK_TITLE,
  TITLE_LABEL,
  TITLE_PLACEHOLDER,
  DESCRIPTION_LABEL,
  DESCRIPTION_PLACEHOLDER,
  ASSIGNEE_LABEL,
  ASSIGNEE_PLACEHOLDER,
  STATUS_LABEL,
  CANCEL_BUTTON_TEXT,
  CREATE_BUTTON_TEXT,
  APPLY_BUTTON_TEXT,
  CREATE_MODE,
  EDIT_MODE,
  TITLE_VALIDATION_ERROR,
} from '../../constants/sidebar';
import { validateTitle } from '../../utils/validation';
import { TaskType } from '../../types/task';

const SidebarContainer = () => {
  const dispatch = useAppDispatch();
  const currentTask = useAppSelector(currentTaskSelector);
  const mode = useAppSelector(sidebarModeSelector);

  const { id, title, description, assignee, status } = currentTask;

  const [invalidTitle, setInvalidTitle] = useState<boolean>(false);
  const [initialTask, setInitialTask] = useState<TaskType | null>(null);

  useEffect(() => {
    if (!id) {
      dispatch(setId(idv4()));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (mode === EDIT_MODE) {
      setInitialTask(currentTask);
    }
    // eslint-disable-next-line
  }, [mode]);

  const isCreateMode = mode === CREATE_MODE;

  const titleIsValid = validateTitle(title);

  const handleCloseSidebar = () => {
    dispatch(clearSidebar());
  };

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    dispatch(setTitle(value));
  };

  const handleChangeDescription: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value },
  }) => {
    dispatch(setDescription(value));
  };

  const handleChangeAssignee: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    dispatch(setAssignee(value));
  };

  const handleChangeStatus: ChangeEventHandler<HTMLSelectElement> = ({ target: { value } }) => {
    dispatch(setStatus(value));
  };

  const handleCreateTask = () => {
    if (titleIsValid) {
      dispatch(createTask(currentTask));
      dispatch(clearSidebar());
    } else {
      setInvalidTitle(true);
    }
  };

  const handleUpdateTask = () => {
    if (titleIsValid) {
      if (initialTask) {
        dispatch(updateTask({ initialTask: initialTask, updatedTask: currentTask }));
      }
      dispatch(clearSidebar());
    } else {
      setInvalidTitle(true);
    }
  };

  return (
    <Overlay>
      <Sidebar>
        <SidebarHeader>
          <h2>{isCreateMode ? CREATE_TASK_TITLE : EDIT_TASK_TITLE}</h2>
        </SidebarHeader>
        <SidebarContent>
          <Control>
            <Label isRequired htmlFor={TITLE_LABEL}>
              {TITLE_LABEL}
            </Label>
            <Input
              placeholder={TITLE_PLACEHOLDER}
              id={TITLE_LABEL}
              value={title}
              onChange={handleChangeTitle}
              isInvalid={invalidTitle}
            />
            {invalidTitle && <ValidationError>{TITLE_VALIDATION_ERROR}</ValidationError>}
          </Control>
          <Control>
            <Label htmlFor={DESCRIPTION_LABEL}>{DESCRIPTION_LABEL}</Label>
            <Textarea
              placeholder={DESCRIPTION_PLACEHOLDER}
              id={DESCRIPTION_LABEL}
              value={description}
              onChange={handleChangeDescription}
            />
          </Control>
          <Control>
            <Label htmlFor={ASSIGNEE_LABEL}>{ASSIGNEE_LABEL}</Label>
            <Input
              placeholder={ASSIGNEE_PLACEHOLDER}
              id={ASSIGNEE_LABEL}
              value={assignee}
              onChange={handleChangeAssignee}
            />
          </Control>
          <Control>
            <Label htmlFor={STATUS_LABEL}>{STATUS_LABEL}</Label>
            <Select
              id={STATUS_LABEL}
              options={STATUS_LIST}
              value={status}
              onChange={handleChangeStatus}
              disabled={isCreateMode}
            />
          </Control>
        </SidebarContent>
        <SidebarFooter>
          <Button variant="secondary" onClick={handleCloseSidebar}>
            {CANCEL_BUTTON_TEXT}
          </Button>
          <Button onClick={isCreateMode ? handleCreateTask : handleUpdateTask}>
            {isCreateMode ? CREATE_BUTTON_TEXT : APPLY_BUTTON_TEXT}
          </Button>
        </SidebarFooter>
      </Sidebar>
    </Overlay>
  );
};

export default SidebarContainer;
