const http = require('http');
const fs = require('fs');
const lodash = require('lodash');

const server = http.createServer((req,res)=>{
    // console.log(req.url,"\n",req.method); 
    const num = lodash.random(1,6);
    console.log(num);
    res.setHeader('Content-type','text/html');
    let url = "./html/";
    switch(req.url){
        case '/' :{
            url+='index.html';
            res.statusCode=200;
            break;
        }
        case '/index.html' :{
            res.setHeader('Location','/');
            res.statusCode=301;
            res.end();
            break;
        }
        case '/about' :{
            url+='about.html';
            res.statusCode=200;
            break;
        }
        case '/about-me' :{
            res.setHeader('Location','/about');
            res.statusCode=301;
            res.end();
            break;
        }
        default : {
            url+='404.html';
            res.statusCode=404;
            break;
        }
    }
    // res.write("<h1>Manav is cool!!</h1>");
    fs.readFile(url,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
         }
         res.write(data);
         res.end();
    });
    
});

server.listen(3000,'localhost',()=>{
    console.log("listening on port 3000...");
});
