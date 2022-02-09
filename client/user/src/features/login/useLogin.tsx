import { useRecoilState } from 'recoil';
import { LoginState } from '@store/LoginState';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { RouteList } from '@src/routes/RouteList';
import { isEmpty } from 'lodash';

export function useLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginState, setLoginState] = useRecoilState(LoginState);

  const handleLogin = () => {
    setLoginState((prevState) => {
      return { ...prevState, isLogin: !prevState.isLogin };
    });
  };

  useEffect(() => {
    if (loginState.isLogin) {
      navigate(RouteList.MAIN, { state: '' });
    }
  }, [loginState]);

  return {
    loginState,
    handleLogin,
  };
}
