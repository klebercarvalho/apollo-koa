const { gql } = require('apollo-server-koa');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

export default typeDefs;
