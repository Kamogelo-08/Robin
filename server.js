const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;
//Create a transporter using SMTP

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kamzomalatji@gmail.com',
    pass: 'hi0719919804'
  }
});

var mailOptions = {
  from: 'kamzomalatji@gmail.com',
  to: 'K.RobinM@icloud.com',
  subject: 'Sending Email using Node.js',
  text: "That was easy"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});