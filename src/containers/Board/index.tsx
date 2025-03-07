import { DragEventHandler, DragEvent, useRef } from 'react';
import Board from '../../components/Board';
import BoardContent from '../../components/Board/Content';
import BoardTitles from '../../components/Board/Titles';
import BoardTitle from '../../components/Board/Title';
import BoardInner from '../../components/Board/Inner';
import BoardColumn from '../../components/Board/Column';
import Card from '../../components/Card';
import Badge from '../../components/Badge';
import Container from '../../components/Container';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { tasksSelector } from '../../store/selectors/tasks';
import { openModal } from '../../store/reducers/modalSlice';
import { openSidebar, setCurrentTask } from '../../store/reducers/sidebarSlice';
import { TasksStateType } from '../../store/reducers/tasksSlice';
import { isDraggingSelector, dropAreaSelector } from '../../store/selectors/draggable';
import {
  setIsDragging,
  setDropArea,
  clearDraggableState,
} from '../../store/reducers/draggableSlice';
import { updateTask } from '../../store/reducers/tasksSlice';

import { getBadgeTypeByStatus } from '../../utils/componentsProps';

import { STATUS_LIST } from '../../constants/statuses';
import { EDIT_MODE } from '../../constants/sidebar';
import { ASSIGNED_TO_CREATOR } from '../../constants/taskCard';

import { TaskType } from '../../types/task';

const BoardContainer = () => {
  const dispatch = useAppDispatch();
  const tasks: TasksStateType = useAppSelector(tasksSelector);
  const isDragging: boolean = useAppSelector(isDraggingSelector);
  const dropArea = useAppSelector(dropAreaSelector);
  const currentTaskRef = useRef<TaskType>();

  const handleOpenDeleteTaskModal = (task: TaskType) => () => {
    dispatch(openModal(task));
  };

  const handleOpenEditTaskSidebar = (task: TaskType) => () => {
    dispatch(openSidebar(EDIT_MODE));
    dispatch(setCurrentTask(task));
  };

  const handleDragStart = (task: TaskType) => () => {
    currentTaskRef.current = task;
    dispatch(setIsDragging(true));
  };

  const handleDragEnd: DragEventHandler<HTMLDivElement> = () => {
    dispatch(clearDraggableState());
  };

  const handleDrop: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();

    if (currentTaskRef.current && dropArea) {
      const { status } = currentTaskRef.current;

      if (status !== dropArea) {
        dispatch(
          updateTask({
            initialTask: currentTaskRef.current,
            updatedTask: { ...currentTaskRef.current, status: dropArea },
          })
        );
      }
    }

    dispatch(clearDraggableState());
  };

  const handleDragOver = (status: string) => (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (status !== dropArea) {
      dispatch(setDropArea(status));
    }
  };

  const handleDragOverCard: DragEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  const handleDragLeave = () => {
    if (dropArea) {
      dispatch(setDropArea(''));
    }
  };

  return (
    <Board>
      <Container>
        <BoardContent>
          <BoardTitles>
            {STATUS_LIST.map((status) => (
              <BoardTitle key={status}>{status}</BoardTitle>
            ))}
          </BoardTitles>
          <BoardInner>
            {Object.keys(tasks).map((status) => (
              <BoardColumn
                key={status}
                isDroppable={
                  dropArea === status &&
                  currentTaskRef.current &&
                  currentTaskRef.current.status !== status
                }
                onDragOver={handleDragOver(status)}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {tasks[status].map((task) => (
                  <Card
                    key={task.id}
                    title={task.title}
                    assignee={task.assignee ? task.assignee : ASSIGNED_TO_CREATOR}
                    onDelete={handleOpenDeleteTaskModal(task)}
                    onEdit={handleOpenEditTaskSidebar(task)}
                    data-drag={
                      isDragging && currentTaskRef.current && currentTaskRef.current.id === task.id
                    }
                    data-over-drag={
                      isDragging && currentTaskRef.current && currentTaskRef.current.id !== task.id
                    }
                    draggable
                    onDragStart={handleDragStart(task)}
                    onDragEnd={handleDragEnd}
                    onDragOver={handleDragOverCard}
                  >
                    <Badge status={getBadgeTypeByStatus(status)}>{status}</Badge>
                  </Card>
                ))}
              </BoardColumn>
            ))}
          </BoardInner>
        </BoardContent>
      </Container>
    </Board>
  );
};

export default BoardContainer;
