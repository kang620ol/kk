// hello:
module.exports = {
    hello: async(ctx, next) => {
        //console.log("doing hello"+JSON.stringify(ctx));
        await ctx.render('home/hello.html', {
        btnName: 'hello'
        })
    },
}