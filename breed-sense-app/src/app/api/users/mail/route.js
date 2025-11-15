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
export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received body:", body); // Debug log

    const { name, email, subject, message } = body;

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycby07iQgnxjcuQC811zCn6rrJogQbXar2i98UJkkuxjcbWEQSM2e5HuicNH9sDLIaWDI/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      }
    );

    const data = await response.json();
    console.log("Google Apps Script response:", data); // Debug log

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    console.error("API error:", error); // Log the actual error
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}