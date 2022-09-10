const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();

const schema = require("./Schema");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true,
  })
);

app.listen(5000, () =>
  console.log("apollo graphql express server running\nhttp://localhost:5000")
);
