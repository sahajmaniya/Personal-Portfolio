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
      // Use your existing SMTP envs (as in your current file)
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

    // ---------- Styled email content ----------
    const esc = (s = '') =>
      String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    const BRAND_NAME = 'Sahaj Portfolio';
    const BRAND_COLOR = '#6c2bd9'; // purple accent

    const preheader = `New portfolio contact from ${name} (${email}).`;

    const replyLink = `mailto:${email}?subject=${encodeURIComponent(
      `Re: Your message to ${BRAND_NAME}`
    )}`;

    const html = `
      <div style="display:none;max-height:0;overflow:hidden;color:transparent;opacity:0;">
        ${esc(preheader)}
      </div>
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f6f7fb;padding:24px 0;">
        <tr>
          <td align="center">
            <table role="presentation" cellpadding="0" cellspacing="0" width="640" style="background:#ffffff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.07);overflow:hidden;">
              <tr>
                <td style="background:${BRAND_COLOR};padding:20px 24px;color:#ffffff;font-family:Inter,Segoe UI,Arial,sans-serif;">
                  <div style="font-size:18px;font-weight:700;letter-spacing:.3px;">${esc(BRAND_NAME)}</div>
                  <div style="font-size:12px;opacity:.9;margin-top:4px;">New contact form submission</div>
                </td>
              </tr>
              <tr>
                <td style="padding:24px;font-family:Inter,Segoe UI,Arial,sans-serif;color:#111827;">
                  <h2 style="margin:0 0 16px;font-size:20px;line-height:1.3;">You’ve got a new message ✉️</h2>
                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate;border-spacing:0 10px;">
                    <tr>
                      <td style="width:140px;color:#6b7280;font-size:13px;">From</td>
                      <td style="font-size:14px;font-weight:600;color:#111827;">${esc(name)}</td>
                    </tr>
                    <tr>
                      <td style="width:140px;color:#6b7280;font-size:13px;">Email</td>
                      <td style="font-size:14px;">
                        <a href="mailto:${esc(email)}" style="color:${BRAND_COLOR};text-decoration:none;">${esc(email)}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="width:140px;color:#6b7280;font-size:13px;">Phone</td>
                      <td style="font-size:14px;">${esc(phone || '—')}</td>
                    </tr>
                  </table>

                  <div style="margin:18px 0 8px;font-size:13px;color:#6b7280;">Message</div>
                  <div style="border:1px solid #e5e7eb;border-radius:10px;padding:14px 16px;background:#fcfcfd;font-size:14px;line-height:1.6;white-space:pre-wrap;color:#111827;">
                    ${esc(message)}
                  </div>

                  <div style="margin:22px 0 10px;">
                    <a href="${replyLink}" style="display:inline-block;background:${BRAND_COLOR};color:#ffffff;border-radius:8px;padding:10px 16px;font-size:14px;font-weight:600;text-decoration:none;">
                      Reply to ${esc(email)}
                    </a>
                  </div>

                  <div style="margin-top:16px;font-size:12px;color:#9ca3af;">
                    Received on ${new Date().toLocaleString()}
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 24px;background:#fafafa;border-top:1px solid #f0f1f5;color:#6b7280;font-family:Inter,Segoe UI,Arial,sans-serif;font-size:12px;">
                  You’re receiving this because someone submitted the contact form on your portfolio website.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;

    const text = [
      `New contact form submission for ${BRAND_NAME}`,
      `From:   ${name}`,
      `Email:  ${email}`,
      `Phone:  ${phone || 'N/A'}`,
      ``,
      `Message:`,
      message,
      ``,
      `Reply: ${email}`,
      `Received: ${new Date().toLocaleString()}`
    ].join('\n');

    const info = await transporter.sendMail({
      from: `"Portfolio" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New message from ${name}`,
      text,
      html,
    });

    const previewUrl = process.env.ETHEREAL === 'true' ? nodemailer.getTestMessageUrl(info) : null;
    return res.status(200).json({ ok: true, id: info.messageId, previewUrl });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Email failed to send' });
  }
}
