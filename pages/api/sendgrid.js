import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "santana.eric.work@gmail.com",
      from: "santana.eric.work@gmail.com",
      subject: `${req.body.subject}`,
      html: `<div>You've got mail!</div>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.mesage });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
