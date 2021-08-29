const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogschema = new schema({
    title : {
        type:String,
        required:true
    },
    content : {
        type:String,
        required:true
    }
},{timestamps:true});

const blog = mongoose.model('Blog',blogschema);
module.exports = blog;