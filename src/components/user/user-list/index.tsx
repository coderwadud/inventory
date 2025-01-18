import React, { useEffect, useState } from "react";
import UserTable from "../user-table";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type

interface UserListProps {}

const UserList: React.FC<UserListProps> = () => {
  const [inventoryData, setInventoryData] = useState<any[]>([]);

  // Fetch data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("user-create");
    if (storedData) {
      const items = JSON.parse(storedData);
      setInventoryData(items);
    }
  }, []);

  // Handle item deletion
  const handleDelete = (id: number) => {
    const updatedItems = inventoryData.filter((item) => item.id !== id);
    setInventoryData(updatedItems); // Update state

    // Also update localStorage
    localStorage.setItem("user-create", JSON.stringify(updatedItems));
  };

  return (
    <div className="inventory-list">
      <UserTable
        items={inventoryData}
        heading="Inventory List"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default UserList;
