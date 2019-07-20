const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} = require("graphql");

const { UserType } = require("../../types");
const { UserModel } = require("../../../server/config/db/");

const users = {
  type: GraphQLList(UserType),
  resolve: (root, args, context, info) => {
    return UserModel.find().exec();
  }
};

const user = {
  type: UserType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) }
  },
  resolve: (root, args, context, info) => {
    return UserModel.findById(args.id).exec();
  }
};

const addUser = {
  type: UserType,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLNonNull(GraphQLString) },
    passwordDigest: { type: GraphQLNonNull(GraphQLString) }
  },
  resolve: (root, args, context, info) => {
    const user = new UserModel(args);
    return user.save();
  }
};

const updateUser = {
  type: UserType,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLNonNull(GraphQLString) },
    passwordDigest: { type: GraphQLNonNull(GraphQLString) }
  },
  resolve: async (root, args) => {
    const updatedUser = await UserModel.findOneAndUpdate(args.id, args);
    if (!updatedUser) throw new Error("Error");
    return updatedUser;
  }
};

const deleteUser = {
  type: UserType,
  args: {
    id: { type: GraphQLString }
  },
  resolve: (root, args) => {
    const deletedUser = UserModel.findByIdAndRemove(args.id);
    if (!deletedUser) throw new Error("Couldn't delete user");
    return deletedUser;
  }
};

const userSchemas = { users, user, addUser, updateUser, deleteUser };

module.exports = userSchemas;
