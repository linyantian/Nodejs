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
    let sql='insert into scott.test values(null,?,?)';
    connection.query(sql,['tom','123'],(err,result,fields)=>{
        if(err) throw err;
        console.log(result.affectedRows);
        console.log(result.insertId);
    });
});