let start = Date.now();
setTimeout(()=>{
    //����һ��ʵ���ӳ�ʱ���������

    console.log(Date.now()-start);
},1000)

let m3 = require('./ml');
m3.square(100);

let m4 = require('./m4');
console.log(m4.str);
