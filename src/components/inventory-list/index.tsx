import React from "react";
import InventoryTable from "../inventory-table";
import { InventoryListData } from "@/FakeData/inventoryListData";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InventoryListProps {}

const InventoryList: React.FC<InventoryListProps> = () => {
    return (
        <div className="inventory-list">
            <InventoryTable items={InventoryListData} heading="Inventory List" />
        </div>
	);
};

export default InventoryList;


