const fs = require('fs');
//read
fs.readFile('./docs/hello.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
        console.log(data.toString());
});

fs.writeFile('./docs/hello.txt','Hello world',()=>{
    console.log('File was written');
});