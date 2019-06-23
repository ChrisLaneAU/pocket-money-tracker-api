const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

const ChoreType = new GraphQLObjectType({
  name: "Chore",
  fields: {
    id: { type: GraphQLString },
    index: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    value: { type: GraphQLInt }
  }
});

module.exports = ChoreType;
