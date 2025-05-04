import { createAsyncThunk } from '@reduxjs/toolkit';
import { REST_API_SERVER_URL, COMMAND_ID } from '../../constants';
import { client } from 'src/client/ApolloClient';
import { SIGN_UP } from 'src/graphql/mutations/profile';

interface ISingUpResponse {
  errors?: Array<{ extensions: { code: string } }>;
  token?: string;
}

// REST
export const singup = async (email: string, password: string): Promise<ISingUpResponse> => {
  try {
    const response = await fetch(REST_API_SERVER_URL + `/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, commandId: COMMAND_ID }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw error;
  }
};

// GraphQL
export const signUp = createAsyncThunk(
  'user/signUp',
  async (credentials: { email: string; password: string; commandId: string }) => {
    const response = await client.mutate({
      mutation: SIGN_UP,
      variables: credentials,
    });
    return response.data;
  }
);
