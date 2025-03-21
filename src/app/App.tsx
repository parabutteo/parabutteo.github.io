import React from 'react';
import '../app/styles/common.scss';
import { ContextProvider } from './ContextProvider';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../pages';
import { routes } from '../pages/routes';
import { AccessDenied } from 'src/pages/AccessDenied';

/**
 * Входной файл приложения
 *
 * В компоненте input присутствует паттерн "Controlled input"
 */

export const App: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userIsAuth = urlParams.has('user') && urlParams.get('user') === 'auth';

  return (
    <ContextProvider>
      <Routes>
        {routes.map((route) => {
          if (route.isAuth && !userIsAuth) {
            return <Route key="access-denied" path="magic" element={<AccessDenied />} />;
          }
          return <Route key={route.path} path={route.path} element={<route.component />} />;
        })}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ContextProvider>
  );
};

export default App;
