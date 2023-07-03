import { mailOptions, transporter } from "../../app/config/nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const generateEmailContent = (data: string) => {
  const stringData = Object.entries(data).reduce((str, [key, value]) => 
    (str += `${key} : \n${value} \n \n`), 
    ""
  );

  return {
    text: stringData, 
  };
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === "POST") {
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),

      });

      return res.status(200).json({success: 'true'});
    } catch(error) {
      console.log(error)
      return res.status(400).json({message: error.message});
    } 
  }
  
  res.status(400).json({message: 'Bad request'});
}

export default handler;