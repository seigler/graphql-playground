const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv-safe').config();

const schema = require('./schema/schema');

const app = express();

mongoose.connect(process.env.connectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.connection.once('open', () => {
  console.log('Connected to database.');
});

app.use(cors({ origin: 'http://localhost:1234' }));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening on http://localhost:4000');
});
