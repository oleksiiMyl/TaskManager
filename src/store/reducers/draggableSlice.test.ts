import reducer, {
  setIsDragging,
  setDropArea,
  clearDraggableState,
  initialState,
} from './draggableSlice';

describe('draggableSlice', () => {
  test('should set isDragging flag correctly', () => {
    const previousState = initialState;

    expect(reducer(previousState, setIsDragging(true))).toEqual({ isDragging: true, dropArea: '' });
  });

  test('should set dropArea value correctly', () => {
    const previousState = { isDragging: true, dropArea: '' };

    expect(reducer(previousState, setDropArea('In progress'))).toEqual({
      isDragging: true,
      dropArea: 'In progress',
    });
  });

  test('should set initial state', () => {
    const previousState = { isDragging: true, dropArea: 'In progress' };

    expect(reducer(previousState, clearDraggableState())).toEqual(initialState);
  });
});
