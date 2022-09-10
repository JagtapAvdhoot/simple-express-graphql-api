const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require("graphql");

exports.UserType = new GraphQLObjectType({
  name: "User",
  description: "user description",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

exports.BlogType = new GraphQLObjectType({
  name: "Blog",
  description: "blog description",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    blog: { type: new GraphQLNonNull(GraphQLString) },
  }),
});