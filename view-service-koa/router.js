const router = require('koa-router')()

module.exports = (app) => {
  router.get( '/', app.controller.home.index )
  
  router.get('/home', app.controller.home.home)
  
  router.get('/home/:id/:name', app.controller.home.homeParams)
  
  router.get('/user', app.controller.home.login)

  router.get('/hello', app.controller.hello.hello)
  
  router.post('/user/register', app.controller.register.register)

  router.post('/getData', app.controller.getData.getData)


  
  app.use(router.routes())
     .use(router.allowedMethods())
}