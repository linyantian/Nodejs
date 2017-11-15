/**
 * Created by web-01 on 2017/11/14.
 */

const fs = require('fs');

fs.stat(__filename,(err,stat)=>{ //¶ÁÈ¡×´Ì¬
    if(err) throw err;
    console.log(stat.isFile());
});