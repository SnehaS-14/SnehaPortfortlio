import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'sneha.shanmugam014@gmail.com',
    pass: process.env.EMAIL_PASSWORD || ''
  }
});

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const distPath = join(__dirname, 'dist');
console.log(`Serving static files from: ${distPath}`);
console.log(`Dist directory exists: ${fs.existsSync(distPath)}`);

app.use(express.static(distPath, { maxAge: '1h' }));

// Email endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    // Validate inputs
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email to Sneha
    const mailToSneha = {
      from: process.env.EMAIL_USER || 'sneha.shanmugam014@gmail.com',
      to: 'sneha.shanmugam014@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Confirmation email to visitor
    const mailToVisitor = {
      from: process.env.EMAIL_USER || 'sneha.shanmugam014@gmail.com',
      to: email,
      subject: 'Thank you for reaching out!',
      html: `
        <h2>Hi ${firstName},</h2>
        <p>Thank you for contacting me! I've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Sneha S<br>Full-Stack Engineer</p>
      `
    };

    // Send both emails
    await transporter.sendMail(mailToSneha);
    await transporter.sendMail(mailToVisitor);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.use((req, res) => {
  const indexPath = join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('index.html not found');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
