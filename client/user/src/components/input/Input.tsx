import React, { useState } from 'react';
import styled from '@emotion/styled';
import { IInputProps } from './input_types';
import { INPUT_TYPE } from './InputForm_types';
import { Icon } from '../icon/Icon';
import { ICON_LIST } from '../icon/icon.data';
import { cssx } from '@src/theme';

export default function Input({
  value,
  type,
  readOnly,
  disabled,
  placeholder,
  onChange,
}: IInputProps) {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  const clearHandler = () => {
    onChange('');
  };

  return (
    <InputWrapper>
      <InputInner>
        <BeforeIconWapper>
          <Icon icon={ICON_LIST['icn_person']} width={'14px'} />
        </BeforeIconWapper>
        <InputStyled
          value={value}
          type={type}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          onChange={handleOnChange}
        ></InputStyled>
      </InputInner>
      <IconWapper onClick={clearHandler}>
        <Icon icon={ICON_LIST['icn_clean']} width={'14px'} />
      </IconWapper>
    </InputWrapper>
  );
}

Input.defaultProps = {
  type: INPUT_TYPE.TEXT,
  readOnly: false,
  disabled: false,
  placeholder: '입력해 주세요.',
};

const InputWrapper = styled.div`
  ${cssx.flexStart}
  position: relative;
  height: 32px;
  padding: 6px 12px;
  border: solid 1px #d9d9d9;
  border-radius: 2px;
`;
const InputInner = styled.div`
  ${cssx.flexStart}
  flex: 1;
`;

const IconWapper = styled.div`
  margin-left: 6px;
  font-size: 0;
  cursor: pointer;
`;
const InputStyled = styled.input`
  position: relative;
  flex: 1;
  color: #4a4a4a;
  border: none;
  /* background: pink; */
  /* &::placeholder {
    color: #d4d4d4;
  }
  &:focus-visible,
  &:focus {
    border: solid 1px #4ac6ff;
    outline: none;
  }
  &:disabled {
    background-color: #f5f5f5;
    color: #d4d4d4;
  } */
`;

const BeforeIconWapper = styled.div`
  margin-right: 6px;
  font-size: 0;
  /* cursor: pointer; */
`;
