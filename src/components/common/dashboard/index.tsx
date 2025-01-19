import React, { useEffect, useState } from "react";
import GraphComponent from "../graph";
import SmallTable from "./table/smTable";
import InventoryTable from "../../inventory/inventory-table";
import { deleteData, fetchUsers } from "../../../../utility";
import { toast } from "react-toastify";
import AppConst from "../../../../config/app.config";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
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


  // Assuming you want the top 7 best-sellers (you can adjust the logic here)
  const bestSellers = inventoryData.slice(0, 5); // Take the top 7 items as best sellers

    return (
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-6 mt-6">
            <div className="xl:col-span-2">
                <GraphComponent />
            </div>
            <div className="xl:col-span-1">
                <SmallTable options={smTableData} />
            </div>
            <div className="xl:col-span-3">
                <div className="best-inventory-table">
                    <InventoryTable
                        items={bestSellers}
                        heading="Inventory List"
                        onDelete={handleDelete}
                    />
                </div>
            </div>
        </div>
	);
};

export default Dashboard;



interface smTableDataType {
    id: number;
    title: string;
    qty: string;
    low: string;
}
const smTableData : Array<smTableDataType> = [
    {
        id: 1,
        title: "Iphone 6",
        qty: "100",
        low: "20"
    },
    {
        id: 2,
        title: "Iphone 6",
        qty: "100",
        low: "20"
    },
    {
        id: 3,
        title: "Iphone 6",
        qty: "100",
        low: "20"
    },
    {
        id: 4,
        title: "Iphone 6",
        qty: "100",
        low: "20"
    },
]