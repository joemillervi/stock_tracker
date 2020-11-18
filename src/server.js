const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
 
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello(inputStr: String): String
  }
`);
 
// The root provides a resolver function for each API endpoint
const root = {
  hello: ({inputStr}) => {
    return inputStr + ' << this is what u put'
  },
};
 
const app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))
app.listen(4000)

console.log('Running a GraphQL API server at http://localhost:4000/graphql')
