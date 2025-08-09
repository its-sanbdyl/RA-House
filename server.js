require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.BREVO_API_KEY;
const allowedOrigins = [
  "https://rahouse.com.np",
  "https://www.rahouse.com.np"
];

app.use(express.json());
app.use(express.static(path.join(__dirname, "docs")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  })
);

app.post("/api/contactus.html", async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: `${firstName} ${lastName}`, email: "info@rahouse.com.np" },
        to: [{ email: "info@rahouse.com.np", name: "RA House" }],
        subject: `New message from RA House website contact form`,
        htmlContent: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New message from RA House website contact form</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f6f8;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              background: #ffffff;
              margin: 20px auto;
              border-radius: 8px;
              overflow: hidden;
              border: 1px solid #e0e0e0;
            }
            .header {
              background-color: #0d6efd;
              color: #ffffff;
              padding: 16px;
              text-align: center;
              font-size: 20px;
              font-weight: bold;
            }
            .content {
              padding: 20px;
              color: #333333;
              line-height: 1.5;
            }
            .content p {
              margin: 8px 0;
            }
            .label {
              font-weight: bold;
              color: #0d6efd;
            }
            .footer {
              background-color: #f4f6f8;
              padding: 12px;
              font-size: 12px;
              color: #777777;
              text-align: center;
            }
          </style>
          </head>
          <body>
            <div class="container">
              <div class="header">📬 New Contact Form Submission from RA House Website</div>
              <div class="content">
                <p><span class="label">Name:</span> ${firstName} ${lastName}</p>
                <p><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></p>
                <p><span class="label">Subject:</span> ${subject}</p>
                <p><span class="label">Message:</span></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
              </div>
              <div class="footer">
                This message was sent from the RA House contact form.<br>
                Please reply directly to the sender if needed.
              </div>
            </div>
          </body>
          </html>
        `
      },
      {
        headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json"
        }
      }
    );

    res.send("Message sent successfully!");
  } catch (error) {
    console.error("Email error:", error.response?.data || error.message);
    res.status(500).send("Failed to send message. Try Again Later!");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
