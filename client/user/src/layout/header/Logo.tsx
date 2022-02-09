import styled from '@emotion/styled';
import { Icon } from '@src/components/icon/Icon';
import { ICON_LIST } from '@src/components/icon/icon.data';

export function Logo() {
  // 로고 영역
  return (
    <LogoStyled>
      <Icon icon={ICON_LIST.icn_logo} width="124px" />
    </LogoStyled>
  );
}

// header가 플로팅 되어야 함
const LogoStyled = styled.div`
  width: 204px;
`;
