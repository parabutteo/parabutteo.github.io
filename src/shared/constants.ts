export const REST_API_SERVER_URL = 'https://19429ba06ff2.vps.myjino.ru/api';
export const GRAPH_QL_SERVER = 'http://cea3c11a3f62.vps.myjino.ru/graphql';
export const COMMAND_ID = 'parabutteo';

const existAccount = 'Уже существует пользователь с данным адресом электронной почты';
const enterCorrectEmail = 'Введите корректный адрес электронной почты';

export const backendErrorMessages: Record<string, string> = {
  ERR_VALIDATION_ERROR: enterCorrectEmail,
  VALIDATION: enterCorrectEmail,
  ERR_ACCOUNT_ALREADY_EXIST: existAccount,
  ACCOUNT_ALREADY_EXIST: existAccount,
};
