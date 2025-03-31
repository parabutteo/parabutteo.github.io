import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Admin, Auth, Basket, Catalog, Magic, NotFoundPage, Profile } from '../../pages';
import { AccessDenied } from '../../pages/AccessDenied';
import { ModalItem } from '../../entities/ModalItem';
import { useAppSelector } from '../../store/hooks';

export const AppRoutes: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userIsAuth = urlParams.has('user') && urlParams.get('user') === 'auth';

  const token = useAppSelector((state) => state.auth.token);
  const isUserLoggedIn = token !== null;
  console.log('Токен юзера: ' + token);

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Catalog />} />
      {isUserLoggedIn && <Route path="/profile" element={<Profile />} />}
      <Route path="/basket" element={<Basket />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="add-item" element={<ModalItem modalType="add" />} />
        <Route path="edit-item" element={<ModalItem modalType="edit" />} />
      </Route>
      <Route path="/magic" element={userIsAuth ? <Magic /> : <AccessDenied />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
