const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const { goals, goal, addGoal, updateGoal, deleteGoal } = require("./Goal");
const {
  chores,
  chore,
  addChore,
  updateChore,
  deleteChore
} = require("./Chore");
const { users, user, addUser, updateUser, deleteUser } = require("./User");

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      goals,
      goal,
      chores,
      chore,
      users,
      user
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
      deleteChore,
      addUser,
      updateUser,
      deleteUser
    }
  })
});

module.exports = schema;
