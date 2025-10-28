// api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, message, phone } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });

  try {
    let transporter;

    if (process.env.ETHEREAL === 'true') {
      const test = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: { user: test.user, pass: test.pass },
      });
    } else {
      // Prefer SMTP_*; fall back to EMAIL_USER/EMAIL_PASS for convenience
      const host = process.env.SMTP_HOST || 'smtp.gmail.com';
      const port = Number(process.env.SMTP_PORT || 465);
      const secure = String(process.env.SMTP_SECURE ?? 'true') === 'true';
      const user = process.env.SMTP_USER || process.env.EMAIL_USER;
      const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

      if (!user || !pass) {
        return res.status(500).json({ error: 'Missing SMTP credentials' });
      }

      transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
      });
    }

    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER || process.env.EMAIL_USER;
    const toEmail = process.env.TO_EMAIL || fromEmail;

    const info = await transporter.sendMail({
      from: `"Portfolio" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `${message}\n\nPhone: ${phone || 'N/A'}`,
      html: `<p><b>From:</b> ${name} (${email})</p><p><b>Phone:</b> ${phone || 'N/A'}</p><p>${message}</p>`,
    });

    const previewUrl = process.env.ETHEREAL === 'true' ? nodemailer.getTestMessageUrl(info) : null;
    return res.status(200).json({ ok: true, id: info.messageId, previewUrl });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Email failed to send' });
  }
}
