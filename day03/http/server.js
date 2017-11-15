/**
 * Created by web-01 on 2017/11/14.
 */

const http = require('http');

//创建server
let server = http.createServer();

server.on('request',(req,res)=>{
    //console.log(req.url);
    //console.log(req.httpVersion);
    //console.log(req.headers);
    //res.write('ok...');
    res.writeHead(200,'OK',{'Content-type':'text/html;charset=UTF-8'});
    res.end('测试中文');
});

server.listen(80);