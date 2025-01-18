import React, { useEffect, useState } from "react";
import RaffleTable from "../table";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type

interface RaffleListProps {}

const RaffleList: React.FC<RaffleListProps> = () => {
  const [raffleData, setRaffleData] = useState<any[]>([]);

  // Fetch data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("raffle");
    if (storedData) {
      const items = JSON.parse(storedData);
      setRaffleData(items);
    }
  }, []);

  // Handle item deletion
  const handleDelete = (id: number) => {
    const updatedItems = raffleData.filter((item) => item.id !== id);
    setRaffleData(updatedItems); // Update state

    // Also update localStorage
    localStorage.setItem("raffle", JSON.stringify(updatedItems));
  };

  return (
    <div className="raffle-list">
      <RaffleTable
        items={raffleData}
        heading="raffle List"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default RaffleList;
