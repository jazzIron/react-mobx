import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { ChangeEvent, useState } from 'react';
import { ITextarea, TEXTAREA_THEME } from './Textarea_types';
import { Icon } from '../icon/Icon';
import { ICON_LIST } from '../icon/icon.data';
import { colors, fonts } from '@src/theme';

export function Textarea({
  theme,
  disabled,
  placeholder,
  value,
  maxLength,
  readOnly,
  rows,
  isRemove,
  onChange,
}: ITextarea) {
  const themeStyle = textAreaTheme[theme];
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
    setTLength(e.target.value.length);
  };

  const clearHandler = () => {
    onChange('');
    setTLength(0);
  };

  const [tLength, setTLength] = useState(0);

  return (
    <TextareaWrapper>
      <TextAreaStyled
        themeStyle={themeStyle}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        readOnly={readOnly}
        rows={rows}
        onChange={onChangeHandler}
      />
      {isRemove && (
        <IconWapper onClick={clearHandler}>
          <Icon icon={ICON_LIST['icn_clean']} width={'14px'} />
        </IconWapper>
      )}
      <TextareaLength>
        {tLength} / {maxLength}
      </TextareaLength>
    </TextareaWrapper>
  );
}

Textarea.defaultProps = {
  theme: TEXTAREA_THEME.BORDER,
  placeholder: '입력해주세요.',
  maxLength: 500,
  isRemove: false,
};

interface ITextAreaStyled {
  themeStyle: SerializedStyles;
}

const textAreaTheme = {
  [TEXTAREA_THEME.BORDER]: css`
    border: solid 1px ${colors.gray2};
  `,
};

const TextareaWrapper = styled.div`
  position: relative;
  font-size: 0;
`;
const TextAreaStyled = styled.textarea<ITextAreaStyled>`
  width: 100%;
  resize: none;
  padding: 6px 12px;
  ${fonts.body_02}
  color: ${colors.black2};
  border-radius: 2px;
  ${(props) => props.themeStyle}
`;
const TextareaLength = styled.div`
  margin-top: 6px;
  text-align: right;
  ${fonts.body_01}
  color: ${colors.gray6};
`;
const IconWapper = styled.div`
  position: absolute;
  right: 12px;
  top: 9px;
  cursor: pointer;
`;
