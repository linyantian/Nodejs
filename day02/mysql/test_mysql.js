/**
 * Created by web-01 on 2017/11/14.
 */
const mysql = require('mysql');

let connection=mysql.createConnection({
    user:'root'
});

connection.connect((err)=>{
    if(err) throw err;
    console.log(connection.threadId);
});


connection.query('SELECT * FROM xuezi.user',(err,results,fields)=>{
    if(err) throw err;
    console.log(results);
});
