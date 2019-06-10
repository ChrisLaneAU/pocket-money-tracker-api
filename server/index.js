require("dotenv").config();
const express = require("express");
const cors = require("cors");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("../graphql/schema");

const PORT = process.env.PORT || 3001;
const { mongoURI: db } = process.env;

const app = express();

mongoose.connect(
  db,
  { useNewUrlParser: true }
);

app.use(cors());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
