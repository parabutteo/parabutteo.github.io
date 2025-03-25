import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import { Admin, Auth, Basket, Catalog, Magic, NotFoundPage, Profile } from '../../pages';
import { AccessDenied } from 'src/pages/AccessDenied';
import { ModalItem } from 'src/entities/ModalItem';

export const AppRoutes: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userIsAuth = urlParams.has('user') && urlParams.get('user') === 'auth';

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Catalog />} />
      <Route path="/profile" element={<Profile />} />
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
