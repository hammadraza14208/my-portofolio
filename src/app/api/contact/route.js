// api/contact.js
const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.statusCode = 405;
      return res.end(JSON.stringify({ message: "Method not allowed" }));
    }

    // Parse JSON body
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      const { name, email, message } = JSON.parse(body);

      // Validate input
      if (!name || !email || !message) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ message: "Missing required fields" }));
      }

      // Configure transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Mail options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "hr319584@gmail.com", // your email
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.statusCode = 200;
      return res.end(JSON.stringify({ message: "Email sent successfully" }));
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.statusCode = 500;
    return res.end(JSON.stringify({ message: "Failed to send email", error: error.message }));
  }
};
