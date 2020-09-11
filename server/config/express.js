import express from 'express';
import path from 'path';
import config from './config';
import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet'; // for securing server routes
import routes from '../routes';

//get app
const app=express(); 

//logger
if(config.env==='development'){
  app.use(logger('dev'));
}

//secure apps http
app.use(helmet());

//allow cors
app.use(cors());


//api routes
app.use('/api/',routes)



export default app;
