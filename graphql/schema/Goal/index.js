const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} = require("graphql");
const { GoalType } = require("../../types");
const { GoalModel } = require("../../../server/config/db/");

const goals = {
  type: GraphQLList(GoalType),
  resolve: (root, args, context, info) => {
    return GoalModel.find().exec();
  }
};

const goal = {
  type: GoalType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) }
  },
  resolve: (root, args, context, info) => {
    return GoalModel.findById(args.id).exec();
  }
};

const addGoal = {
  type: GoalType,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLNonNull(GraphQLString) },
    child: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLInt) },
    progress: { type: GraphQLNonNull(GraphQLInt) }
  },
  resolve: (root, args, context, info) => {
    const goal = new GoalModel(args);
    return goal.save();
  }
};

const updateGoal = {
  type: GoalType,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLNonNull(GraphQLString) },
    child: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLInt) },
    progress: { type: GraphQLNonNull(GraphQLInt) }
  },
  resolve: async (root, args) => {
    const updatedGoal = await GoalModel.findOneAndUpdate(args.id, args);
    if (!updatedGoal) {
      throw new Error("Error");
    }
    return updatedGoal;
  }
};

const deleteGoal = {
  type: GoalType,
  args: {
    id: { type: GraphQLString }
  },
  resolve: async (root, args) => {
    const deletedGoal = await GoalModel.findByIdAndRemove(args.id);
    if (!deletedGoal) throw new Error("Couldn't delete goal");
    return deletedGoal;
  }
};

const goalSchemas = { goals, goal, addGoal, updateGoal, deleteGoal };

module.exports = goalSchemas;
