"use client";

import { useState, useEffect } from "react";
import { User } from "@/lib/db/schema/users";

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch from the API route
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        // data should be an array of users
        setUsers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section>
      <h1>All Users (Client Component)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </section>
  );
}
