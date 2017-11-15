/**
 * Created by web-01 on 2017/11/14.
 */

const cp = require('child_process');

cp.exec('mysql -uroot <'+'/scott.sql',(err)=>{
    if(err) throw err;
});