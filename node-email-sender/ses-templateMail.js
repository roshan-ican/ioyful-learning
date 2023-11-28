const { SESClient, SendTemplatedEmailCommand } = require("@aws-sdk/client-ses");
require("dotenv").config();

const SES_CONFIG = {
  region: process.env.AWS_SES_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
};

const sesClient = new SESClient(SES_CONFIG);

const sendMail = async (templateName, recipientEmail) => {
  const sendTemplatedEmailCommand = new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: [recipientEmail],
    },
    Source: process.env.AWS_SENDER, // Corrected property name
    Template: templateName,
    TemplateData: JSON.stringify({ name: "Roshan Ican" }),
  });
  try {
    const res = await sesClient.send(sendTemplatedEmailCommand);
    console.log("Email has been sent", res);
  } catch (err) {
    console.error(err, "Error??????????");
  }
};

sendMail("SES-Template", "roshansahani535@gmail.com");
