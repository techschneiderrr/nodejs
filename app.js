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
app.get('/blog',(req,res)=>{
    const blog = [
        {title:'Why is manav so great?', content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},

        {title:'Why is divya so ok?', content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "},

        {title:'Why is khanna not so great?', content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "}
    ];
    res.render('blog',{blog});
});

app.use((req,res)=>{
    res.status(404).render('404');
});