import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FormData } from "../inventory-form";

const ViewInventory: React.FC = () => {
  const { query } = useRouter();
  const { id } = query;
  const [inventoryItem, setInventoryItem] = useState<FormData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    const currentData = JSON.parse(localStorage.getItem("inventory") || "[]");
    const item = currentData.find((item: FormData) => item.id === id);
    if (item) {
      setInventoryItem(item); 
    } else {
      setInventoryItem(null); 
    }
    setIsLoading(false); 
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (!inventoryItem) return <p>Item not found</p>;

  return (
    <div>
      <h1>View Inventory Item</h1>
      <div>
        <p><strong>Prize Name:</strong> {inventoryItem.prizeName}</p>
        <p><strong>Tickets Sold:</strong> {inventoryItem.ticketSold}</p>
        <p><strong>Price:</strong> ${inventoryItem.price}</p>
        <p><strong>Partner:</strong> {inventoryItem.partner}</p>
        <p><strong>Stock Level:</strong> {inventoryItem.stockLevel}%</p>
        <p><strong>Status:</strong> {inventoryItem.status}</p>
        {inventoryItem.thumbnail && (
          <div>
            <img src={inventoryItem.thumbnail} alt="Thumbnail" width={150} height={80} />
            <p>Current Thumbnail</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewInventory;
