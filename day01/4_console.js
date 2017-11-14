/**
 * Created by web-01 on 2017/11/10.
 */
//const Console = require('console').Console;
const fs = require('fs');

let out = fs.createWriteStream('out.log');
let err = fs.createWriteStream('err.log');
//method1: 用global中的console对象调用Console，所以不需要引入console
let logger = new console.Console(out,err);
//method2: 先引入console
//let logger = new Console(out,err);

logger.log('logger log new...');
logger.error('logger error...');

console.log('asdf');




//自定义快捷键
//webstorm - file - settings  search 'live template'  javascript
//1.cl   2.console.log  3.console.log($END$)  4.select  'Javascript'
