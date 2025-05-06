import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts($input: ProductGetManyInput) {
    products {
      getMany(input: $input) {
        data {
          id
          name
          commandId
          photo
          price
          category {
            name
          }
          desc
        }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories($input: CategoryGetManyInput) {
    categories {
      getMany(input: $input) {
        data {
          id
          name
          commandId
        }
      }
    }
  }
`;
