import React from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../features/auth/authSlice';
import { useAppDispatch } from '../../store/hooks';

/**
 * Кнопка "выход из ЛК"
 */

export const ExitButton: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const exitHandler = (): void => {
    navigate('/auth');
    dispatch(setToken(null));
  };

  return (
    <Button className="icon-btn theme-switch" onClick={exitHandler}>
      <i className="fa fa-sign-out" />
    </Button>
  );
};
