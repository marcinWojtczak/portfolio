import AWS from 'aws-sdk';


AWS.config.update({
  accessKeyId: process.env.AWS_ACCES_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: 'eu-central-1',
});

const ses = new AWS.SES({  region: 'eu-central-1'  });

export async function sendEmail(formData) {

  const params = {
    Destination: {
      ToAddresses: ['marcinwojtczak.pure@gmail.com'], // Replace with recipient's email address
    },
    Message: {
      Body: {
        Text: { Data: formData.message },
      },
        Subject: { Data: formData.subject },
      },
    Source: 'marcinwojtczak.pure@gmail.com', // Replace with sender's email address
  };

  try {
      await ses.sendEmail(params).promise();
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
}