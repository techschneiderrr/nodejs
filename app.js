const express = require('express');
const app = express();
 
const server = app.listen(3000);

app.set('view engine','ejs');


app.get('/',(req,res)=>{
    // res.send('<h1>Home</h1>');
    // res.sendFile('./html/index.html', {root: __dirname});
    res.render('index');
});
app.get('/about',(req,res)=>{
    // res.send('<h1>About</h1>');
    res.render('about');
});
app.use((req,res)=>{
    res.status(404).render('404');
});