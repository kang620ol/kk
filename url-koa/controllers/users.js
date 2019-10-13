var fn_user = async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>用户, ${name}!</h1>`;
};

module.exports = {
    'GET /user/:name': fn_user
};