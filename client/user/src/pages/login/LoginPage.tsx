import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { Login } from '@src/features/login/Login';
import { SelectLogintype } from '@src/features/login/SelectLogintype';
import { LoginState, LOGIN_TYPE } from '@src/store/LoginState';

export function LoginPage() {
  const [loginstate, setLoginState] = useRecoilState(LoginState);
  console.log(loginstate.loginType);
  const handleSelectType = (type: LOGIN_TYPE) => {
    setLoginState((state) => ({ ...state, loginType: type }));
  };
  return (
    <LoginPageWrapper>
      {loginstate.loginType === LOGIN_TYPE.HOSPITAL ? (
        <SelectLogintype onSelect={handleSelectType} />
      ) : (
        <Login />
      )}
    </LoginPageWrapper>
  );
}

const LoginPageWrapper = styled.div``;
