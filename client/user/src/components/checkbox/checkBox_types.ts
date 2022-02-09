export interface ICheckBoxProps {
  id: string;
  value: string;

  isChecked: boolean;
  disabled: boolean;
  onClick: () => void;
  suffixIcon?: string;
  onClickSuffix?: () => void;
}
export interface IOption {
  id: string;
  label: string;
  isChecked: boolean;
  isRequired: boolean;
}
export interface IMasterCheckBox {
  masterLabel: string;
  options: IOption[];
  onClickIcon: () => void;
  setBtnDisable: (canNext: boolean) => void;
  suffixIcon: string;
}

export interface IValue {
  icon: string;
}
