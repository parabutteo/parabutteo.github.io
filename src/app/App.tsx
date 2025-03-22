import React from 'react';
import '../app/styles/common.scss';
import { ContextProvider } from './ContextProvider';
import { Route, Routes } from 'react-router-dom';
import { Admin, Auth, Basket, Catalog, Magic, NotFoundPage, Profile } from '../pages';
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
        <Route path="/auth" element={<Auth />} />
        <Route path="" element={<Catalog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/magic" element={userIsAuth ? <Magic /> : <AccessDenied />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ContextProvider>
  );
};

export default App;
