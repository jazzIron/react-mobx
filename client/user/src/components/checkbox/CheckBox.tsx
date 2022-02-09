import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ICheckBoxProps, IValue } from './checkBox_types';
import { Icon } from '../icon/Icon';
import { ICON_LIST } from '../icon/icon.data';
import { cssx } from '@src/theme';

export default function CheckBox({
  value,
  onClick,
  isChecked,
  id,
  disabled,
  suffixIcon,
  onClickSuffix,
}: ICheckBoxProps) {
  const icon = disabled
    ? isChecked
      ? ICON_LIST.icn_check_dis
      : ICON_LIST.icn_nocheck_dis
    : isChecked
    ? ICON_LIST.icn_check
    : ICON_LIST.icn_nocheck;
  return (
    <CheckboxWrapper>
      <CheckboxStyled icon={icon}>
        <input
          onChange={onClick}
          checked={isChecked}
          type="checkbox"
          value={id}
          disabled={disabled}
          data-testid="checkboxInput"
        />
        <ContentWrapper>
          <Content>{value}</Content>
        </ContentWrapper>
      </CheckboxStyled>
      {suffixIcon && (
        <span onClick={onClickSuffix}>
          <Icon icon={suffixIcon} width={'30px'} />
        </span>
      )}
    </CheckboxWrapper>
  );
}

CheckBox.defaultProps = {
  value: 'test',
  onclick: () => console.log('click'),
  isChecked: false,
};

const CheckboxWrapper = styled.div`
  ${cssx.flexBtw}
`;

const CheckboxStyled = styled.label`
  ${cssx.flexCenter}
  margin-bottom: 10px;
  cursor: pointer;
  ${({ icon }: IValue) =>
    css`
      background: url(${icon}) no-repeat 0 50% / contain;
    `}
  input {
    opacity: 0;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  padding-left: 17px;
`;
const Content = styled.div``;
const IsRequired = styled.div`
  padding-left: 10px;
`;
