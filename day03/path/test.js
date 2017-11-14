/**
 * Created by web-01 on 2017/11/14.
 */

const path = require('path');

console.log(path.normalize('/test1//test2'));
console.log(path.join(__dirname,'../../test1/test2','test3/test4'));
console.log(path.resolve('./test.js'));//解析为绝对路径

console.log(path.isAbsolute(__filename));//是否是绝对路径
console.log(path.extname(__filename)); //extension name 扩展名