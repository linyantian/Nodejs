/**
 * Created by web-01 on 2017/11/4.
 */

const os = require('os'); // operating system
let start = os.uptime();
//..
console.log(os.uptime() - start);

//console.log( process.arch );     //��ȡCPU�ܹ�����
//process.kill(process.pid);
//console.log( process.platform);  //��ȡ����ϵͳ����

//console.log(process.env);       //��ȡ����ϵͳ��������
//console.log(process.cwd());   //current working directory
//console.log(process.execPath);
//console.log(process.versions);
//console.log(process.uptime());
//console.log(process.memoryUsage());
//console.log(process.pid);
