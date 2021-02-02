import express from 'express';
import compression from 'compression';
import schema from "./schema/index";
import {ApolloServer} from "apollo-server-express";
import { createServer } from 'http';
//import cors from 'cors';

const app = express();

//app.use('*', cors());

app.use(compression());

const server = new ApolloServer({
    schema,
    introspection: true
})

server.applyMiddleware({app})

const PORT = 8080;

const httpServer = createServer(app)

httpServer.listen(
    {port: PORT},
    ()=>console.log(`Listening on port: http://localhost:${PORT}/graphql`)
);

