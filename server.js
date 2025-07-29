const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const limiter = rateLimit({
  windowMs: 10 * 1000,
  max: 1,
  message: 'Too many requests. Try again shortly.'
});

const app = express();
const PORT = process.env.PORT || 3000;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('docs'));
app.use('/send-email', limiter);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${EMAIL_USER}`,
    pass: `${EMAIL_PASS}`,
  },
});

app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

   const mailOptions = {
    from: `${email}`,
    to: `${EMAIL_USER}`,
    subject: subject,
    text: `
📩 New Message from RA House Website's Contact Form:

👤 Name: ${firstName} ${lastName}
📧 Email: ${email}
📝 Subject: ${subject}

💬 Message:
${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email send error:', error);
      return res.status(500).json({ success: false, error: 'Failed to send email' });
    }
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
