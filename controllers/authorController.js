const Author=require('../models/Author')
const Blog=require('../models/Blog')

exports.createAuthor=async(req,res)=>{
    try {
        const newAuthor=new Author(req.body)
        await newAuthor.save()
        res.status(201).json(newAuthor)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getAllAuthors=async (req,res)=>{
    try {
        const authors=await Author.find()
        res.json(authors)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getPostByAuthors=async (req,res)=>{
    try {
        const posts=await Blog.find({author:req.params.name})
        res.json(posts)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}