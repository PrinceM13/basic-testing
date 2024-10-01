type UserListProps = {
  users: { name: string; email: string }[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="max-w-[600px] bg-teal-700 m-auto rounded-xl p-8">
      <h1 className="text-center text-white text-2xl font-bold mb-4">User List</h1>
      <table style={{ tableLayout: "fixed", width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                width: "40%",
                border: "1px solid white",
                padding: "8px",
                backgroundColor: "#333",
                color: "white"
              }}
            >
              Name
            </th>
            <th
              style={{
                width: "60%",
                border: "1px solid white",
                padding: "8px",
                backgroundColor: "#333",
                color: "white"
              }}
            >
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid white", padding: "8px" }}>{user.name}</td>
              <td style={{ border: "1px solid white", padding: "8px" }}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
