/**
 * Created by web-01 on 2017/11/10.
 */

//buffer ������

let buff1 = new Buffer(2);//�ֽ�byte λ bit  1byte=8bits
console.log(buff1);  // 00 = 8bits

let buff2 = new Buffer([65,66,67]);//ʮ����ת��ʮ������
console.log(buff2);

let buff3 = new Buffer('ABCa');//unicode��ת��
console.log(buff3);

let buff4 = Buffer.allocUnsafe(16);//����ȫ��
console.log(buff4);
