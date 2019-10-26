module.exports = {
  index: async(ctx, next) => {
        console.log("jinru")
        //ctx.response.body = '<h1>Index page</h1>'
        await ctx.render("home/index.html", {title: "iKcamp欢迎您"})
  },
  home: async(ctx, next) => {
    console.log(ctx.request.query)
    console.log(ctx.request.querystring)
    ctx.response.body = '<h1>HOME page</h1>'
  },
  homeParams: async(ctx, next) => {
    console.log(ctx.params)
    ctx.response.body = '<h1>HOME page /:id/:name</h1>'
  },
  login: async(ctx, next) => {
    await ctx.render('home/login', {
      btnName: 'GoGoGo'
    })
  },
  
}