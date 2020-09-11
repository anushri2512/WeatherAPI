import {Router} from 'express';
import ctrl from './controllers/assignment';
//console.log("hello");
let routes = Router();

routes.get('/check-date', ctrl.isPrimeNumber);
routes.get('/prod', ()=>{
    console.log("hello");
});

export default routes;
 