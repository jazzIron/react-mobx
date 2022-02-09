import styled from '@emotion/styled';
import { useState } from 'react';
import { css } from '@emotion/react';

interface IGnbWrapper {
  isRight: boolean;
}

// eslint-disable-next-line react/prop-types
export function GnbWrapper({ isRight }: IGnbWrapper) {
  const [isEnter, setIsEnter] = useState(false);

  const mouseEnter = () => {
    setIsEnter(true);
    // console.log('enter');
  };

  const mouseLeave = () => {
    // console.log('leave');
    setIsEnter(false);
  };

  const mouseClick = () => {
    setIsEnter(true);
  };

  return (
    <GnbWrapperStyled onMouseLeave={mouseLeave} isRight={isRight}>
      <h1>
        <button onClick={mouseClick}>gnb1</button>
      </h1>
      {isEnter && (
        <MenuWrapper>
          <Menu>여기는 투뎁스 이상</Menu>
          <Menu>여기는 투뎁스 이상</Menu>
          <Menu>여기는 투뎁스 이상</Menu>
        </MenuWrapper>
      )}
    </GnbWrapperStyled>
  );
}

const GnbWrapperStyled = styled.div<{ isRight: boolean }>`
  display: flex;
  flex: 1;
  position: relative;
  height: 100%;
  padding: 0 18px;
  ${({ isRight }) =>
    isRight
      ? css`
          flex: 1;
          justify-content: flex-end;
          > div {
            left: auto !important;
            right: 0 !important;
          }
        `
      : css`
          flex: none;
        `}
  h1 {
    display: flex;
  }
`;

const MenuWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 214px;
  padding: 10px 20px 10px 30px;
  background-color: cadetblue;
`;

const Menu = styled.div`
  line-height: 36px;
`;
