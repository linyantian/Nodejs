/**
 * Created by web-01 on 2017/11/14.
 */
const fs = require('fs');

//let data = fs.readFileSync(__filename);//同步读取文件
//console.log(data.toString());

fs.readFile(__filename,(err,data)=>{//异步读取文件
    if(err) throw err;
    console.log(data.toString());
});

console.log('end');