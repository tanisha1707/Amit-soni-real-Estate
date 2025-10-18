// app/api/auth/init-users/route.js
import { NextResponse } from "next/server";
import { createUser } from "@/lib/auth";

const testUsers = [
  {
    email: "admin@amitrealestaste.com",
    password: "admin123",
    role: "admin",
    name: "Admin User",
  },
  {
    email: "agent@amitrealestaste.com",
    password: "agent123",
    role: "agent",
    name: "Agent User",
  },
];

export async function POST(request) {
  try {
    // Only allow this in development
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { error: "Not available in production" },
        { status: 403 }
      );
    }

    const results = [];

    for (const userData of testUsers) {
      try {
        const user = await createUser(userData);
        results.push({
          email: userData.email,
          role: userData.role,
          status: "created",
          user,
        });
      } catch (error) {
        if (error.message === "User already exists") {
          results.push({
            email: userData.email,
            role: userData.role,
            status: "already_exists",
          });
        } else {
          results.push({
            email: userData.email,
            role: userData.role,
            status: "error",
            error: error.message,
          });
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: "Test users initialization completed",
      results,
      credentials: testUsers.map((u) => ({
        email: u.email,
        password: u.password,
        role: u.role,
      })),
    });
  } catch (error) {
    console.error("Init users error:", error);
    return NextResponse.json(
      { error: "Failed to initialize users" },
      { status: 500 }
    );
  }
}
