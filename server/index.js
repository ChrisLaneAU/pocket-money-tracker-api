const express = require("express");
const cors = require("cors");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("../graphql/schema");
const keys = require("../config/keys/keys");

const PORT = process.env.PORT || 3001;

const app = express();

mongoose.connect(
  keys.mongoURI,
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
