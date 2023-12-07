import nodemailer from "nodemailer";
const SITE_EMAIL = process.env.SITE_EMAIL;
const PERSONAL_EMAIL = process.env.PERSONAL_EMAIL;
export default async function nmTransportor(options) {
  const { from, subject, message } = options;

  const transportor = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: PERSONAL_EMAIL,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  const emailOptions = {
    from: SITE_EMAIL,
    to: PERSONAL_EMAIL,
    subject: `Contact Form Submission from ${SITE_EMAIL}`,
    text: message,
    html: `
        <p>Email: ${from}</p>
        <br>
        <p>Subject: ${subject}</p>
        <p>Message: ${message}</p>
        `,
  };

  const emailResolver = await new Promise((resolve, reject) => {
    transportor.sendMail(emailOptions, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  return emailResolver;
}