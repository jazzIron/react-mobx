import { atom } from 'recoil';

export enum LOGIN_TYPE {
  HOSPITAL = 'HOSPITAL',
  ADMINISTRATION = 'ADMINISTRATION',
  MASTER = 'MASTER',
  DOCTOR = 'DOCTOR',
}

interface ILoginState {
  isLogin: boolean;
  loginType: LOGIN_TYPE;
}

const initLoginState: ILoginState = {
  isLogin: false,
  loginType: LOGIN_TYPE.HOSPITAL,
};

export const LoginState = atom({
  key: 'LoginState',
  default: initLoginState,
});
