import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MouseEvent, useRef } from 'react';
import { IInputForm, INPUT_TYPE } from './InputForm_types';
import { ICON_LIST } from '@src/components/icon/icon.data';
import { useState } from 'react';
import { Themes } from '@src/theme/Theme';
import { isNil } from 'lodash';

export function InputForm({
  type,
  inputValue,
  renderState,
  allowClear,
  placeholder,
  maxLength,
  readOnly,
  prefixIcon,
  onChange,
}: IInputForm) {
  const IconSize = '14px';
  const inputRef = useRef<HTMLDivElement>(null);
  const [hasFocus, setFocus] = useState(false);

  // 이벤트 전파 방치 처리
  const handleMouseDown = (e: MouseEvent<HTMLInputElement>) => e.preventDefault();

  const handleClickAllowClear = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onChange('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const maxInput = maxLength ? maxLength : 0;
    if (maxInput > 0) {
      return onChange(value.slice(0, maxInput));
    }
    onChange(value);
  };

  const handleFocus = () => {
    if (!isNil(inputRef.current)) {
      inputRef.current.style.borderColor =
        renderState === 'ERROR' ? Themes.colors.red1 : Themes.colors.main;
    }
    return setFocus(true);
  };

  const handleBlur = () => {
    if (!isNil(inputRef.current)) {
      inputRef.current.style.borderColor =
        renderState === 'ERROR' ? Themes.colors.red1 : Themes.colors.gray2;
    }
    return setFocus(false);
  };

  return (
    <InputFormWrapper ref={inputRef} readOnly={readOnly}>
      {prefixIcon && (
        <IconWrapper onClick={handleClickAllowClear}>
          <img src={ICON_LIST[prefixIcon]} width={IconSize} alt="prefix_Icon" />
        </IconWrapper>
      )}
      <InputFormStyled
        type={type}
        value={inputValue}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {allowClear && inputValue && hasFocus && (
        <IconClearWrapper onClick={handleClickAllowClear} onMouseDown={handleMouseDown}>
          <img src={ICON_LIST['icn_clean']} width={IconSize} alt="icn_clean" />
        </IconClearWrapper>
      )}
      {renderState === 'SUCCESS' && !hasFocus && (
        <IconCheckWrapper>
          <img src={ICON_LIST['icn_check']} width={IconSize} alt="icn_check" />
        </IconCheckWrapper>
      )}
    </InputFormWrapper>
  );
}

InputForm.defaultProps = {
  type: INPUT_TYPE.TEXT,
  inputValue: '',
  vaild: false,
  allowClear: true,
  error: false,
  maxLength: 4000,
  placeholder: 'placeHolder 내용노출',
  readOnly: false,
};

const InputFormWrapper = styled.div<{ readOnly: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.gray2};
  padding: 6px 12px;
  ${(props) => props.theme.fonts.body_01}
  ${(props) =>
    props.readOnly &&
    css`
      background-color: ${props.theme.colors.gray2};
      pointer-events: none;
      & input {
        background-color: ${props.theme.colors.gray2};
        ::placeholder {
          color: ${props.theme.colors.gray5};
        }
      }
    `};
`;
const IconWrapper = styled.span`
  margin: auto;
  align-items: center;
  padding-right: 6px;
`;
const IconCheckWrapper = styled.span`
  position: relative;
`;
const IconClearWrapper = styled.span`
  display: inline-flex;
  cursor: pointer;
`;

const InputFormStyled = styled.input`
  border-style: none;
  :focus {
    outline: none;
  }
  /* width: 100%; */
  display: inline-flex;
  flex: 1;
  ${(props) => props.theme.fonts.body_01}
  color: ${(props) => props.theme.colors.black2};
  ::placeholder {
    ${(props) => props.theme.fonts.body_02}
    color: ${(props) => props.theme.colors.gray6};
  }
`;
