export const commentTypeDefs = `
  type Comment {
    id: ID!
    content: String!
    author: User!
    article: Article!
    createdAt: String
    updatedAt: String
  }

  extend type Mutation {
    createComment(content: String!, authorId: ID!, articleId: ID!): Comment
  }
`;