export default async function Email(req, res) {
  if (req.method === "POST") {
    const { token } = req.body;
    try {
      fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
      })
        .then((reCaptchaRes) => reCaptchaRes.json())
        .then((reCaptchaRes) => {
          // console.log(
          //   reCaptchaRes,
          //   "Response from Google reCaptcha verification API"
          // );
          if (reCaptchaRes?.score > 0.5) {
            res.status(200).json({
              status: "success",
              message: "Captcha submitted successfully",
            });
          } else {
            res.status(200).json({
              status: "failure",
              message: "ReCaptcha Failure",
            });
          }
        });
    } catch (err) {
      res.status(405).json({
        status: "failure",
        message: "Error submitting the form",
      });
    }
  } else {
    res.status(405);
    res.end();
  }
}
