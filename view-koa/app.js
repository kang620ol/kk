const Koa = require('koa');

const router = require('./router')
//const controller = require('./controller');
const middleware = require('./middleware');
const app = new Koa();

middleware(app);
// add controller:

router(app)
app.listen(3000);
console.log('app started at port 3000...');