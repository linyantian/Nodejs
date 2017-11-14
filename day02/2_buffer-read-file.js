const fs = require('fs');

//console.log(__dirname);
//console.log(__filename);

fs.readFile(__filename,(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
});


