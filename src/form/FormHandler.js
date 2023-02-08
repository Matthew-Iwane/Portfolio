const nodemailer = require('nodemailer');
const env = require('dotenv');
env.config()

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mattiwane.jobs@gmail.com",
    pass: process.env.PASSWORD,
  }
})

let details = {
  from: "TESTEMAILACCOUNT@gmail.com",
  to: "mattiwane.jobs@gmail.com",
  subject: "test email using nodemailer",
  text: "this message was created using nodemaile in VSCODE :)"
}

mailTransporter.sendMail(details, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("message was sent");
  }
})
