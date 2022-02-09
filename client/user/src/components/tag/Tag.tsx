import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { useState } from 'react';
import { ITag, TAG_THEME } from './Tag_types';
import { TAG_SIZE } from '.';
import { colors, cssx, fonts } from '@src/theme';
import { Icon } from '../icon/Icon';
import { ICON_LIST } from '../icon/icon.data';

export function Tag({ theme, size, options, isRemove }: ITag) {
  const themeStyle = tagTheme[theme];
  const themeSize = tagSize[size];
  const [tagOptions, setTagOptions] = useState(options);

  const onRemove = (id: string) => {
    setTagOptions(
      tagOptions.map((option) =>
        option.id === id ? { ...option, hidden: !option.hidden } : option,
      ),
    );
  };

  const newOptions = tagOptions.filter((option) => option.hidden === false);

  return (
    <TagWrapper>
      {newOptions.map((option) => {
        return (
          <TagStyled key={option.id} themeStyle={themeStyle} themeSize={themeSize}>
            {option.label} {option.hidden}
            {!isRemove && (
              <IconWapper onClick={(e) => onRemove(option.id)}>
                {size === 'SMALL' && theme === 'GRAY' && (
                  <Icon icon={ICON_LIST['icn_x_14_gray']} width="14px" />
                )}
                {size === 'LARGE' && theme === 'GRAY' && (
                  <Icon icon={ICON_LIST['icn_x_20_gray']} width="20px" />
                )}
                {size === 'SMALL' && theme !== 'GRAY' && (
                  <Icon icon={ICON_LIST['icn_x_14']} width="14px" />
                )}
                {size === 'LARGE' && theme !== 'GRAY' && (
                  <Icon icon={ICON_LIST['icn_x_20']} width="20px" />
                )}
              </IconWapper>
            )}
          </TagStyled>
        );
      })}
    </TagWrapper>
  );
}

Tag.defaultProps = {
  theme: TAG_THEME.BLACK,
  size: TAG_SIZE.SMALL,
};

const tagTheme = {
  [TAG_THEME.BLUE]: css`
    background-color: ${colors.blue2};
  `,
  [TAG_THEME.RED]: css`
    background-color: ${colors.red1};
  `,
  [TAG_THEME.YELLOW]: css`
    background-color: ${colors.yellow1};
  `,
  [TAG_THEME.GRAY]: css`
    background-color: ${colors.gray3};
    color: ${colors.gray5};
  `,
  [TAG_THEME.BLACK]: css`
    background-color: ${colors.black4};
  `,
};

const tagSize = {
  [TAG_SIZE.SMALL]: css`
    height: 24px;
    padding: 2px 10px;
    ${fonts.body_02};
  `,
  [TAG_SIZE.LARGE]: css`
    height: 30px;
    padding: 4px 12px;
    ${fonts.body_01};
  `,
};

interface ITagStyled {
  themeStyle: SerializedStyles;
  themeSize: SerializedStyles;
}

const TagWrapper = styled.div`
  ${cssx.flexStart}
`;
const TagStyled = styled.div<ITagStyled>`
  ${cssx.flexStart}
  border-radius: 2px;
  color: ${colors.white};
  & + div {
    margin-left: 10px;
  }
  ${(props) => props.themeStyle}
  ${(props) => props.themeSize}
`;
const IconWapper = styled.button`
  margin-left: 4px;
`;
