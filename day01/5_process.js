/**
 * Created by web-01 on 2017/11/4.
 */

const os = require('os'); // operating system
let start = os.uptime();
//..
console.log(os.uptime() - start);

//console.log( process.arch );     //获取CPU架构类型
//process.kill(process.pid);
//console.log( process.platform);  //获取操作系统类型

//console.log(process.env);       //获取惭怍系统环境变量
//console.log(process.cwd());   //current working directory
//console.log(process.execPath);
//console.log(process.versions);
//console.log(process.uptime());
//console.log(process.memoryUsage());
//console.log(process.pid);
