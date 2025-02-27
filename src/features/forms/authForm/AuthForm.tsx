import { useForm } from 'react-hook-form';
import React from 'react';
import { Button } from '../../../components';
import clsx from 'clsx';

type TAuth = 'reg' | 'auth';

type TAuthFormData = {
  login: string;
  pass: string;
};

interface IAuthForm {
  authType: TAuth;
}

export const AuthForm: React.FC<IAuthForm> = ({ authType }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TAuthFormData>();

  const [authTypeInner, setAuthTypeInner] = React.useState<TAuth>(authType);

  const isRegProcedure = authTypeInner === 'reg';

  const onSubmit = (data: TAuthFormData) => {
    console.log(`Введенные данные в форме ${isRegProcedure ? 'регистрации' : 'авторизации'}: `, data);
    reset();
  };

  return (
    <div className="flex-column authorize-container">
      <h3 className="margin-bottom-8">{isRegProcedure ? 'Регистрация' : 'Авторизация'}</h3>
      <form className="box form authorize" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="login">Логин</label>
        <div className="grid-content">
          <input
            {...register('login', {
              required: 'Значение поля "логин" пустое',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Введите корректный адрес электронной почты',
              },
            })}
            className={clsx(errors.login && 'error-field')}
            type="text"
            id="login"
            placeholder="Укажите логин"
          />
          {errors.login && <p className="error">{errors.login.message}</p>}
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
            className={clsx(errors.login && 'error-field')}
            type="password"
            id="pass"
            placeholder="Укажите пароль"
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
              type="submit"
              onClick={() => {
                setAuthTypeInner('reg');
                reset();
              }}
            >
              Зарегистрироваться
            </Button>
          )}
          {isRegProcedure && (
            <Button
              className="margin-left-12 small"
              type="submit"
              onClick={() => {
                setAuthTypeInner('auth');
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
};
