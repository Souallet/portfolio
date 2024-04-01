'use server';

import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporterConfig: SMTPTransport.Options = {
  host: process.env.NODEMAILER_HOST ?? '',
  port: parseInt(process.env.NODEMAILER_PORT ?? ''),
  auth: {
    user: process.env.NODEMAILER_USER ?? '',
    pass: process.env.NODEMAILER_PASS ?? '',
  },
};

const transporter = nodemailer.createTransport(transporterConfig);

export async function sendMail(data: any): Promise<boolean> {
  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_USER,
    to: data.email,
    subject: data.subject,
    text: data.message,
  };
  try {
    console.log(mailOptions);
    await transporter.sendMail(mailOptions);
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
}
