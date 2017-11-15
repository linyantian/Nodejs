/**
 * Created by web-01 on 2017/11/14.
 */
/*pool: ³ØÌÁ ³Ø»¯¼¼Êõ */

const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit:10,
    user:'root'
});

pool.getConnection((err,connection)=>{
    if(err) throw err;
    let uname='tom';                 //"' or 'a'='a";
    let upwd='123';//SQL Injection   //"' or 'a'='a";
    let sql="SELECT * FROM xuezi.user WHERE uname="+"' or 'a'='a"+" AND upwd="+"' or 'a'='a";
    console.log(sql);
    //connection.query(sql,(err,results,fields)=>{
    //    if(err) throw err;
    //    console.log(results);
    //});
    //connection.release();
});