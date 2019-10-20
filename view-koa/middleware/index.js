const path = require('path')
const bodyParser = require('koa-bodyparser');

//const controller = require('../controller');
const nunjucks = require('koa-nunjucks-2')

const templating = require('../templating');

// 引入规则中件间
const miRule = require('./mi-rule')


module.exports = (app) => {
    const isProduction = process.env.NODE_ENV === 'production';
    // log request URL:
    app.use(async (ctx, next) => {
        console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
        var
            start = new Date().getTime(),
            execTime;
        await next();
        execTime = new Date().getTime() - start;
        ctx.response.set('X-Response-Time', `${execTime}ms`);
    });

    // static file support:
console.log("111222")
    if (! isProduction) {
        let staticFiles = require('./static-files');
        app.use(staticFiles('/static/',path.resolve(__dirname, "../static")));
        app.use(staticFiles('/public/',path.resolve(__dirname, "../public")));
    }

    app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, '../views'),
    nunjucksConfig: {
      trimBlocks: true
    }
  }));

    // parse request body:
    app.use(bodyParser());

    miRule({
        app,
        rules: [
          {
            path: path.join(__dirname, '../controller'),
            name: 'controller'
          },
          {
            path: path.join(__dirname, '../service'),
            name: 'service'
          }
        ]
      })    

    // add nunjucks as view:
    app.use(templating('views', {
        noCache: !isProduction,
        watch: !isProduction
    }));    
    //app.use(controller());
}

