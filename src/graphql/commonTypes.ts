import { gql } from 'apollo-server';

export const graphqlSchema = gql`
  scalar Date
  scalar DateTime

  type ThumbnailType {
    w200: String
    w400: String
    w600: String
  }
  """
  성공하면: message:null, fails:[].
  부분성공하면 혹은 실패시: message: 있음, fails:[실패한 주문 아이디]
  """
  type MultiOrderResponse {
    successIds: [ID!]!
    failedIds: [ID!]!
    error: String
  }
  """
  성공하면 에러가 없고 실패하면 에러가 있다.
  """
  type ErrorResponse {
    error: String
  }
`;
