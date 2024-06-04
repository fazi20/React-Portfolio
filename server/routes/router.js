const express = require("express")
const router = new express.Router()
const users = require("../models/userschema")
const nodemailer = require("nodemailer")


// email config 
const transporter = nodemailer.createTransport({

    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }


})

// register user details
router.post("/register", async (req, res) => {

    const { fname, lname, email, phone, message } = req.body
    if (!fname || !lname || !email || !phone) {
        res.status(401).json({ status: 401, error: "All Input Require" })
    }
    try {
        const preuser = await users.findOne({ email: email });
        if (preuser) {

            const userMessage = preuser.Messagesave(message);
            console.log(userMessage)
            const mailOptions = {

                from: process.env.EMAIL,
                to: email,
                subject: "sending email using node js",
                text: "Your Response has been submitted"
            }
            transporter.sendMail(mailOptions, (error, info) => {


                if (error) {
                    console.log("error" + error)
                } else {
                    console.log("Email sent" + info.response)
                    res.status(201).json({ status: 201, message: "Email sent Successfully" })
                }
            });
        }
        else {
            const finaluser = new users({
                fname, lname, email, phone, message
            });
            const storeData = await finaluser.save();
            const mailOptions = {

                from: process.env.EMAIL,
                to: email,
                subject: "sending email using node js",
                text: "Your Response has been submitted"
            }
            transporter.sendMail(mailOptions, (error, info) => {


                if (error) {
                    console.log("error" + error)
                } else {
                    console.log("Email sent" + info.response)
                    res.status(201).json({ status: 201, message: "Email sent Successfully" })
                }
            });
            res.status(201).json({ status: 201, message: storeData })
        }
    } catch (error) {
        res.status(401).json({ status: 401, error: "All inpute require" });
        console.log("catch error")
    }


})



module.exports = router