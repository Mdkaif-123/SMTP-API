require('dotenv').config()
const express = require("express") ;
const contactRoutes = require('./routes/contact') 
const bodyParser= require("body-parser") ;
const mongoose = require('mongoose')

const app = express()
const PORT = 8000


mongoose.connect(process.env.MONGODB_URL)
.then(() =>{
    console.log("Connected to DB");
})
.catch((err) =>{
    console.log(err);
})



app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/contact', contactRoutes)
app.get('/', (req,res) =>{
    res.send(`<h1>API is working</h1> `)
})

app.listen(PORT,() => {
    console.log(`Port is listening on http://localhost:${PORT}`);
})