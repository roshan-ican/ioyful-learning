const {
  SESClient,
  SendEmailCommand,
  CreateTemplateCommand,
} = require("@aws-sdk/client-ses");
require("dotenv").config();

const SES_CONFIG = {
  region: process.env.AWS_SES_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
};

const sesClient = new SESClient(SES_CONFIG);

const run = async (template_name) => {
  const createTemplateCommand = new CreateTemplateCommand({
    Template: {
      TemplateName: template_name,
      HtmlPart: `
      <!DOCTYPE html>
      <html>
      <head>
          <title>My Email Template</title>
      </head>
      <body>
          <h1>Hello, {{name}}!</h1>
          <p>This is a sample email template.</p>
          <p>You can customize it with your own content.</p>
      </body>
      </html>
  `,

      TextPart: `Hello, {{name}} ! Did you know Amazon has a mascot named Peccy ?`,
      SubjectPart: "Amazon Tip",
    },
  });
  try {
    const res = await sesClient.send(createTemplateCommand);
    console.log("SES template has been created", res);
  } catch (error) {
    console.error("Failed to create template", err);
  }
};
run("SES-Siimple-Template");
