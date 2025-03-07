import reducer, {
  openSidebar,
  setId,
  setTitle,
  setDescription,
  setAssignee,
  setStatus,
  clearSidebar,
  setCurrentTask,
  initialState,
  SidebarStateType,
} from './sidebarSlice';
import { TO_DO_TASK } from '../mockData/tasks';
import { IN_PROGRESS } from '../../constants/statuses';

describe('sidebarSlice', () => {
  test('should set correct mode', () => {
    const previousState = initialState;

    expect(reducer(previousState, openSidebar('create'))).toEqual({
      ...initialState,
      mode: 'create',
    });
    expect(reducer(previousState, openSidebar('edit'))).toEqual({ ...initialState, mode: 'edit' });
  });

  test('should set current task', () => {
    const previousState = initialState;

    expect(reducer(previousState, setCurrentTask(TO_DO_TASK))).toEqual({
      ...initialState,
      currentTask: TO_DO_TASK,
    });
  });

  test('should set task id', () => {
    const previousState = initialState;

    expect(reducer(previousState, setId('111'))).toEqual({
      ...initialState,
      currentTask: { ...initialState.currentTask, id: '111' },
    });
  });

  test('should set task title', () => {
    const previousState = initialState;

    expect(reducer(previousState, setTitle('Title'))).toEqual({
      ...initialState,
      currentTask: { ...initialState.currentTask, title: 'Title' },
    });
  });

  test('should set task description', () => {
    const previousState = initialState;

    expect(reducer(previousState, setDescription('Description'))).toEqual({
      ...initialState,
      currentTask: { ...initialState.currentTask, description: 'Description' },
    });
  });

  test('should set task assignee', () => {
    const previousState = initialState;

    expect(reducer(previousState, setAssignee('Assignee'))).toEqual({
      ...initialState,
      currentTask: { ...initialState.currentTask, assignee: 'Assignee' },
    });
  });

  test('should set task status', () => {
    const previousState = initialState;

    expect(reducer(previousState, setStatus(IN_PROGRESS))).toEqual({
      ...initialState,
      currentTask: { ...initialState.currentTask, status: IN_PROGRESS },
    });
  });

  test('should clear reducer data', () => {
    const previousState: SidebarStateType = {
      mode: 'edit',
      currentTask: TO_DO_TASK,
    };

    expect(reducer(previousState, clearSidebar())).toEqual(initialState);
  });
});
