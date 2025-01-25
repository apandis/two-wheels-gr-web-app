import { getUsers } from "@/actions/userActions";
import { TableHeader } from "@/components/admin/TableHeader";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <>
      {/* Page Header */}
      <TableHeader
        title="Users"
        subtitle="User Management"
        searchPlaceholder="Search users..."
      />

      {/* Page Content */}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
