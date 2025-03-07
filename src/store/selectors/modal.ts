import { RootState } from '../';

export const modalIsOpenSelector = (state: RootState) => state.modal.isOpen;
export const modalAdditionalDataSelector = (state: RootState) => state.modal.additionalData;
