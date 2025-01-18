import React, { useEffect, useState } from "react";
import InventoryTable from "../inventory-table";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type

interface InventoryListProps {}

const InventoryList: React.FC<InventoryListProps> = () => {
  const [inventoryData, setInventoryData] = useState<any[]>([]);

  // Fetch data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("inventory");
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
    localStorage.setItem("inventory", JSON.stringify(updatedItems));
  };

  return (
    <div className="inventory-list">
      <InventoryTable
        items={inventoryData}
        heading="Inventory List"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default InventoryList;
