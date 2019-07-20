const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} = require("graphql");
const { ChoreType } = require("../../types");
const { ChoreModel } = require("../../../server/config/db/");

const chores = {
  type: GraphQLList(ChoreType),
  resolve: (root, args, context, info) => {
    return ChoreModel.find().exec();
  }
};

const chore = {
  type: ChoreType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) }
  },
  resolve: (root, args, context, info) => {
    return ChoreModel.findById(args.id).exec();
  }
};

const addChore = {
  type: ChoreType,
  args: {
    id: { type: GraphQLString },
    index: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    value: { type: GraphQLNonNull(GraphQLInt) }
  },
  resolve: (root, args, context, info) => {
    const chore = new ChoreModel(args);
    return chore.save();
  }
};

const updateChore = {
  type: ChoreType,
  args: {
    id: { type: GraphQLString },
    index: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    value: { type: GraphQLNonNull(GraphQLInt) }
  },
  resolve: async (root, args) => {
    const updatedChore = await ChoreModel.findOneAndUpdate(args.id, args);
    if (!updatedChore) {
      throw new Error("Error");
    }
    return updatedChore;
  }
};

const deleteChore = {
  type: ChoreType,
  args: {
    id: { type: GraphQLString }
  },
  resolve: async (root, args) => {
    const deletedChore = await ChoreModel.findByIdAndRemove(args.id);
    if (!deletedChore) throw new Error("Couldn't delete chore");
    return deletedChore;
  }
};

const choreSchemas = { chores, chore, addChore, updateChore, deleteChore };

module.exports = choreSchemas;
