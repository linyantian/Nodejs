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
    let sql='select e.ename AS Ա������, d.dname AS �������� from scott.emp e inner join scott.dept d ON ';
    connection.query(sql,(err,result,fields)=>{
        if(err) throw err;
        console.log(result);
    });
});