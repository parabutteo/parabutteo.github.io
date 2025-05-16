import React, { FC } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import { GRAPH_QL_SERVER } from '../shared/constants';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: GRAPH_QL_SERVER,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export type ClientProps = {
  children: React.ReactNode;
};

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const Client: FC<ClientProps> = ({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider>;
