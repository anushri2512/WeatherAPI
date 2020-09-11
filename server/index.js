import app from './config/express';
import config from './config/config';

//initialize sql
//require('./config/sql');

//listen on  port
app.listen(config.port,()=>{
  console.log(`Server started at port${config.port}`)
})
