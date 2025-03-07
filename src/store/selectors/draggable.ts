import { RootState } from '../';

export const isDraggingSelector = (state: RootState) => state.draggable.isDragging;
export const dropAreaSelector = (state: RootState) => state.draggable.dropArea;
