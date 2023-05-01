import emailjs from "@emailjs/browser";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function EmailJSSend(req, res) {
  if (req.method === "POST") {
    const { formData } = req.body;

    const msg = {
      to: "matc.davis@gmail.com", // Change to your recipient
      from: "matc.davis@gmail.com", // Change to your verified sender
      subject: formData.subject,
      text: `Email => ${formData.email}`,
      // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
        res.status(200).json({
          status: "success",
          message: "Message submitted successfully",
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500);
      });
    // console.log(
    //   process.env.EMAIL_SERVICE_ID,
    //   process.env.EMAIL_TEMPLATE,
    //   formData,
    //   process.env.EMAIL_PUBLIC_KEY
    // );
    // try {
    //   await emailjs.send(
    //     process.env.EMAIL_SERVICE_ID,
    //     process.env.EMAIL_TEMPLATE,
    //     formData,
    //     process.env.EMAIL_PUBLIC_KEY
    //   );
    //   // setSubmit(parsedRes.message);
    //   res.status(200).json({
    //     status: "success",
    //     message: "Message submitted successfully",
    //   });
    // } catch (error) {
    //   res.status(200).json({
    //     status: "failure",
    //     message: "email Failure",
    //     error: error,
    //   });
    // setSubmit("Error sending email");
  }
}
// }
