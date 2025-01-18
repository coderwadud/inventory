import React from "react";
import InventoryForm, { FormData } from "./../inventory-form";
import { toast } from 'react-toastify';


const CreateInventory: React.FC = () => {
  const handleCreate = (data: FormData) => {
  if (!data || Object.keys(data).length === 0) {
    toast.error("Created Unsuccessfully");
    return;
  }

  const currentData = JSON.parse(localStorage.getItem("inventory") || "[]");
  const newItem = { ...data, id: Date.now().toString() }; // Add a unique ID
  const updatedData = [...currentData, newItem];
  localStorage.setItem("inventory", JSON.stringify(updatedData));
  toast.success("Created successfully!");
};


  return (
    <div>
      <InventoryForm
        formHeading="Create Inventory"
        onSubmit={handleCreate}
      />
    </div>
  );
};

export default CreateInventory;
