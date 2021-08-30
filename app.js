const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

const dbURI = 'mongodb+srv://Manav:Manav123@cluster0.iyrwv.mongodb.net/my-node-app?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{
    console.log('\n connected to db');
    const server = app.listen(3000);
})
.catch((err)=>{
    console.log('\n',err);
})

app.set('view engine','ejs');

app.use(morgan('dev'));

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

app.get('/all-blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
});

app.get('/create-blog',(req,res)=>{
    const blog = new Blog({
        title: 'New blog',
        content:'Hello world this is manav'
    })
    blog.save()
    .then((results)=>{
        res.send(results);
    })
    .catch((err)=>{
        console.log(err);
    })
});

app.use((req,res)=>{
    res.status(404).render('404');
});