import { useLocation } from 'react-router-dom';
import { Footer } from '../layout/footer/Footer';

const removeFooterList = ['/login'];

export function FooterRouter() {
  const { pathname } = useLocation();
  const hasHeader = removeFooterList.includes(pathname); //임시로 처리
  return <>{!hasHeader && <Footer />}</>;
}
