/**
 * Created by web-01 on 2017/11/14.
 */
const fs = require('fs');

//let data = fs.readFileSync(__filename);//ͬ����ȡ�ļ�
//console.log(data.toString());

fs.readFile(__filename,(err,data)=>{//�첽��ȡ�ļ�
    if(err) throw err;
    console.log(data.toString());
});

console.log('end');