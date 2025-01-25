import { db } from "@/lib/db";
import { users, User } from "@//lib/db/schema";

export async function getUsers(): Promise<User[]> {
  try {
    console.log("🔍 Getting users...");

    const data = await db.select().from(users);

    console.log("✅ Users retrieved successfully");

    return data;
  } catch (error) {
    console.error("❌ Error getting users:", error);
    throw error;
  }
}
