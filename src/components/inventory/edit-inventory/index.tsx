import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; 
import InventoryForm from "./../inventory-form";
import { toast } from 'react-toastify';
import { updatedData } from "../../../../utility";
import AppConst from "../../../../config/app.config";
import { FormData } from "../../../../service/inventoryDataType";

const EditInventory: React.FC = () => {
  const router = useRouter(); 
  const { id } = router.query;
  const [initialData, setInitialData] = useState<FormData | undefined>(undefined); 
  const [isLoading, setIsLoading] = useState(true);
  const [inventoryData, setInventoryData] = useState<any[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem(AppConst.inventoryDbCollection);
    if (storedData) {
      const items = JSON.parse(storedData);
      setInventoryData(items);
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
      toast.error("Update failed!");
      router.push("/");
    }
  }, [id, inventoryData, router]);

  const handleUpdate = (data: FormData) => {
    const dbCollection = AppConst.inventoryDbCollection;
    updatedData(data, dbCollection, (message: string) => { toast(message);});
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <InventoryForm
        formHeading="Edit Inventory"
        initialData={initialData}
        onSubmit={handleUpdate}
      />
    </div>
  );
};

export default EditInventory;
