import React from "react";
import Image from "next/image";
import GraphComponent from "../graph";
import SmallTable from "../table/smTable";
import InventoryTable from "../inventory-table";
import { TopInventoryListData } from "@/FakeData/top-inventory-data";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
    return (
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-6 mt-6">
            <div className="xl:col-span-2">
                <GraphComponent />
            </div>
            <div className="xl:col-span-1">
                <SmallTable options={smTableData} />
            </div>
            <div className="xl:col-span-3">
                <InventoryTable items={TopInventoryListData} heading="Top-Selling Inventory"/>
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