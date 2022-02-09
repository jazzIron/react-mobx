import { RENDER_STATE } from '@components/form/form_types';

export enum INPUT_TYPE {
  TEXT = 'text',
  PW = 'password',
}

export interface IInputForm {
  /**
   * INPUT TYPE
   */
  type: INPUT_TYPE;
  /**
   * INPUT theme
   */
  inputValue: string;
  /**
   * error check
   */
  renderState?: RENDER_STATE;
  /**
   * allowClear
   */
  allowClear: boolean;
  /**
   * placeholder
   */
  placeholder: string;
  /**
   * maxLength
   */
  maxLength: number;
  /**
   * readOnly
   */
  readOnly: boolean;
  /**
   * prefixIcon Item
   */
  prefixIcon?: string;
  /**
   * Optional change handler
   */
  onChange: (value: string) => void;
}
