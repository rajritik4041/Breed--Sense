// import { connect } from "../../../../dbConfig/dbConfig.js";
// import User from "../../../../models/userModel.js";
// import { NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken";

// export async function POST(request) {
//   await connect();

//   try {
//     const { email, password } = await request.json();

//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json({ error: "User does not exist" }, { status: 400 });
//     }

//     const validPassword = await bcryptjs.compare(password, user.password);
//     if (!validPassword) {
//       return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
//     }

//     const tokenData = {
//       id: user._id,
//       username: user.username,   // ✔ USERNAME ADDED
//       email: user.email,
//     };

//     const token = jwt.sign(
//       tokenData,
//       process.env.TOKEN_SECRET || "fallbackSecret",
//       { expiresIn: "1d" }
//     );

//     const response = NextResponse.json({
//       message: "Login Successful",
//       success: true,
//     });

//     response.cookies.set("token", token, {
//       httpOnly: true,
//       path: "/",
//     });

//     return response;

//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }


import { connect } from "../../../../dbConfig/dbConfig.js";
import User from "../../../../models/userModel.js";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  await connect();

  try {
    const { email, password } = await request.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User does not exist" }, { status: 400 });
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
    }

    // Token
    const token = jwt.sign(
      { id: user._id },
      process.env.TOKEN_SECRET || "fallbackSecret123",
      { expiresIn: "1d" }
    );

    const response = NextResponse.json({
      message: "Login Successful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
    });

    return response;

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
