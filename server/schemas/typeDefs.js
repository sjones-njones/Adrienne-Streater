const typeDefs = `
  type Book {
    _id: ID!
    name: String!
    description: String!
    image: String!
    price: Float
  }
     type SupportEvent {
    _id: ID!
    state: String!
    city: String!
    event: String!
    description: String
     image: String
    image2: String
    image3: String
  }
 
  type List {
    _id: ID!
    email: String!
  }

  type Blog {
    _id: ID!
    blogURL: String!
    description: String!
    image: String!
  }

  type Video {
    _id: ID!
    videoId: String!
    description: String!
    image: String!
  }

    type Query {
      lists: [List]!
      list(email: String!): List
    books: [Book]!
    blogs: [Blog]!
    videos: [Video]!
    book(bookId: ID!): Book
    blog(blogId: ID!): Blog
    video(videoId: ID!): Video
 supportEvents: [SupportEvent]!
   supportEvent(supportEventId: ID!): SupportEvent



  }

  type Mutation {
    addToList(email: String!): List
    removeFromList(email: String!): List
    addBook(name: String!, description: String!, price: Int!, image: String!): Book
    addSupportEvent(state: String!, city: String!, event: String!, description: String, image: String, image2: String, image3: String): SupportEvent
    removeSupportEvent(supportEventId: ID!): SupportEvent
    addBlog(blogURL: String!, description: String!, image: String!): Blog
    addVideo(videoId: String!, description: String!, image: String!): Video
    removeBook(bookId: ID!): Book
    removeBlog(blogId: ID!): Blog
    removeVideo(videoId: ID!): Video
      }
`;

module.exports = typeDefs;