import styled from '@emotion/styled';
import { cssx, fonts } from '@src/theme';
import { css } from '@emotion/react';
import { BUTTON_SIZE, ITextButton, ITextButtonStyled } from './button_types';
import { Icon } from '../icon/Icon';
import { ICON_LIST } from '../icon/icon.data';

export function TextButton({ label, onClick, isDisabled, leftIcon, rightiCon, size }: ITextButton) {
  const buttonSizeStyleds = buttonSizeStyle[size];
  return (
    <TextButtonStyled onClick={onClick} disabled={isDisabled} buttonSizeStyles={buttonSizeStyleds}>
      {leftIcon && <Icon icon={ICON_LIST[leftIcon]} width="auto" />}
      <span>{label}</span>
      {rightiCon && <Icon icon={ICON_LIST[rightiCon]} width="auto" />}
    </TextButtonStyled>
  );
}

TextButton.defaultProps = {
  isDisabled: false,
};

const TextButtonStyled = styled.button<ITextButtonStyled>`
  ${(props) => props.buttonSizeStyles}
  ${cssx.flexStart}
`;

const buttonSizeStyle = {
  [BUTTON_SIZE.SMALL]: css`
    ${fonts.p1}
    img {
      width: 14px;
    }
    span {
      margin: 0 4px;
    }
  `,
  [BUTTON_SIZE.MEDIUM]: css`
    ${fonts.body_02}
    img {
      width: 14px;
    }
    span {
      margin: 0 4px;
    }
  `,
  [BUTTON_SIZE.LARGE]: css`
    ${fonts.body_01}
    img {
      width: 20px;
    }
    span {
      margin: 0 4px;
    }
  `,
};
