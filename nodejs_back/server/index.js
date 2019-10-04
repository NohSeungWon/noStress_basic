import './common/env';
import Server from './common/server';
import routes from './routes';

export default new Server()
  .router(routes)
  .listen(process.env.PORT);


  // 아래와 같은상황
  // app.use('/', conrtoler);
  // app.listen(3000, () => {console.log('open success')})