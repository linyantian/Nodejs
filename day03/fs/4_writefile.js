/**
 * Created by web-01 on 2017/11/14.
 */

const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname,'test.txt'),'data...',(err)=>{
    if(err) throw err;
});