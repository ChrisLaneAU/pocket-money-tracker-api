const express = require("express");
const cors = require("cors");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema
} = require("graphql");

const app = express();

app.use(cors());

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true
  })
);

app.listen(3001, () => {
  console.log("Listening at http://localhost:3001");
});
