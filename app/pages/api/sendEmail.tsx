import AWS from 'aws-sdk';

AWS.config.update({ 
  region: 'eu-central-1',  
  accessKeyId: 'AKIA3EJLSFWX6WVG6J6S', 
  secretAccessKey: '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', 
});

const ses = new AWS.SES({ apiVersion: 'latest' });



export async function sendEmail({ to, from, subject, message, email}) {
  const params = {
    Source: from,
    Destination: { ToAddresses: [to] },
    Message: {
      Subject: { Data: subject },
      Body: { Text: 
        { Data: `Email: ${email}\nMessage: ${message}` } },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log('Email sent:', result.MessageId);
    return result.MessageId;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}