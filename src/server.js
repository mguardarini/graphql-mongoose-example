import express from 'express';
import expressGraphQL from 'express-graphql';
import jwt from 'jsonwebtoken';
import _schema from "./graphql";
import {ConnectDatabase} from "./database/connection.js";

const conn = ConnectDatabase();
const app = express();
const port = 5600;

app.use('/graphql',expressGraphQL({

      schema:_schema,
      graphiql:true

}));

app.get ('/api/protected', ensureToken, (req,res)=>{
  jwt.verify(req.token, 'my_secret_key', (err,req,res)=>{
    if(err){
      res.sendStatus(403);
    }
    else{
      res.json({
        text:"this is protected",
        data:data
      })
    }
  })
});

app.post('/mauro', (req, res) => {

        const user = {id:3};
        const token = jwt.sign({user},'my_secret_key')
        res.json({
          token:token
        })
});

function ensureToken(req,res,next)
{
  const bearerHeader = req.headers["authorization"];
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  }
  else{
    res.sendStatus(403);
  }
}

app.listen(port, ()=>{
      console.log("Run barry Runnn ",port)
});
