const { GraphQLError } = require("graphql");
const { Book, Blog, Video, List, SupportEvent } = require("../models");

const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },
    book: async (_, { bookId }) => {
      return Book.findOne({ _id: bookId });
    },
    blogs: async () => Blog.find({}),
    blog: async (_, { blogId }) => {
      return Blog.findOne({ _id: blogId });
    },
    videos: async () => {
      return Video.find({});
    },

    video: async (_, { videoId }) => {
      return Video.findOne({ _id: videoId });
    },

    lists: async () => {
      return List.find({});
    },

    list: async (_, { email }) => {
      return List.findOne({ email: email });
    },
    supportEvents: async () => {
      return SupportEvent.find({});
    },
    supportEvent: async (_, { supportEventId }) => {
      return SupportEvent.findOne({ _id: supportEventId });
    },
  },
  Mutation: {
    addToList: async (_, args) => {
      const list = await List.create(args);
      return list;
    },

    addSupportEvent: async (_, args) => {
      const supportEvent = await SupportEvent.create(args);
      return supportEvent;
    },
    removeSupportEvent: async (_, { supportEventId }) => {
      return SupportEvent.findOneAndDelete({ _id: supportEventId });
    },
    removeFromList: async (_, { email }) => {
      return List.findOneAndDelete({ email: email });
    },
    addBook: async (_, args) => {
      const book = await Book.create(args);
      return book;
    },
    removeBook: async (_, { bookId }) => {
      return Book.findOneAndDelete({ _id: bookId });
    },
    addBlog: async (_, args) => {
      const blog = await Blog.create(args);
      return blog;
    },
    removeBlog: async (_, { blogId }) => {
      return Blog.findOneAndDelete({ _id: blogId });
    },
    addVideo: async (_, args) => {
      const video = await Video.create(args);
      return video;
    },
    removeVideo: async (_, { videoId }) => {
      return Video.findOneAndDelete({ _id: videoId });
    }
  }
};


module.exports = resolvers;