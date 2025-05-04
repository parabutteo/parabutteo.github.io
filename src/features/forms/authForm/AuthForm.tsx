import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../store/hooks';
import { setToken } from '../../../features/auth/authSlice';
import { randomNumberGenerator } from '../../../features/createRandomProduct';
import { useNavigate } from 'react-router-dom';
import { backendErrorMessages, COMMAND_ID } from '../../../shared/constants';
import { AuthMarkUp } from './AuthMarkUp';
import { TAuthFormData } from './types';
import { useMutation, ApolloError } from '@apollo/client';
import { SIGN_UP } from 'src/graphql/mutations/profile';

// Тип для видов формы
type TAuth = 'reg' | 'auth';

interface IAuthForm {
  /** Вид формы */
  authType: TAuth;
}

/**
 * Компонент формы аутентификации
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

export const AuthForm: React.FC<IAuthForm> = ({ authType }) => {
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

  const [signUp] = useMutation(SIGN_UP);

  const onSubmit = async (data: TAuthFormData) => {
    console.log(`Введенные данные в форме ${isRegProcedure ? 'регистрации' : 'авторизации'}: `, data);

    try {
      if (isRegProcedure) {
        const response = await signUp({
          variables: {
            email: data.login,
            password: data.pass,
            commandId: COMMAND_ID,
          },
        });
        console.log('Результат запроса:', response);

        const token = response.data?.profile?.signup?.token;
        if (token) {
          dispatch(setToken(token));
          reset();
          navigation('/');
        } else {
          setErrorLogin('Ошибка: токен не получен от сервера');
        }
      } else {
        tokenizeHandler();
        reset();
        navigation('/');
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        if (error.graphQLErrors.length > 0) {
          error.graphQLErrors.forEach(({ extensions }) => {
            const code = extensions?.code;
            console.log(code);
            setErrorLogin(backendErrorMessages[code as string] || 'Неизвестная ошибка');
          });
        }
      } else {
        setErrorLogin('Ошибка соединения с сервером');
      }
    }
  };

  return (
    <AuthMarkUp
      errors={errors}
      register={register}
      errorLogin={errorLogin}
      reset={reset}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      navigation={navigation}
      isRegProcedure={isRegProcedure}
    />
  );
};
