import express from 'express';
import expressGraphQL from 'express-graphql';
//import schema from './schemas/schema.js';

import _schema from "./graphql";

import {ConnectDatabase} from "./database/connection.js";

const conn = ConnectDatabase();
const app = express();
const port = 5600;

app.use('/graphql',expressGraphQL({

      schema:_schema,
      graphiql:true

}));

app.listen(port, ()=>{
      console.log("Run barry Runnn ",port)
});
