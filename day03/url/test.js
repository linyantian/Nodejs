/**
 * Created by web-01 on 2017/11/14.
 */
const url = require('url');

let string='http://www.it211.com.cn/web/index_new.html?tedu';

console.log(url.parse(string,true));
console.log(url.format(url.parse(string)));