import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { ISelect, SELECT_SIZE, ISelectOptionItems } from './Select_types';
import { useState } from 'react';
import { SelectOption } from './SelectOption';
import { ICON_LIST } from '../icon/icon.data';
import { Icon } from '../icon/Icon';
import { colors, fonts } from '@src/theme';

export function Select({ size, disabled, defaultValue, options, placeholder, onChange }: ISelect) {
  const sizeStyle = selectSizeStyle[size];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ISelectOptionItems | undefined>(() => {
    if (defaultValue) {
      const find = options.find((obj) => obj.value === defaultValue);
      return find;
    }
    return undefined;
  });

  const handleToggle = () => {
    !disabled && setIsOpen((prev) => !prev);
  };

  const handleChangeOption = (option: ISelectOptionItems) => {
    setSelectedOption(option);
    handleToggle();
    return onChange(option);
  };

  return (
    <DropDownWrapper>
      <DropDownHeader onClick={handleToggle} sizeStyle={sizeStyle}>
        <DropDownLabelWrapper>
          {selectedOption ? selectedOption.label : placeholder}
        </DropDownLabelWrapper>
        <DropDownIconWrapper>
          {isOpen ? (
            <Icon icon={ICON_LIST['icn_up']} width="14px" />
          ) : (
            <Icon icon={ICON_LIST['icn_down']} width="14px" />
          )}
        </DropDownIconWrapper>
      </DropDownHeader>
      {isOpen && <SelectOption size={sizeStyle} options={options} onChange={handleChangeOption} />}
    </DropDownWrapper>
  );
}

const selectSizeStyle = {
  [SELECT_SIZE.SMALL]: css`
    padding: 4px 6px;
    ${fonts.body_01};
  `,
  [SELECT_SIZE.MEDIUM]: css`
    padding: 8px 12px;
    ${fonts.body_02};
    height: 32px;
    padding: 6px 14px;
    color: ${colors.black5};
  `,
  [SELECT_SIZE.LARGE]: css`
    padding: 10px 16px;
    font-size: 18px;
  `,
};

Select.defaultProps = {
  size: SELECT_SIZE.MEDIUM,
  disabled: false,
  defaultValue: 0,
  options: [],
  placeholder: 'choice Select',
};

const DropDownWrapper = styled.div`
  margin: 0 auto;
`;

const DropDownHeader = styled.div<{ sizeStyle: SerializedStyles }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  gap: 12px;
  border: solid 1px ${colors.gray7};
  ${fonts.body_02}
  ${(props) => props.sizeStyle};
`;

const DropDownLabelWrapper = styled.div``;
const DropDownIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
