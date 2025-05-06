import { gql } from '@apollo/client';

export const ADD_PRODUCT = gql`
  mutation AddProduct($input: ProductAddInput!) {
    products {
      add(input: $input) {
        id
        name
        photo
        desc
        oldPrice
        price
        category {
          id
          name
          photo
          commandId
        }
        commandId
      }
    }
  }
`;

export const PUT_PRODUCT = gql`
  mutation PutProduct($putId: ID!, $input: ProductUpdateInput!) {
    products {
      put(id: $putId, input: $input) {
        id
        name
        photo
        desc
        createdAt
        updatedAt
        oldPrice
        price
        category {
          id
          name
          photo
          createdAt
          updatedAt
          commandId
        }
        commandId
      }
    }
  }
`;

export const REMOVE_PRODUCT = gql`
  mutation RemoveProduct($removeId: ID!) {
    products {
      remove(id: $removeId) {
        id
        name
        photo
        desc
        createdAt
        updatedAt
        oldPrice
        price
        category {
          id
          name
          photo
          createdAt
          updatedAt
          commandId
        }
        commandId
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
