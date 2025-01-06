import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_JvTAN29E_HgQXdwjGhSwtbQN1KRexjPKi');

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    const data = await resend.emails.send({
      from: 'corporate@superformai.com',
      to: email,
      subject: 'Thank you for joining Superform AI Waitlist!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">Welcome to Superform AI!</h2>
          <p>Dear ${name},</p>
          <p>We're thrilled to have you as part of our growing community of AI enthusiasts and innovators.</p>
          <p>You're now on the list to be part of the future of career advancement. Stay tuned for more updates as we gear up for early beta testing!</p>
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Follow us on <a href="https://www.linkedin.com/company/superformai/posts/?feedView=all" style="color: #0077B5;">LinkedIn</a> for the latest updates</li>
            <li>Share your excitement with your network</li>
            <li>Keep an eye on your inbox for important announcements</li>
          </ul>
          <p>If you have any questions, feel free to reach out to us at corporate@superformai.com</p>
          <p>Best regards,<br>The Superform AI Team</p>

          <!-- Add names with LinkedIn Icons -->
          <p style="margin-top: 20px;">
            <strong>Sherman Singh</strong>, CEO | 
            <a href="https://www.linkedin.com/in/shermansingh0909" target="_blank">
              <img src="https://cdn.iconscout.com/icon/free/png-64/linkedin-43-151143.png" class="linkedin-icon" alt="Sherman Singh LinkedIn" style="width: 20px; vertical-align: middle; margin-left: 5px;">
            </a>
          </p>
          <p>
            <strong>Asad Rizvi</strong>, CTO | 
            <a href="https://www.linkedin.com/in/asadrizi" target="_blank">
              <img src="https://cdn.iconscout.com/icon/free/png-64/linkedin-43-151143.png" class="linkedin-icon" alt="Asad Rizvi LinkedIn" style="width: 20px; vertical-align: middle; margin-left: 5px;">
            </a>
          </p>
        </div>
      `
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
