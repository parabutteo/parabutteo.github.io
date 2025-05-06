import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Admin, Auth, Basket, Catalog, Magic, NotFoundPage, Profile, Reg, RegRTK } from '../../pages';
import { AccessDenied } from '../../pages/AccessDenied';
import { ModalItem } from '../../entities/ModalItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { initializeApp } from '../../features/app/appSlice';
import { ADMIN_ID } from '../../shared/constants';

export const AppRoutes: React.FC = () => {
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.auth.token);
  const profileId = useAppSelector((state) => state.auth.profileId);
  const isInit = useAppSelector((state) => state.app.initialized);

  React.useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  // Признак авторизованного пользователя
  const userIsAuth = token !== null;
  // Признак админской роли
  const isAdminRole = profileId === ADMIN_ID;

  console.log(`Приложение ${isInit ? '' : 'не '}инициализированно`);

  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/rtk-reg" element={<RegRTK />} />
        <Route path="/" element={<Catalog />} />
        <Route path="/profile" element={userIsAuth ? <Profile /> : <AccessDenied />} />
        <Route path="/basket" element={<Basket />} />
        {userIsAuth && isAdminRole && (
          <Route path="/admin" element={<Admin />}>
            <Route path="add-item" element={<ModalItem modalType="add" />} />
            <Route path="edit-item" element={<ModalItem modalType="edit" />} />
          </Route>
        )}
        <Route path="/magic" element={userIsAuth ? <Magic /> : <AccessDenied />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
