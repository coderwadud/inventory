import { fetchUsers } from "./../../../utility"; // Ensure the correct path and function name

export default function LoginPage() {
  const fetchAndLogUsers = async () => {
    const users = await fetchUsers('inventory'); // This will call the fetchUsers function now
    console.log(users);
  };

  return (
    <div>
      <h1>User List</h1>
      <button onClick={fetchAndLogUsers}>Fetch Users</button>
    </div>
  );
}
