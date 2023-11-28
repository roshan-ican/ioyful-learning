const AWS = require("aws-sdk");
require("dotenv").config();
require("aws-sdk/lib/maintenance_mode_message").suppress = true;

const SES_CONFIG = {
  region: process.env.AWS_SES_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
};

const AWS_SES = new AWS.SES(SES_CONFIG);

const sendEmail = async (recipientEmail, name) => {
  const params = {
    Source: process.env.AWS_SENDER,
    Destination: {
      ToAddresses: [recipientEmail],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
            <h1>Hello, ${name}!</h1>
            <p>This is a sample email with some dummy content.</p>
            <p>Feel free to replace this with your actual email content.</p>
          `,
        },
        Text: {
          Charset: "UTF-8",
          Data: `Hello, ${name}! This is a sample email with some dummy content.`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Sample Email for ${name}`,
      },
    },
  };
  try {
    const res = await AWS_SES.sendEmail(params).promise();
    console.warn("Mail has been sent", res);
  } catch (error) {
    console.error(error);
  }
};

sendEmail("snoorbasha50@gmail.com", "Roshan Gangsta");  
