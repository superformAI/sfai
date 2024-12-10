// app/api/join-waitlist/route.js
import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const { email } = await req.json();

  try {
    // Insert email into Supabase
    const { data, error } = await supabase
      .from('waitlist_emails')
      .insert([{ email }]);

    if (error) {
      console.error('Supabase Error:', error);
      return NextResponse.json({ message: 'Error saving email' }, { status: 500 });
    }

    // Send thank-you email
    await sendThankYouEmail(email);
    return NextResponse.json({ message: 'Email saved successfully' }, { status: 200 });
  } catch (err) {
    console.error('API Route Error:', err);
    return NextResponse.json({ message: 'An unexpected error occurred' }, { status: 500 });
  }
}

async function sendThankYouEmail(email) {
  const msg = {
    to: email,
    from: 'corporate@superformai.com', // Ensure this is verified with SendGrid
    subject: 'Thank you for joining the Superform waitlist!',
    html: `
      <!DOCTYPE html>
      <html>
        <body>
          <h2>Welcome to Superform AI!</h2>
          <p>Thank you for joining the waitlist! Stay tuned for more updates.</p>
          <p>Best Regards,<br/>Superform AI Team</p>
        </body>
      </html>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log('Thank-you email sent to:', email);
  } catch (error) {
    console.error('SendGrid Error:', error.response?.body?.errors || error.message);
  }
}
