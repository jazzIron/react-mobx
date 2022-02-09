import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { ChangeEvent } from 'react';
import { IRadioGroup, RADIO_SIZE } from './Radio_types';
import { ICON_LIST } from '../icon/icon.data';
import { cssx } from '@src/theme';

const radioIcon = (disabled: boolean, checked: boolean) => {
  return disabled
    ? checked
      ? ICON_LIST.icn_radio_dis
      : ICON_LIST.icn_nocheck_dis
    : checked
    ? ICON_LIST.icn_radio
    : ICON_LIST.icn_nocheck;
};

export function Radio({ size, options, value, onChange }: IRadioGroup) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    return onChange(e.target.value);
  };

  return (
    <RadioWrapper>
      {options.map((option, idx) => {
        const icon = radioIcon(option.disabled, value === option.value);
        return (
          <InputLabelWrapper key={idx} disabled={option.disabled}>
            <RadioDefaultStyled>
              <RadioStyled
                type="radio"
                id={option.id}
                value={option.value}
                checked={value === option.value}
                onChange={onChangeHandler}
                disabled={option.disabled}
              />
              <RadioItemWrapper icon={icon} />
            </RadioDefaultStyled>
            <InputLabelStyled>{option.label}</InputLabelStyled>
          </InputLabelWrapper>
        );
      })}
    </RadioWrapper>
  );
}

Radio.defaultProps = {
  size: RADIO_SIZE.MEDIUM,
  options: [],
};

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const InputLabelWrapper = styled.label<{ disabled: boolean }>`
  ${cssx.flexStart}
`;

export const RadioDefaultStyled = styled.span`
  position: relative;
  display: inline-block;
  width: 14px;
  height: 14px;
  font-size: 0;
`;

export const RadioStyled = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0.00001;
`;

export const RadioItemWrapper = styled.span<{ icon: string }>`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.icon}) no-repeat 0 50% / contain`};
`;

export const InputLabelStyled = styled.span``;
