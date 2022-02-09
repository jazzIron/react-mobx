import { Header } from '@src/layout/header';
import { useLocation } from 'react-router-dom';

const removeHeaderList = ['/login'];

export function HeaderRouter() {
  const { pathname } = useLocation();
  const hasHeader = removeHeaderList.includes(pathname); //임시로 처리
  return <>{!hasHeader && <Header />}</>;
}
