import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: process.env.BUSINESS_EMAIL,
      from: process.env.BUSINESS_EMAIL,
      subject: `${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>Dynamic Black Car Service</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="DBCS">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h2>You've got a new message!</h2>
              <div style="font-size: 16px;">
              <p>Name: ${req.body.fullname}.</p>
              <p>E-mail: ${req.body.email}</p>
              <p>Phone Number: ${req.body.phone}</p>
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <img src="https://nextjs-dbcs.vercel.app/card.jpeg" class="logo-image" style="height: 100px;width: 150px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">
              <br>Silvio Botelho<br>Owner<br>+1(415) 767-6551</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://nextjs-dbcs.vercel.app/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://www.instagram.com/dynamicblackcar/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="https://twitter.com/dynamicblackcar" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>
                <a href="https://www.facebook.com/Dynamic-Black-Car-Service-109570161518782/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Facebook</a>
              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.mesage });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
