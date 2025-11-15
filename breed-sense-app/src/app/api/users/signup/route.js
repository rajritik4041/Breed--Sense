import { connect } from "../../../../dbConfig/dbConfig.js";
import User from "../../../../models/userModel.js";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request) {
    await connect();

    try {
        const reqBody = await request.json();
        const { username, number, email, password } = reqBody;

        // Check if email already exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return NextResponse.json(
                { error: "Email already in use" },
                { status: 400 }
            );
        }

        // Check if number already exists
        const existingNumber = await User.findOne({ number });
        if (existingNumber) {
            return NextResponse.json(
                { error: "Phone number already in use" },
                { status: 400 }
            );
        }

        // Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create new user
        const newUser = new User({
            username,
            email,
            number,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser,
        }, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
