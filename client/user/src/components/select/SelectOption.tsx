import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { ISelectOption } from './Select_types';
import { colors, cssx } from '@src/theme';

export function SelectOption({ size, options, onChange }: ISelectOption) {
  return (
    <DropDownListWrapper>
      <DropDownListStyled>
        {options.map((option) => (
          <ListItem
            sizeStyle={size}
            onClick={() => onChange(option)}
            key={option.id}
            disabled={option.disabled}
          >
            {option.label}
          </ListItem>
        ))}
      </DropDownListStyled>
    </DropDownListWrapper>
  );
}

const DropDownListWrapper = styled.div``;

const DropDownListStyled = styled.ul`
  padding: 4px 0;
  border-radius: 2px;
  box-shadow: 0 9px 28px 8px rgba(0, 0, 0, 0.05), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12);
  background-color: ${colors.white};
  &:first-of-type {
    border-top: 0;
  }
`;

const ListItem = styled.li<{ sizeStyle: SerializedStyles; disabled: boolean }>`
  ${cssx.flexStart}
  height: 32px;
  gap: 8px;
  padding: 6px 14px;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
      pointer-events: none;
    `}
  ${(props) => props.sizeStyle};
  &:hover {
    background-color: ${colors.skyblue};
  }
`;
