import React, { useEffect, useState } from "react";
import UserTable from "../user-table";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type

interface UserListProps {}

const UserList: React.FC<UserListProps> = () => {
  const [usersData, setUsersData] = useState<any[]>([]);

  // Fetch data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("user-create");
    if (storedData) {
      const items = JSON.parse(storedData);
      setUsersData(items);
    }
  }, []);

  // Handle item suspend events
  const handleDelete = (id: number) => {
    // const updatedItems = usersData.filter((item) => item.id !== id);
    // setUsersData(updatedItems); // Update state

    // // Also update localStorage
    // localStorage.setItem("user-create", JSON.stringify(updatedItems));
  };

  return (
    <div className="user-list">
      <UserTable
        items={usersData}
        heading="Users List"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default UserList;
