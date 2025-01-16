import React from "react";
import RaffleCreationTable from "../raffle-creation-table";
import { RaffleCreationData } from "@/FakeData/faffleCreationData";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RaffleCreationProps {}

const RaffleCreation: React.FC<RaffleCreationProps> = () => {
    return (
        <div className="inventory-list">
            <RaffleCreationTable items={RaffleCreationData} heading="Raffle List" />
        </div>
	);
};

export default RaffleCreation;


