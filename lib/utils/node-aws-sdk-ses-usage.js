const AWS = require('aws-sdk');

const SES_CONFIG = {
  accessKeyId: 'AKIA2WFPLBD3QP36O7A6',
  secretAccessKey: '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',
  region: 'us-west-2',
};

const AWS_SES = new AWS.SES(SES_CONFIG);

let sendEmail = (recipientEmail, name) => {
  let params = {
    Source: 'kjped74@gmail.com',
    Destination: {
      ToAddress: [
        recipientEmail
      ],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: 'This is the body of my email!',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Hello, ${name}!`,
      }
    },
  };
  return AWS_SES.sendEmail(params).promise();
};

let sendTemplateEmail = (recipientEmail) => {
  let params = {
    Source: '<kjped74@gmail.com>',
    Template: '<name of your template>',
    Destination: {
      ToAddresse': [
        recipientEmail
      ]
    },
    TemplateData: '{ \"name\':\'John Doe\'}'
  };
  return AWS_SES.sendTemplatedEmail(params).promise();
};

module.exports = {
  sendEmail,
  sendTemplateEmail,
};