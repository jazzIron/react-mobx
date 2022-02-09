import styled from '@emotion/styled';
import { Button } from '@src/components/button';
import { useLogin } from '@features/login/useLogin';

export function MainPage() {
  const { handleLogin } = useLogin();
  return (
    <MainPageStyled>
      메인 페이지
      <Button onClick={handleLogin} label={'로그아웃 '} />
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div``;
