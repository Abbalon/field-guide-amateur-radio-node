export const userTypeDefs = `
  type User {
    id: ID!
    username: String!
    email: String!
    articles: [Article!]
    createdAt: String
    updatedAt: String
  }

  extend type Query {
    allUsers: [User!]!
    findUser(id: ID!): User
  }

  extend type Mutation {
    createUser(username: String!, email: String!): User
  }
`;