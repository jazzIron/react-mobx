import { BUTTON_THEME } from '@src/components/button';
import { atom } from 'recoil';

export enum MODAL_SIZE {
  ALERT = 'ALERT',
  SMALL = 'SMALL',
  LEGULAR = 'LEGULAR',
  LARGE = 'LARGE',
}

export interface IModalButton {
  label: string;
  onClick: () => void;
  disable: boolean;
  theme: BUTTON_THEME;
}

export interface IModalState {
  isOpen: boolean;
  contents: JSX.Element | JSX.Element[] | null;
  useReqClose: boolean;
  size: MODAL_SIZE;
  sizeCustom?: {
    width: string;
    height: string;
  };
  buttons?: IModalButton[];
}

export const ModalState = atom<IModalState>({
  key: 'modalState',
  default: {
    isOpen: false,
    contents: null,
    useReqClose: true,
    size: MODAL_SIZE.LEGULAR,
  },
});
