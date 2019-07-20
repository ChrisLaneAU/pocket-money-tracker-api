const { GraphQLObjectType, GraphQLString } = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    passwordDigest: { type: GraphQLString }
  }
});

module.exports = UserType;
