const Blog=require('../models/Blog')


//create a new blog post
exports.createBlog=async(req,res)=>{
    try {
        const newBlog=new Blog(req.body)
        await newBlog.save()
        res.status(201).json(newBlog)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//Retrieve all blog posts
exports.getAllBlogs=async(req,res)=>{
    try {
        const blogs=await Blog.find()
        res.json(blogs)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//Retrieve a single blog post by ID
exports.getBlogById=async(req,res)=>{
    try {
        const blog=await Blog.findById(req.params.id)
        if(!blog) return res.status(404).json({message:'Blog not found'})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//Update a blog post by ID
exports.updateBlog=async (req,res)=>{
    try {
        const updateBlog=await Blog.findByIdAndUpdate(req.params.id, req.body,{new:true})
        if(!updateBlog) return res.status(404).json({message:'Blog not found'})
            res.json(updateBlog)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//Delete a blog post by ID
exports.deleteBlog=async(req,res)=>{
    try {
        const deleteBlog=await Blog.findByIdAndDelete(req.params.id)
        if(!deleteBlog)return res.status(404).json({message:'Blog not found'})
            res.json({message:'Blog deleted successfully'})
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}