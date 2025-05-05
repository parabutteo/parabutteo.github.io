import { gql } from '@apollo/client';

export const ADD_PRODUCT = gql`
  mutation AddProduct($input: ProductAddInput!) {
    products {
      add(input: $input) {
        id
        name
        price
        category {
          id
          name
        }
      }
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation AddCategory($input: CategoryAddInput!) {
    categories {
      add(input: $input) {
        id
        name
        commandId
      }
    }
  }
`;

export const REMOVE_CATEGORY = gql`
  mutation RemoveCategory($removeId: ID!) {
    categories {
      remove(id: $removeId) {
        commandId
        id
        name
      }
    }
  }
`;
