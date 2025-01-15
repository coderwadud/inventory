import React from "react";
import Image from "next/image";
import GraphComponent from "../graph";
import Smalltable from "../table/smTable";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
    return (
        <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="col-span-2">
                <GraphComponent />
            </div>
            <div className="col-span-1">
                <Smalltable options={smTableData} />
            </div>
            <div className="col-span-3">

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