import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@src/theme';
import { BUTTON_SIZE, IButtonStyled, BUTTON_THEME, IButton } from './button_types';

export function Button({ label, type, onClick, isDisabled, theme, size, styleBlock }: IButton) {
  const buttonThemeStyles = buttonThemeStyle[theme];
  const buttonSizeStyleds = buttonSizeStyle[size];

  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      styleBlock={styleBlock}
      buttonThemeStyles={buttonThemeStyles}
      buttonSizeStyles={buttonSizeStyleds}
    >
      {label}
    </ButtonStyled>
  );
}

Button.defaultProps = {
  type: 'button',
  styleBlock: false,
  isDisabled: false,
  theme: BUTTON_THEME.PRIAMRY,
  size: BUTTON_SIZE.MEDIUM,
};

const ButtonStyled = styled.button<IButtonStyled>`
  border-radius: 2px;
  ${(props) => props.buttonThemeStyles}
  ${(props) => props.buttonSizeStyles}
  ${({ styleBlock }) =>
    styleBlock
      ? css`
          display: block;
          width: 100%;
        `
      : css`
          display: inline-block;
        `}
`;

const buttonThemeStyle = {
  [BUTTON_THEME.PRIAMRY]: css`
    background-color: ${colors.main};
    color: ${colors.white};
    :hover {
      background-color: ${colors.blue1};
    }
    :disabled {
      background-color: ${colors.gray3};
      color: ${colors.gray2};
    }
  `,
  [BUTTON_THEME.LINEBLUE]: css`
    background-color: ${colors.white};
    color: ${colors.main};
    border: 1px solid ${colors.main};
    :hover {
      background-color: ${colors.skyblue};
      border-color: ${colors.blue1};
      color: ${colors.blue1};
    }
    :disabled {
      background-color: ${colors.gray3};
      color: ${colors.gray2};
      border-color: ${colors.gray2};
    }
  `,
  [BUTTON_THEME.LINEBLACK]: css`
    background-color: ${colors.white};
    color: ${colors.black2};
    border: solid 1px ${colors.gray2};
    :hover {
      background-color: ${colors.skyblue};
      color: ${colors.black2};
      border: solid 1px ${colors.gray2};
    }
    :disabled {
      background-color: ${colors.gray3};
      color: ${colors.gray2};
      border-color: ${colors.gray2};
    }
  `,
};

const buttonSizeStyle = {
  [BUTTON_SIZE.SMALL]: css`
    height: 24px;
    padding: 3px 10px;
  `,
  [BUTTON_SIZE.MEDIUM]: css`
    height: 32px;
    padding: 6px 10px;
  `,
  [BUTTON_SIZE.LARGE]: css`
    height: 42px;
    padding: 10px;
  `,
};
