import { RootState } from '../';

export const sidebarModeSelector = (state: RootState) => state.sidebar.mode;
export const currentTaskSelector = (state: RootState) => state.sidebar.currentTask;
