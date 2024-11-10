const express=require('express')
const router=express.Router()
const authorController=require('../controllers/authorController')

router.post('/',authorController.createAuthor)
router.get('/',authorController.getAllAuthors)
router.get('/posts/:name',authorController.getPostByAuthors)

module.exports=router