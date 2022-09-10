const fs = require("fs");
const { GraphQLList, GraphQLString, GraphQLInt } = require("graphql");
const User = require("../../data/User");
const { UserType } = require("../Types/TypeDefs");

const userSchema = () => ({
  user: {
    type: new GraphQLList(UserType),
    description: "single users",
    args: {
      id: { type: GraphQLInt },
    },
    resolve: (parent, args) => User.filter((usr) => usr._id === args.id),
  },
  users: {
    type: new GraphQLList(UserType),
    description: "all users",
    resolve: () => User,
  },
});

module.exports = userSchema;
