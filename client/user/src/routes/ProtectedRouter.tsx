import { LoginState } from '@store/LoginState';
import { useLocation, RouteProps, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { RouteList } from './RouteList';

interface IProtectedRouter extends RouteProps {
  redirectPath: string;
  children: JSX.Element;
}

/**
 * 로그인 여부
 */
export function ProtectedRouter({ redirectPath, children }: IProtectedRouter) {
  const { isLogin } = useRecoilValue(LoginState);
  const location = useLocation();
  if (!isLogin) {
    return <Navigate to={redirectPath} state={location.state} />;
  }
  return children;
}

ProtectedRouter.defaultProps = {
  redirectPath: RouteList.LOGIN,
};
