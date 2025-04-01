import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Admin, Auth, Basket, Catalog, Magic, NotFoundPage, Profile } from '../../pages';
import { AccessDenied } from '../../pages/AccessDenied';
import { ModalItem } from '../../entities/ModalItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setInitialized } from '../../features/auth/authSlice';

export const AppRoutes: React.FC = () => {
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.auth.token);
  const isInit = useAppSelector((state) => state.auth.isInitialized);

  React.useEffect(() => {
    dispatch(setInitialized());
  }, [dispatch]);

  // Признак авторизованного пользователя
  const userIsAuth = token !== null;
  // Признак админской роли
  const isAdminRole = token === 'admin';

  console.log(`Приложение ${isInit ? '' : 'не '}инициализированно`);
  console.log('Токен юзера: ' + token);

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Catalog />} />
      <Route path="/profile" element={userIsAuth ? <Profile /> : <AccessDenied />} />
      <Route path="/basket" element={<Basket />} />
      {isAdminRole && (
        <Route path="/admin" element={<Admin />}>
          <Route path="add-item" element={<ModalItem modalType="add" />} />
          <Route path="edit-item" element={<ModalItem modalType="edit" />} />
        </Route>
      )}
      <Route path="/magic" element={userIsAuth ? <Magic /> : <AccessDenied />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
