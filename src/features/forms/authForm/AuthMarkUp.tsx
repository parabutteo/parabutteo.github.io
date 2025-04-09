import React, { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';
import { Button } from '../../../components';
import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormReset } from 'react-hook-form';
import { NavigateFunction } from 'react-router-dom';
import { TAuthFormData } from './types';

interface IAuthMarkUp {
  errors: FieldErrors<TAuthFormData>;
  register: UseFormRegister<TAuthFormData>;
  errorLogin: string;
  reset: UseFormReset<TAuthFormData>;
  setErrorLogin: Dispatch<SetStateAction<string>>;
  handleSubmit: UseFormHandleSubmit<TAuthFormData, undefined>;
  onSubmit: (data: TAuthFormData) => Promise<void>;
  navigation: NavigateFunction;
  isRegProcedure: boolean;
}

export const AuthMarkUp: React.FC<IAuthMarkUp> = ({
  errors,
  register,
  errorLogin,
  reset,
  setErrorLogin,
  handleSubmit,
  onSubmit,
  navigation,
  isRegProcedure,
}) => (
  <div className="flex-column authorize-container">
    <h3 className="margin-bottom-8">{isRegProcedure ? 'Регистрация' : 'Авторизация'}</h3>
    <form className="box form authorize" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="login">Логин</label>
      <div className="grid-content">
        <input
          {...register('login', {
            required: 'Значение поля "логин" пустое',
            pattern: !isRegProcedure && {
              value: /\S+@\S+\.\S+/,
              message: 'Введите корректный адрес электронной почты',
            },
          })}
          className={clsx((errors.login || errorLogin) && 'error-field')}
          type="text"
          id="login"
          placeholder="Укажите логин"
          onChange={() => {
            if (errorLogin) {
              setErrorLogin(null);
            }
          }}
        />
        {errors.login && <p className="error">{errors.login.message}</p>}
        {errorLogin && !errors.login && <p className="error">{errorLogin}</p>}
      </div>

      <label htmlFor="pass">Пароль</label>
      <div className="grid-content">
        <input
          {...register('pass', {
            required: 'Значение поля "пароль" пустое',
            minLength: isRegProcedure && {
              value: 8,
              message: 'Пароль должен содержать минимум 8 символов',
            },
          })}
          className={clsx(errors.pass && 'error-field')}
          type="password"
          id="pass"
          placeholder="Укажите пароль"
          autoComplete="currentPassword"
        />
        {errors.pass && <p className="error">{errors.pass.message}</p>}
      </div>

      <div className="grid-content flex-row margin-top-12">
        <Button className="primary small" type="submit">
          {isRegProcedure ? 'Зарегистрироваться' : 'Войти'}
        </Button>
        {!isRegProcedure && (
          <Button
            className="margin-left-12 small"
            type="button"
            onClick={() => {
              navigation('/reg');
              reset();
            }}
          >
            Зарегистрироваться
          </Button>
        )}
        {isRegProcedure && (
          <Button
            className="margin-left-12 small"
            type="button"
            onClick={() => {
              navigation('/auth');
              reset();
            }}
          >
            Назад ко входу
          </Button>
        )}
      </div>
    </form>
  </div>
);
