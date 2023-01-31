const express = require('express')

const contactRouter = express.Router()

const ContactSchema= require('../model/contact')


contactRouter.get('/getuser',async(req,res)=>{
    try{
        const contc = await ContactSchema.find()
        res.status(200).json({msg:'this is ur user list',contc})
    }catch(err){
        console.log(err)
    }
})


contactRouter.post('/adduser',async(req,res)=>{
    try{
   const newContact = new ContactSchema(req.body)
   await  newContact.save()
     res.status(200).json({msg:'you could add ur new contact',newContact})
    }catch(err){
        console.log(err)
    }
})

contactRouter.put('/updateuser/:id',async(req,res)=>{
    try{
const {id}=req.params
const updateuser = await  ContactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
res.status(200).json({msg:"you could update me",updateuser})
    }catch(err){
        console.log(err)
    }
})

contactRouter.delete('/deleteuser/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const deletcont = await ContactSchema.findByIdAndDelete(id)
        res.status(200).json({msg:'you deleted that user'})
    }catch(err){
        console.log(err)
    }
})

contactRouter.get('/getuser/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const getuniqueuser = await ContactSchema.findById(id)
        res.status(200).json({msg:'you found that user',getuniqueuser})
    }catch(err){
        console.log(err)
    }
})




module.exports= contactRouter