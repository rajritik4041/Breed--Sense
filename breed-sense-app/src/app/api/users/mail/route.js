// import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.SG_API_KEY);

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, email, message , subject } = body;
//     console.log("1")
//     if (!name || !email || !message || !subject) {
//         console.log("2")
//         return new Response(
//             JSON.stringify({ error: "Missing required fields" }),
//             { status: 400 }
//         );
//     }
//     console.log("3")
    
//     const msg = {
//         to: process.env.TO_EMAIL,
//         from: process.env.FROM_EMAIL, // must be verified in SendGrid
//         subject: "Next.js Contact Form Submission",
//         html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Subject:</strong> ${subject}</p>
//         <p><strong>Message:</strong> ${message}</p>
//         `,
//     };
//     console.log("4")
    
//     await sgMail.send(msg);
//     console.log("5")

//     return new Response(
//       JSON.stringify({ success: true, message: "Email sent successfully!" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("SendGrid Error:", error);
//     return new Response(
//       JSON.stringify({ error: "Failed to send email" }),
//       { status: 500 }
//     );
//   }
// }

import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SG_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message, subject } = body;

    if (!name || !email || !message || !subject) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL, // verified
      subject: `Next.js Contact Form: ${subject}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
    };

    await sgMail.send(msg);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("SendGrid Error:", error.response ? error.response.body : error.message);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
