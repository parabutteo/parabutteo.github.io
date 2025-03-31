import React from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import clsx from 'clsx';

/**
 * Кнопка "выход из ЛК"
 */

export const LoginButton: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const isUserLoggedIn = token !== null;

  const loginHandler = (): void => {
    if (isUserLoggedIn) {
      dispatch(setToken(null));
    } else navigate('/auth');
  };

  return (
    <Button className="icon-btn theme-switch" onClick={loginHandler}>
      <i className={clsx('fa', isUserLoggedIn ? 'fa-sign-out' : 'fa-sign-in')} />
    </Button>
  );
};
