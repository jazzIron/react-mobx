import styled from '@emotion/styled';
import { Logo } from '@src/layout/header/Logo';
import { cssx } from '@src/theme';
import { Gnb } from './Gnb';

export function Header() {
  return (
    <HeaderStyled>
      <Logo />
      <Gnb />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  ${cssx.flexStart}
  height: 80px;
  border-bottom: 1px solid;
`;
