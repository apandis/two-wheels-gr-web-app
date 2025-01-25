// app/api/users/route.ts

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { users, insertUserSchema, User } from "@/lib/db/schema";

export async function GET() {
  try {
    // Fetch all users
    const data: User[] = await db.select().from(users);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("GET /api/users error:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    // Parse JSON body
    const body = await req.json();

    // Validate the request body against our Zod schema
    const validatedData = insertUserSchema.parse(body);

    // Insert the new user into the database
    const [newUser] = await db.insert(users).values(validatedData).returning();

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    if (error instanceof Error && "issues" in error) {
      // Catch Zod validation errors
      return NextResponse.json(
        { error: "Validation error", details: error },
        { status: 400 }
      );
    }

    console.error("POST /api/users error:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
