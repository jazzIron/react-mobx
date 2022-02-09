import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RouteList } from './RouteList';
import { ErrorPage } from '@src/pages/error';
import { MainPage } from '@src/pages/main/MainPage';
import { Modal } from '@src/components/modal';
import { ProtectedRouter } from './ProtectedRouter';
import { LoginPage } from '@src/pages/login/LoginPage';
import { HeaderRouter } from './HeaderRouter';
import { FooterRouter } from './FooterRouter';
import { SearchFormTest } from '@src/features/test/searchForm/SearchFormTest';
import { Todo } from '@src/features/modx/Todo';

export function RouterManager() {
  return (
    <>
      <Router>
        <HeaderRouter />
        <Routes>
          <Route path={'/test'} element={<Todo />} />
          <Route path={'/formTestPage'} element={<SearchFormTest />} />
          <Route path={RouteList.LOGIN} element={<LoginPage />} />
          <Route
            path={RouteList.MAIN}
            element={
              <ProtectedRouter redirectPath={RouteList.LOGIN}>
                <MainPage />
              </ProtectedRouter>
            }
          />

          <Route element={<ErrorPage />} />
        </Routes>
        <Modal />
        <FooterRouter />
      </Router>
    </>
  );
}
