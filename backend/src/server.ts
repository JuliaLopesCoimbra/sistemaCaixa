//coloquei o server.ts para rodar quando eu dou yarn dev lá no json,
//"scripts":{
 //   "dev":"ts-node-dev src/server.ts"
  //},


import express, {Request, Response, NextFunction} from 'express';
import { router } from './routes';

//serve para oferecer os errors
import 'express-async-errors'


//serve para 
import cors from 'cors';

const app = express();

//usando arquivo json
app.use(express.json())

app.use(cors())


//inicializando com as rotas
app.use(router);

//tipando as siglas
app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
  if(err instanceof Error){
    //se for uma instancia do tipo error
    return res.status(400).json({
      error:err.message
    })
  }
  return res.status(500).json({
    status:'error',
    message:'Internal server error'
  })
})

//inicializando o projeto na porta localhost:3333, toda vez que rodar o projeto mostrar o console
app.listen(3333, () => console.log("Servidor da Adriana online"))