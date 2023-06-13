const express= require('express') 
const sendMail = require('../controllers/sendmail') 
const router = express.Router()


router.post('/sendmail', sendMail)
router.get('/', (req,res) =>{
    res.send("done")
    console.log("Done");
})

/*

{
    "firstName" : "Md Kaif",
    "lastName" : "Ansari",
    "mobileNumber" : 7488848209,
    "interestedIn" : "web",
    "noOfScreens" : "1-40",
    "features" : ["map", "otp", "mail"],
    "language" : "English",
    "timeLine" : "8-12 weeks",
    "message" : "hey i want to make a app"
}

  */

module.exports = router;
