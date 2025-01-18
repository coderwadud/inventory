import React from "react";
import InventoryForm, { FormData } from "../inventory-form";

const CreateInventory: React.FC = () => {
  const handleCreate = (data: FormData) => {
    const currentData = JSON.parse(localStorage.getItem("inventory") || "[]");
    const newItem = { ...data, id: Date.now().toString() }; // Add a unique ID
    const updatedData = [...currentData, newItem];
    localStorage.setItem("inventory", JSON.stringify(updatedData));
    alert("Inventory item created successfully!");
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Create Inventory</h1>
      <InventoryForm
        formHeading="Create New Inventory"
        onSubmit={handleCreate}
      />
    </div>
  );
};

export default CreateInventory;
