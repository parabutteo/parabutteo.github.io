import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation Signup($email: String!, $password: String!, $commandId: String!) {
    profile {
      signup(email: $email, password: $password, commandId: $commandId) {
        profile {
          id
          name
          email
          signUpDate
          commandId
        }
        token
      }
    }
  }
`;