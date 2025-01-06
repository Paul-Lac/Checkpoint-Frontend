import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES_QUERY = gql`
  query GetAllCountries {
    countries {
      id
      name
      code
      emoji
    }
  }
`;

export const GET_COUNTRY_BY_CODE = gql`
  query GetCountryByCode($code: String!) {
    country(code: $code) {
      id
      name
      emoji
      code
      continent {
        id
        name
      }
    }
  }
`;

export const ADD_COUNTRY = gql`
  mutation AddCountry($code: String!, $emoji: String!, $name: String!) {
    addCountry(data: { code: $code, emoji: $emoji, name: $name }) {
      code
      emoji
      name
    }
  }
`;
