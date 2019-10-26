// hello:
const userService = require('../service/dal/user');
module.exports = {
    getData: async(ctx, next) => {
        //获取post传递过来的数据
        console.log("doing hello"+JSON.stringify(ctx.request.body));

        var arr = [];
        arr.push(ctx.request.body.phone);
        //操作数据库
        await userService.findUserData(arr).then((data) => {
        console.log("finddata:"+JSON.stringify(data))
        //返回前端的数据
        ctx.body=data;
        })


    },
}