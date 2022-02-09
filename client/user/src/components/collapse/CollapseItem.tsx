import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useState, useRef } from 'react';
import { ICollapseItem } from './Collapse_types';
import { colors, cssx, fonts } from '@src/theme';
import { Icon } from '../icon/Icon';
import { ICON_LIST } from '../icon/icon.data';

export function CollapseItem({ item: { title, content } }: ICollapseItem) {
  const [isOpen, setIsOpen] = useState(false);
  const contentHeight = isOpen ? 'fit-content' : '0';
  const maxHeight = isOpen ? '300px' : '0';
  const item = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!isOpen && item.current) {
      const top = item.current.offsetTop;
      window.scrollTo(0, top);
    }
    setIsOpen(!isOpen);
  };

  return (
    <CollapseItemStyled ref={item} isOpen={isOpen}>
      <TitleBox>
        <Title isOpen={isOpen}>{title}</Title>
        <ToggleButton onClick={handleToggle}>
          {isOpen ? (
            <Icon icon={ICON_LIST['icn_up']} width="14px" />
          ) : (
            <Icon icon={ICON_LIST['icn_down']} width="14px" />
          )}
        </ToggleButton>
      </TitleBox>
      <ContentBox>
        <Content hidden={!isOpen}>{content}</Content>
      </ContentBox>
    </CollapseItemStyled>
  );
}

const CollapseItemStyled = styled.div<{ isOpen: boolean }>`
  width: 100%;
  border-bottom: solid 1px ${colors.gray2};
  &:first-of-type {
    border-top: solid 1px ${colors.gray2};
  }
  ${({ isOpen }) =>
    isOpen
      ? css`
          > div {
            border-left: solid 1px ${colors.gray2};
            border-right: solid 1px ${colors.gray2};
          }
        `
      : css``}
`;
const TitleBox = styled.div`
  ${cssx.flexBtw}
  height: 60px;
  padding: 0 20px 0 40px;
`;
const Title = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) =>
    isOpen
      ? css`
          ${fonts.body_01_b}
        `
      : css`
          ${fonts.body_02}
          color: ${colors.gray5}
        `}
`;
const ToggleButton = styled.div`
  display: inline-flex;
  width: 20px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;
// const ContentBox = styled.div<{ height: string; maxHeight: string }>`
//   transition-duration: 1s;
//   ${(props) => css`
//     height: ${props.height};
//     max-height: ${props.maxHeight};
//   `};
// `;
const ContentBox = styled.div``;
const Content = styled.div`
  padding: 20px 40px;
  background-color: ${colors.gray3};
  ${fonts.body_02}
`;
