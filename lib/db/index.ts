import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const isProduction = process.env.NODE_ENV === "production";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for Azure PostgreSQL
  max: isProduction ? 10 : 1, // Max pool size
  idleTimeoutMillis: 60000, // Close idle connections after 30s
  connectionTimeoutMillis: 5000, // Connection timeout after 5s
  maxUses: 1000, // Close connection after 1000 queries to prevent memory leaks
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

export const db = drizzle(pool, {
  schema,
  logger: !isProduction,
});

export const closePool = async () => {
  await pool.end();
};
