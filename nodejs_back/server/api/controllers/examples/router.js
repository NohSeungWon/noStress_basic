import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.create)
  .get('/', (req, res)=> {res.send('11')})
  .get('/:id', controller.byId);
