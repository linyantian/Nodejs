/**
 * Created by web-01 on 2017/11/14.
 */
/**
 * Created by web-01 on 2017/11/14.
 */
const mysql = require('mysql');

let pool =mysql.createPool({
    connectionLimit:10,
    user:'root'
});

pool.getConnnection((err,connection)=>{
    if(err) throw err;
    let sql='INSERT INTO scott.test(username,password) VALUES ?';
    let data = [
        ['username1','password1'],
        ['username2','password2'],
        ['username3','password3']
    ];
    connection.query(sql,[data],(err,result,fields)=>{
        if(err) throw err;
        console.log(result);
    });
});