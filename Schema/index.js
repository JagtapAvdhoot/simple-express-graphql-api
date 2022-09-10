const {
  GraphQLSchema,
  GraphQLObjectType,
} = require("graphql");
const blogSchema = require('./Schemas/blogSchema');
const userSchema = require('./Schemas/userSchema');

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  description: "root query of user",
  fields: () => ({
    ...userSchema(),
    ...blogSchema()
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = schema;
