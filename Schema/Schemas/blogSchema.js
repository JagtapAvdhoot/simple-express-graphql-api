const { GraphQLList, GraphQLString, GraphQLInt } = require("graphql");
const Blog = require('../../data/Blog');
const {  BlogType } = require("../Types/TypeDefs");

const blogSchema = () => ({
  blog: {
    type: new GraphQLList(BlogType),
    description: "single blog",
    args: {
      id: { type: GraphQLInt },
    },
    resolve: (parent, args) => Blog.filter((usr) => usr._id === args.id),
  },
  blogs: {
    type: new GraphQLList(BlogType),
    description: "all blogs",
    resolve: () => Blog,
  },
});

module.exports = blogSchema;
