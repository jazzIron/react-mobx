export enum RADIO_SIZE {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export interface IRadio {
  id: string;
  label: string;
  checked: boolean;
  disabled: boolean;
  value: string;
}

export interface IRadioGroup {
  size: RADIO_SIZE;
  options: IRadio[];
  value: string | number | boolean;
  onChange: (value: string) => void;
}
