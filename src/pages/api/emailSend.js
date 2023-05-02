import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function EmailSend(req, res) {
  if (req.method === "POST") {
    const { formData } = req.body;

    const msg = {
      to: "matc.davis@gmail.com", // Change to your recipient
      from: "matc.davis@gmail.com", // Change to your verified sender
      subject: `Message from Portfolio site`,
      text: `Message from => ${formData.email}`,
      html: `<strong>Subject => ${formData.subject} Message => ${formData.message} </strong>`,
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
        res.status(405).json({ status: "error", message: error });
      });
  }
}
