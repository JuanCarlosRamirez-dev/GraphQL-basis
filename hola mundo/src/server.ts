import express from 'express';
import compression from 'compression';
const { graphqlHTTP } = require('express-graphql');
import schema from "./schema/index";
//import cors from 'cors';

const app = express();

//app.use('*', cors());

app.use(compression());

app.use('/', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = 8080;

app.listen(
    {port: PORT},
    ()=>console.log(`Listening on port: http://localhost:${PORT}/graphql`)
);

