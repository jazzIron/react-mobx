import styled from '@emotion/styled';
import { useState } from 'react';
import { css } from '@emotion/react';
import { ISwitch, ISwitchBox, SWITCH_THEME } from './Switch_types';
import { colors } from '@src/theme';
import { cssx } from '@src/theme';
export function Switch({ label, value, disabled, onClick, theme }: ISwitch) {
  const [on, setOn] = useState(false);
  const themeColor = switchThemeStyle[theme];

  const onSwitch = () => {
    if (!disabled) {
      onClick({ [value]: !on });
      setOn(!on);
    }
  };
  return (
    <SwitchStyled disabled={disabled}>
      {label && <Label>{label}</Label>}
      <SwitchBox onClick={onSwitch} onSwitch={on} disabled={disabled} themeColor={themeColor}>
        <SwitchButton onSwitch={on} />
      </SwitchBox>
    </SwitchStyled>
  );
}

Switch.defaultProps = {
  disabled: false,
  theme: SWITCH_THEME.DEFAULT,
};
const SwitchStyled = styled.div<{ disabled: boolean }>`
  width: 100%;
  height: 60px;
  padding: 10px;
  ${cssx.flexBtw}
`;
const Label = styled.div`
  ${(props) => props.theme.fonts.h4_B}
`;
const SwitchBox = styled.div<ISwitchBox>`
  position: relative;
  width: 43px;
  height: 24px;
  border-radius: 30px;
  background: ${(props) =>
    props.disabled
      ? props.theme.colors.gray1
      : props.onSwitch
      ? props.theme.colors.gray1
      : props.themeColor};
  cursor: pointer;
`;
const SwitchButton = styled.div<{ onSwitch: boolean }>`
  position: absolute;
  width: 20px;
  height: 20px;
  margin: 2px;
  background: ${colors.white};
  border-radius: 50%;
  cursor: pointer;
  ${(props) =>
    props.onSwitch
      ? css`
          left: 0px;
        `
      : css`
          right: 0px;
        `}
`;

const switchThemeStyle = {
  [SWITCH_THEME.DEFAULT]: `${colors.main}
  `,
  [SWITCH_THEME.RED]: `${colors.red1}`,
};
