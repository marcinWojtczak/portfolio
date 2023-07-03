import { mailOptions, transporter } from "../../config/nodemailer";
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';



const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce((str, [key, value]) => 
    (str += `${key} : \n${value} \n \n`), 
    ""
  );

  return {
    text: stringData, 
  };
}

export async function POST(request: Request){
  const body = await request.json()

  try {
    await transporter.sendMail({
      ...mailOptions, 
      ...generateEmailContent(body),
    })
    return new NextResponse()
  } catch (error) {
    console.log(error);
    return new NextResponse()
  }

  return new NextResponse();
};


