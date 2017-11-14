let start = Date.now();
setTimeout(()=>{
    //计算一下实际延迟时间毫秒数？

    console.log(Date.now()-start);
},1000)

let m3 = require('./ml');
m3.square(100);

let m4 = require('./m4');
console.log(m4.str);
