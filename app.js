const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const app=express()
const PORT=3000

app.use(bodyParser.json())

//Root route
app.get('/',(req,res)=>{
    res.send('Wlcome to the Blogging Platform API')
})

//Import route
const blogRoutes=require("./routes/blogRoutes")
const authorRoutes=require('./routes/authorRoutes')
const logger=require('./middleware/logger')
app.use('/blog',blogRoutes)
app.use('/authors',authorRoutes)
app.use(logger)
//connect to MongoDB

mongoose.connect('mongodb://localhost:27017/blogging_platform',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('MongoDB connected'))
.catch((err)=>console.log('Connection error:',err))


app.listen(PORT,()=>{
    console.log(`Server is running pn http://localhost:${PORT}`)
    
})