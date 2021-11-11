import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: process.env.BUSINESS_EMAIL,
      from: process.env.BUSINESS_EMAIL,
      subject: `${req.body.subject}`,
      html: `${req.body.message}`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.mesage });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
