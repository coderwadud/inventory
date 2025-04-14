import React, { useEffect, useState } from "react";
import InventoryTable from "./../inventory-table";
import AppConst from "../../../../config/app.config";
import { fetchUsers, deleteData } from "../../../../utility";
import { toast } from "react-toastify";

interface InventoryListProps {}

const InventoryList: React.FC<InventoryListProps> = () => {
  const [inventoryData, setInventoryData] = useState<any[]>([]);

  useEffect(() => {
    getAllInventory();
  }, []);

  const getAllInventory = async () => {
    const usersData = await fetchUsers(AppConst.inventoryDbCollection);
    setInventoryData(usersData);
  };

  // Handle item deletion
  const handleDelete = async (id: string) => {
    try {
      await deleteData(AppConst.inventoryDbCollection, id, (message: string) => {
      toast(message);
    });
      setInventoryData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      toast.error("Error deleting item. Please try again.");
    }
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
