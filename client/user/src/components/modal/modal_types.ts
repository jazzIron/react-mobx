import { MODAL_SIZE } from '@src/store/modalState';
import { BUTTON_THEME } from '../button';

export interface IOpenModal {
  contents: JSX.Element | JSX.Element[];
  useReqClose?: boolean;
  size?: MODAL_SIZE;
  sizeCustom?: {
    width: string;
    height: string;
  };
  button?: { label: string; onClick: () => void; disable?: boolean; theme?: BUTTON_THEME }[];
}
