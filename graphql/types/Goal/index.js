const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

const GoalType = new GraphQLObjectType({
  name: "Goal",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    child: { type: GraphQLString },
    price: { type: GraphQLInt },
    progress: { type: GraphQLInt }
  }
});

module.exports = GoalType;
