const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const { goals, goal, addGoal, updateGoal, deleteGoal } = require("./Goal");
const {
  chores,
  chore,
  addChore,
  updateChore,
  deleteChore
} = require("./Chore");

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      goals,
      goal,
      chores,
      chore
    }
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: {
      addGoal,
      updateGoal,
      deleteGoal,
      addChore,
      updateChore,
      deleteChore
    }
  })
});

module.exports = schema;
