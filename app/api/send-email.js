import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { name, email } = req.body;

    // Send the thank you email via Resend
    await resend.emails.send({
      from: 'corporate@superformai.com',    // Your verified sender
      to: email,                            // Recipient from the form
      subject: 'Thank You for Joining Superform AI!',
      html: `
        <div>
          <h1>Hi ${name},</h1>
          <p>
            Thank you for joining our waitlist! We appreciate your interest in Superform AI.
          </p>
          <p>
            We'll keep you updated on all the exciting features and let you know
            as soon as we're ready for you to jump in.
          </p>
          <p>Best, <br />The Superform AI Team</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Error sending email' });
  }
}
