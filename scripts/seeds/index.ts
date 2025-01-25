import "dotenv/config";
import { seedUsers } from "./users";
import { closePool } from "@/lib/db";

async function main() {
  try {
    console.log("🌱 Starting database seeding...");
    await seedUsers();
    // Add other seed functions here
    console.log("✅ Database seeding completed successfully");
  } catch (error) {
    console.error("❌ Error running seeds:", error);
    process.exit(1);
  } finally {
    // Make sure to close the pool when done
    await closePool();
  }
}

main();
