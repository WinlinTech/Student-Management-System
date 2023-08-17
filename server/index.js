const express = require("express")

const mongoose = require('mongoose')
const cors = require("cors")
const StudentModel = require('./Models/Students')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Authentication")

app.post('/login', (req,res) => {
    const {email,password} = req.body;
    StudentModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
    
            }   else{
                res.json("The Password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
        
    })
})

app.post('/register', (req,res)=>{
    StudentModel.create(req.body)
    .then(students=> res.json(students))
    .catch(err=> res.json(err))
} )


app.listen(3001, ()=> {
    console.log("server is running ")
})

