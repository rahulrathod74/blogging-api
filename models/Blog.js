const mongoose=require('mongoose')

const blogSchema=new mongoose.Schema({
    title:{type:String, required: true},
    contact:{typ:String, required: true},
    author:{type:String, required: true}
})

module.exports=mongoose.model('Blog',blogSchema)