const express = require('express');
var { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

require('dotenv').config();
const port = process.env.PORT || 5000;

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
    graphiql: process.env.NODE_ENV === 'development',
  })
);
app.listen(port, console.log(`Server started on port ${port}`));
