const { GraphQLObjectType, GraphQLString } = require("graphql");

const ChildType = new GraphQLObjectType({
  name: "Child",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    photo: { type: GraphQLString }
  }
});

module.exports = ChildType;
