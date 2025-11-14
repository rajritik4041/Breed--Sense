// import jwt from "jsonwebtoken";

// export async function GET(req) {
//   const token = req.cookies.get("token")?.value;

//   if (!token) {
//     return Response.json({ message: "Not logged in" }, { status: 401 });
//   }

//   const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

//   return Response.json({ username: decoded.username });
// }

import jwt from "jsonwebtoken";

export async function GET(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return Response.json({ message: "Not logged in" }, { status: 401 });
  }

  // Decode JWT
  const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

  // Send full data
  return Response.json({
    id: decoded.id,
    username: decoded.username,
    email: decoded.email,
  });
}
