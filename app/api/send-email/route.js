import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const { email, name, message } = await req.json();

  const msg = {
    to: email,
    from: "corporate@superformai.com", // Verified SendGrid email
    subject: "Thank You for Contacting Superform AI",
    html: `<p>Hi ${name},</p><p>Thank you for your message: "${message}"</p>`,
  };

  try {
    await sgMail.send(msg);
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
