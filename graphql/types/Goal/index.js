const { GraphQLObjectType, GraphQLString } = require("graphql");

const GoalType = new GraphQLObjectType({
  name: "Goal",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    child: { type: GraphQLString },
    price: { type: GraphQLString },
    progress: { type: GraphQLString }
  }
});

module.exports = GoalType;
