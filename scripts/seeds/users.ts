import "dotenv/config";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema/users";

export async function seedUsers() {
  try {
    console.log("🌱 Seeding users...");

    await db
      .insert(users)
      .values([
        {
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          phone: "123-456-7890",
          role: "admin",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane.doe@example.com",
          phone: "123-456-7890",
        },
      ])
      .onConflictDoNothing({ target: [users.email] });

    console.log("✅ Users seeded successfully");
  } catch (error) {
    console.error("❌ Error seeding users:", error);
    throw error;
  }
}
