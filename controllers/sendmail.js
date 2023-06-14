const nodemailer = require('nodemailer')
const Mail = require('../models/mail')

const sendMail = async (req, res) => {

    try {

        const newMail = new Mail({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mobileNumber: req.body.mobileNumber,
            interestedIn: req.body.interestedIn,
            noOfScreens: req.body.noOfScreens,
            features: req.body.features,
            language: req.body.language,
            timeLine: req.body.timeLine,
            message: req.body.message
        })

        newMail.save()
            .then(async () => {
                let testAccount = await nodemailer.createTestAccount();
                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: process.env.SMTP_USERNAME, // generated ethereal user
                        pass: process.env.SMTP_PASSWORD, // generated ethereal password
                    },
                });
                let message = await transporter.sendMail({
                    from: req.body.email, // sender address
                    to: 'amdkaif843@gmail.com', // list of receivers

                    subject: `New Contact Request from -  ${req.body.email}`,
                    text: "hello",
                    html: `<b>Dear Qamar Khan</b>   <br/>
                <p>A new contact request has been submitted through your website's contact form. Please find the details below:</p><br/>
    
                <strong>Message : </strong>
                <p> ${req.body.message}</p>
    
                <strong>Details:</strong>
                <ul>
                <li> First Name : ${req.body.firstName}</li>
                <li> Last Name : ${req.body.lastName}</li>
                <li> Mobile Number : ${req.body.mobileNumber}</li>
                <li> Interested In : ${req.body.interestedIn}</li>
                <li> Number of Screens : ${req.body.noOfScreens}</li>
                <li> Language : ${req.body.language}</li>
                <li> Features : ${req.body.features}</li>
                <li> Timeline : ${req.body.timeLine}</li>
                </ul>
                <i>Thank you for your attention to this matter.</i>
                <div style = 'display : flex; justify-content : center'>
                <a href='mailto:${req.body.email}?subject=Namlsoft-RequestReceived' style = '
                                    display: inline-block;
                                    outline: none;
                                    text-decoration: none;                         
                                    cursor: pointer;
                                    font-size: 16px;
                                    line-height: 20px;
                                    font-weight: 600;
                                    border-radius: 8px;
                                    padding: 13px 23px;
                                    border: 1px solid #222222;
                                    transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
                                    background: #fff;
                                    color: #222222;
                                    :hover {
                                        border-color: #000000;
                                        background: #f7f7f7;
                                    }
                                '> Reply </a>
                </div>
                `,
                })
                    .then(() => {
                        res.status(200).json({
                            success: "Sent Message successfully",
                            user: req.body.email
                        })
                    })
            })
    } catch (error) {
        if (error) {
            res.status(400).json({
                Error: `${error}`
            })
            console.log(error);
        }
    }

}

/*
{
    "email" : "client@gmail.com",
    "firstName" : "Md Kaif",
    "lastName" : "Ansari",
    "mobileNumber" : 7488848209,
    "interestedIn" : "web",
    "noOfScreens" : "1-40",
    "features" : ["map", "otp", "mail"],
    "language" : "English",
    "timeLine" : "8-12 weeks",
    "message" : "Hey I wanted to make a web application. It will be great if we talk about the cost estimation !"
}
  */

module.exports = sendMail;