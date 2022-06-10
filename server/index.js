const express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

require('dotenv').config();
const port = process.env.PORT || 5000;

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(port, console.log(`Server started on port ${port}`));
