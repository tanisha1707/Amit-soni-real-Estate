// app/api/auth/login/route.js
import { NextResponse } from "next/server";
import { validateUser } from "@/lib/auth";
import { signToken } from "@/lib/jwt";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password, role } = body;

    // Validate required fields
    if (!email || !password || !role) {
      return NextResponse.json(
        { error: "Email, password, and role are required" },
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

    // Validate role
    const allowedRoles = ["admin", "agent"];
    if (!allowedRoles.includes(role.toLowerCase())) {
      return NextResponse.json(
        { error: "Invalid role. Must be admin or agent" },
        { status: 400 }
      );
    }

    // Validate user credentials
    const validation = await validateUser(
      email.toLowerCase(),
      password,
      role.toLowerCase()
    );

    if (!validation.success) {
      return NextResponse.json({ error: validation.message }, { status: 401 });
    }

    // Generate JWT token
    const token = signToken({
      userId: validation.user.id,
      email: validation.user.email,
      role: validation.user.role,
      name: validation.user.name,
    });

    // Create response with redirect URL based on role
    const redirectUrl =
      validation.user.role === "admin"
        ? "/admin/dashboard"
        : "/agent/dashboard";

    return NextResponse.json({
      success: true,
      message: "Login successful",
      token,
      user: validation.user,
      redirectUrl,
    });
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
