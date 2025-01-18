import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Corrected import
import InventoryForm, { FormData } from "../inventory-form";
import { toast } from 'react-toastify';

const EditInventory: React.FC = () => {
  const router = useRouter(); 
  const { id } = router.query;
  const [initialData, setInitialData] = useState<FormData | undefined>(undefined); 
  const [isLoading, setIsLoading] = useState(true);

  const [inventoryData, setInventoryData] = useState<any[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("inventory");
    if (storedData) {
      const items = JSON.parse(storedData);
      setInventoryData(items); // Set the inventory data
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!id || inventoryData.length === 0) return;
    const item = inventoryData.find((item: FormData) => item.id === id);
    if (item) {
      setInitialData(item);
      setIsLoading(false);
    } else {
      toast.error("updated Fail!");
      router.push("/");
    }
  }, [id, inventoryData, router]);

  const handleUpdate = (data: FormData) => {
    const currentData = JSON.parse(localStorage.getItem("inventory") || "[]");
    const updatedData = currentData.map((item: FormData) =>
      item.id === id ? { ...item, ...data } : item
    );
    localStorage.setItem("inventory", JSON.stringify(updatedData));
    toast.success("Updated successfully!");
    router.push("/");
  };

  if (isLoading) return <p>Loading...</p>; 

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Edit Inventory</h1>
      <InventoryForm
        formHeading="Edit Inventory Item"
        initialData={initialData}
        onSubmit={handleUpdate}
      />
    </div>
  );
};

export default EditInventory;
