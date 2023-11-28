// Import nodemailer module
const nodemailer = require('nodemailer');

// Create a transporter object
let transporter = nodemailer.createTransport({
  service: 'ses', // Use Amazon SES as the email service
  auth: {
    user: 'YOUR_SES_ACCESS_KEY_ID', // Your SES access key ID
    pass: 'YOUR_SES_SECRET_ACCESS_KEY' // Your SES secret access key
  }
});

// Create an email message object
let message = {
  from: sender, // Sender email address
  to: recipient, // Recipient email address
  subject: subject, // Email subject
  html: bodyHTML // Email body in HTML format
};

// Send the email using the transporter and the message objects
transporter.sendMail(message, (error, info) => {
  if (error) {
    console.error(error); // Log the error if any
  } else {
    console.log('Email was sent'); // Log the success message
  }
});
