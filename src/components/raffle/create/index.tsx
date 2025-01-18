import React from "react";
import RaffleForm, { FormData } from "./../form";
import { toast } from 'react-toastify';


const CreateRaffle: React.FC = () => {
  const handleCreate = (data: FormData) => {
  if (!data || Object.keys(data).length === 0) {
    toast.error("Created Unsuccessfully");
    return;
  }

  const currentData = JSON.parse(localStorage.getItem("raffle") || "[]");
  const newItem = { ...data, id: Date.now().toString() }; // Add a unique ID
  const updatedData = [...currentData, newItem];
  localStorage.setItem("raffle", JSON.stringify(updatedData));
  toast.success("Created successfully!");
};


  return (
    <div>
      <RaffleForm
        formHeading="Create Raffle "
        onSubmit={handleCreate}
      />
    </div>
  );
};

export default CreateRaffle;
