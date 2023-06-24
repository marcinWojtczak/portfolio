import { mailOptions, transporter } from "../../config/nodemailer";
import { NextRequest, NextResponse } from 'next/server';

const CONTACT_MESSAGE_FIELDS = {
  name: 'Name',
  email: "Email",
  subject: "Subject",
  message: "Message",
}

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce((str, [key, value]) => 
    (str += `${CONTACT_MESSAGE_FIELDS[key]} : \n${value} \n \n`), 
    ""
  );

  return {
    text: stringData, 
  };
}

export async function POST(req, res) {
  const data = await req.json()

  try {
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject: data.subject,
      
    });
    } catch(error) {
      console.log(error)
      
    } 
  
  return res.status(400).json({ message: "Bad request"})
}









