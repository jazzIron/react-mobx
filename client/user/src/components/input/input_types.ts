import { INPUT_TYPE } from './InputForm_types';

// export enum INPUT_TYPE {
//   TEXT = 'text',
//   PASSWORD = 'password',
// }

export interface IInputProps {
  value: string;
  type: INPUT_TYPE;
  readOnly: boolean;
  disabled: boolean;
  placeholder: string;
  onChange: (value: string) => void;
}
