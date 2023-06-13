require('dotenv').config()
const express = require("express") ;
const contactRoutes = require('./routes/contact') 
const bodyParser= require("body-parser") ;

const app = express()
const PORT = 8000

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/contact', contactRoutes)

app.get('/', (req,res) =>{
    res.send("done")
})

app.listen(PORT,() => {
    console.log(`Port is listening on http://localhost:${PORT}`);
})