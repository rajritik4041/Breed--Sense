// import jwt from "jsonwebtoken";

// export async function GET(req) {
//   const token = req.cookies.get("token")?.value;

//   if (!token) {
//     return Response.json({ message: "Not logged in" }, { status: 401 });
//   }

//   const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

//   return Response.json({ username: decoded.username });
// }

// import jwt from "jsonwebtoken";

// export async function GET(req) {
//   const token = req.cookies.get("token")?.value;

//   if (!token) {
//     return Response.json({ message: "Not logged in" }, { status: 401 });
//   }

//   // Decode JWT
//   const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

//   // Send full data
//   return Response.json({
//     id: decoded.id,
//     username: decoded.username,
//     email: decoded.email,
//   });
// }


// /api/users/me
import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const token = request.cookies.get("token")?.value;
    if(!token) return NextResponse.json({ error: "Not Authenticated" }, { status: 401 });

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
