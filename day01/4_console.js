/**
 * Created by web-01 on 2017/11/10.
 */
//const Console = require('console').Console;
const fs = require('fs');

let out = fs.createWriteStream('out.log');
let err = fs.createWriteStream('err.log');
//method1: ��global�е�console�������Console�����Բ���Ҫ����console
let logger = new console.Console(out,err);
//method2: ������console
//let logger = new Console(out,err);

logger.log('logger log new...');
logger.error('logger error...');

console.log('asdf');




//�Զ����ݼ�
//webstorm - file - settings  search 'live template'  javascript
//1.cl   2.console.log  3.console.log($END$)  4.select  'Javascript'
