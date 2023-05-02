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
      html: `
      <div>
        <p><strong>Subject => ${formData.subject}</strong></p> 
        <p>Message => ${formData.message}</p>
      </div>
      `,
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
