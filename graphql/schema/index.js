const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const { goals, goal, addGoal, updateGoal, deleteGoal } = require("./Goal");

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      goals,
      goal
    }
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: {
      addGoal,
      updateGoal,
      deleteGoal
    }
  })
});

module.exports = schema;
