/**
 * Created by web-01 on 2017/11/14.
 */
const http = require('http');
const fs = require('fs');


let options={
    host:'img.jandan.net',
    path:'/news/2017/09/cf114fae2a31b13bac5a13c5bce745df.jpg',
    headers:{'User-Agent':'Mozilla/5.0'}
}

let request = http.request(options,(res)=>{  //´ÓÍøÂçÉÏÏÂÔØÍ¼Æ¬
    console.log(res.statusCode);
    let data = '';
    res.setEncoding('binary');
    res.on('data',(buffer)=>{
        //console.log(buffer);
        data += buffer;

    });
    res.on('end',()=>{
        fs.writeFile('./jian.jpg',data,'binary',(err)=>{
            if(err) throw err;
            console.log('downloaded');
        });
    });
});

request.end();