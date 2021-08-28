const express = require('express');
const app = express();
 
const server = app.listen(3000);

app.get('/',(req,res)=>{
    // res.send('<h1>Home</h1>');
    res.sendFile('./index.html', {root: __dirname});
});
app.get('/about',(req,res)=>{
    // res.send('<h1>About</h1>');
    res.sendFile('./about.html', {root: __dirname});
});
app.use((req,res)=>{
    res.status(404).sendFile('./404.html', {root: __dirname});
});