// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer')

// Configure Models..
const Query = require('./models/query.models.js')
const Volunteer = require('./models/volunteer.models.js')

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// CORS middleware
app.use(cors())

// Connect to MongoDB
mongoose.connect(`${process.env.MONGO_ATLAS_URI}`)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
    },
});


// Route to handle form submission
app.post('/api/contact', async (req, res) => {
    try {
        const newQuery = new Query(req.body);
        await newQuery.save();
        console.log(req.body.email);
        console.log("Added query..");
        res.status(201).json({ message: 'Contact form submitted successfully' });

        const mailDetails = {
            from: {
                name: "SevaMeFunds NGO",
                address: process.env.USER_EMAIL
            },
            to: req.body.email,
            subject: "Thank you for raising a query!!",
            text: "Hello user.. Thank you for showing interest into our work. We will try to resolve your query as sson as possible.",
            // html: "<h1>Hello World</h1><p>This is a test email.</p>",
        }

        const sendMail = async (transporter, mailOptions) => {
            try {
                await transporter.sendMail(mailOptions);
                console.log("Email has been sent successfully..");
            } catch (error) {
                console.log(error);
            }
        }
        sendMail(transporter, mailDetails)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.post('/api/volunteer', async (req, res) => {
    try {
        const newQuery = new Volunteer(req.body);
        await newQuery.save();
        console.log(req.body.email);
        console.log("Added data..");
        res.status(201).json({ message: 'Volunteer form submitted successfully' });

        const mailDetails = {
            from: {
                name: "SevaMeFunds NGO",
                address: process.env.USER_EMAIL
            },
            to: req.body.email,
            subject: "Thank you for raising a query!!",
            text: "Thank you for showing interest in our work. It feels extremely validated and encouraging. We would love to have you onboard with us in our good work. We will try to respond as soon as possible.",
            // html: "<h1>Hello World</h1><p>This is a test email.</p>",
        }

        const sendMail = async (transporter, mailOptions) => {
            try {
                await transporter.sendMail(mailOptions);
                console.log("Email has been sent successfully..");
            } catch (error) {
                console.log(error);
            }
        }
        sendMail(transporter, mailDetails)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




// Email sending function
// function sendEmail(name, email, message) {
//     let mailOptions = {
//         from: `"${name}" <no-reply@sevamefunds.com>`,
//         to: 'info@sevamefunds.com',
//         subject: `${email} has sent a message through the SevaMeFunds contact form!`,
//         text: `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
//     };

//     return new Promise((resolve, reject) => {
//         transporter.sendMail(mailOptions, (err, info) => {
//             if (err) {
//                 reject(Error(err));
//             } else {
//                 resolve("Email sent!");
//             }
//         })
//     })
// };

// app.use()