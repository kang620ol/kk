var mysql = require('mysql');
var allServices = require('../config/mysqlConfig');


let userServices = {

   findUserData: function (phone) {
        let _sql = `select nickname,phone,province,city from pigcms_user where (phone="${phone}");`
        return allServices.query(_sql)
    },
    addUserData: (obj) => {
         let _sql = "insert into users set name=?,pass=?,avator=?,moment=?;"
         return allServices.query(_sql, obj)
     },
}

module.exports = userServices;