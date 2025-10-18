// app/api/auth/register/route.js
import { NextResponse } from "next/server";
import { createUser } from "@/lib/auth";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password, role, name } = body;

    // Validate required fields
    if (!email || !password || !role || !name) {
      return NextResponse.json(
        { error: "Email, password, role, and name are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    // Validate role
    const allowedRoles = ["admin", "agent"];
    if (!allowedRoles.includes(role.toLowerCase())) {
      return NextResponse.json(
        { error: "Invalid role. Must be admin or agent" },
        { status: 400 }
      );
    }

    // Create user
    const user = await createUser({
      email: email.toLowerCase(),
      password,
      role: role.toLowerCase(),
      name,
    });

    return NextResponse.json({
      success: true,
      message: "User created successfully",
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
    });
  } catch (error) {
    console.error("Register API error:", error);

    if (error.message === "User already exists") {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
