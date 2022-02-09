import styled from '@emotion/styled';
import { cssx } from '@src/theme';
import { GnbWrapper } from './GnbWrapper';

export function Gnb() {
  // Gnb 영역
  return (
    <GnbStyled>
      {/* 우측에 동떨어진 메뉴 설정: true */}
      <GnbWrapper isRight={false} />
      <GnbWrapper isRight={false} />
      <GnbWrapper isRight={true} />
    </GnbStyled>
  );
}

const GnbStyled = styled.div`
  ${cssx.flexStart}
  flex: 1;
  height: 100%;
`;
