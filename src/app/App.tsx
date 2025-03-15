import React from 'react';
import '../app/styles/common.scss';
import { ContextProvider } from './ContextProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../pages';
import { routes } from '../pages/routes';

/**
 * Входной файл приложения
 *
 * В компоненте input присутствует паттерн "Controlled input"
 */

export const App: React.FC = () => {
  const isAuth = false;

  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            if (route.isAuth && !isAuth) {
              return false;
            }
            return <Route key={route.path} path={route.path} element={<route.component />} />;
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
