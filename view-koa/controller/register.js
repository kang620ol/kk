module.exports = {
  
  register: async(ctx, next) => {
    const { app } = ctx
    let params = ctx.request.body
    let name = params.name
    let password = params.password
    let res = await app.service.home.register(name,password)
    if(res.status == "-1"){
      await ctx.render("home/login", res.data)
    }else{
      ctx.state.title = "欢迎来到个人中心"
      await ctx.render("home/success", res.data)
    }
  }
}