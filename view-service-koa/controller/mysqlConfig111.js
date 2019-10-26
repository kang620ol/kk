var mysql = require('mysql');
var config = require('./defaultConfig');

var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});

let allServices = {
    query: function (sql, values) {

        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, values, (err, rows) => {

                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release()
                    })
                }
            })
        })

    },
   /*findUserData: function (phone) {
        let _sql = `select nickname,phone,province,city from pigcms_user where phone="${phone}";`
        return allServices.query(_sql)
    },
    addUserData: (obj) => {
         let _sql = "insert into users set name=?,pass=?,avator=?,moment=?;"
         return allServices.query(_sql, obj)
     },*/
}

module.exports = allServices;