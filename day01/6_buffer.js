/**
 * Created by web-01 on 2017/11/10.
 */

//buffer 缓冲区

let buff1 = new Buffer(2);//字节byte 位 bit  1byte=8bits
console.log(buff1);  // 00 = 8bits

let buff2 = new Buffer([65,66,67]);//十进制转成十六进制
console.log(buff2);

let buff3 = new Buffer('ABCa');//unicode码转换
console.log(buff3);

let buff4 = Buffer.allocUnsafe(16);//不安全的
console.log(buff4);
