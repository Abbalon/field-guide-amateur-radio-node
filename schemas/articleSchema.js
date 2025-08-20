export const articleTypeDefs = `
  type Article {
    id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment!]
    tags: [String!]
    createdAt: String
    updatedAt: String
  }

  extend type Query {
    allArticles: [Article!]!
    findArticle(id: ID!): Article
  }

  extend type Mutation {
    createArticle(title: String!, content: String!, authorId: ID!, tags: [String!]): Article
  }
`;