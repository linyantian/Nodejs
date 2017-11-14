console.log('start...');//1

//setTimeout(()=>{
//    console.log('set timeout...');
//},1000);

setImmediate(()=>{
    console.log('set immediate...');
});

console.log('end...');//3
