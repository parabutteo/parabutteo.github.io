import React from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { Button } from '../../../components';
import { useAppDispatch } from '../../../store/hooks';
import { setToken } from '../../../features/auth/authSlice';
import { randomNumberGenerator } from '../../../features/createRandomProduct';
import { useNavigate } from 'react-router-dom';
import { backendErrorMessages } from '../../../shared/constants';
import { useSingUpMutation } from '../../../shared/api/auth/rtk_signup';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

// Тип для видов формы
type TAuth = 'reg' | 'auth';

type TAuthFormData = {
  login: string;
  pass: string;
};

interface IAuthForm {
  /** Вид формы */
  authType: TAuth;
}

/**
 * Компонент формы аутентификации, работающей на RTK Query
 *
 * Состоит из двух составляющих: регистрация и авторизация
 *
 * Тип формы прокидывается пропсом, но, также, сменяется по нажатию
 * на соответствующую кнопку внутри компонента
 *
 * @param authType тип формы
 *
 * @returns React.FC
 */

export const AuthFormRTK: React.FC<IAuthForm> = ({ authType }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm<TAuthFormData>();

  // Признак формы регистрации
  const isRegProcedure = authType === 'reg';

  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const [singUp] = useSingUpMutation();

  // Хендлер для выдачи токена при авторизации
  // Если токен админа -- формируем админский токен, иначе случайный
  const tokenizeHandler = (): void => {
    if (getValues('login') === 'admin@admin.ru') {
      dispatch(setToken('admin'));
    } else {
      const tokenValue = randomNumberGenerator(1000, 9999);
      dispatch(setToken(tokenValue.toString()));
    }
  };

  // Стейт для заполнения ошибки по логину, приходящей с сервера
  const [errorLogin, setErrorLogin] = React.useState<string | null>(null);

  // Тип-гварды для обработки ошибок
  function isFetchBaseQueryError(error: FetchBaseQueryError | SerializedError): error is FetchBaseQueryError {
    return 'status' in error && 'data' in error;
  }
  function isDataObject(data: unknown): data is { errors: { extensions: { code: string } }[] } {
    return typeof data === 'object' && data !== null && 'errors' in data;
  }

  // Хендлер для вывода ошибок с бека
  const handleServerErrors = (error: FetchBaseQueryError | SerializedError) => {
    if (isFetchBaseQueryError(error)) {
      const errorData = error.data;
      if (isDataObject(errorData)) {
        const errors = errorData.errors;
        if (errors && errors.length > 0) {
          const error = errors[0];
          if ('extensions' in error && 'code' in error.extensions) {
            const code = error.extensions.code;
            setErrorLogin(backendErrorMessages[code] || 'Неизвестная ошибка');
          }
        }
      }
    }
  };

  const onSubmit = async (data: TAuthFormData) => {
    console.log(`Введенные данные в форме ${isRegProcedure ? 'регистрации' : 'авторизации'}: `, data);

    if (isRegProcedure) {
      try {
        const response = await singUp({ email: data.login, password: data.pass });
        console.log('Результат запроса:', response);

        if (response?.error) {
          handleServerErrors(response.error);
        } else if (response?.data.token) {
          dispatch(setToken(response.data.token));
          reset();
          navigation('/');
        } else {
          setErrorLogin('Ошибка: токен не получен от сервера');
        }
      } catch (error) {
        setErrorLogin('Ошибка соединения с сервером');
      }
    } else {
      tokenizeHandler();
      reset();
      navigation('/');
    }
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
      <div className="margin-top-12 flex-row align-items-center justify-content-end">
        <div className="txt-bold margin-right-4">powered by</div>
        <img src="https://redux-toolkit.js.org/img/redux.svg" width={40} height={40} />
      </div>
    </div>
  );
};
