let buffer = Buffer.from([1,2,3]);

//method1: length
for(let i = 0;i<buffer.length;i++){
    console.log(buffer[i]);
}

//method2: for...of
for(let v of buffer){
    console.log(v);
}

//method3: keys()
for(let k of buffer.keys()){
    console.log(k + '=>' + buffer[k]);
}

//method4: values()
for(let v of buffer.values()){
    console.log(v);
}

//method5: entry -> entries()
for(let pair of buffer.entries()){
    console.log(pair);
}
