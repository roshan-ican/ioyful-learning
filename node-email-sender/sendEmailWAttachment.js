const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");
const AWS = require("@aws-sdk/client-ses");

const { AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY, AWS_SES_REGION } = process.env;

const ses = new AWS.SES({
  apiVersion: "2010-12-01",
  region: AWS_SES_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

const transporter = nodemailer.createTransport({
  SES: { ses, aws: AWS },
});
console.log("🚀  transporter", transporter);

const sendMailWAttachment = async () => {
  try {
    const mailOptions = {
      from: {
        name: "Asura",
        // address: "asuraaabak@gmail.com",
        address: "roshansahani535@gmail.com",
      },
      to: ["izorosan65@gmail.com"],
      subject: "Test email with attachments",
      text: "Hello, this is checkk check check",
      html: "<b> Hello, this is an tesst email with attachments</b>",
      attachments: [
        { filename: "test.pdf", path: path.join(__dirname, "test.pdf") },
      ],
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully", info.messageId);
  } catch (error) {
    console.log("🚀  sendMailWAttachment  error", error);
  }
};
sendMailWAttachment();
