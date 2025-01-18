import React from "react";
import UserForm, { FormData } from "./../form";
import { toast } from 'react-toastify';


const CreateUser: React.FC = () => {
  const handleCreate = (data: FormData) => {
  if (!data || Object.keys(data).length === 0) {
    toast.error("Created Unsuccessfully");
    return;
  }

  const currentData = JSON.parse(localStorage.getItem("user-create") || "[]");
  const newItem = { ...data, id: Date.now().toString() }; // Add a unique ID
  const updatedData = [...currentData, newItem];
  localStorage.setItem("user-create", JSON.stringify(updatedData));
  toast.success("Created successfully!");
};


  return (
    <div>
      <UserForm
        formHeading="Create User"
        onSubmit={handleCreate}
      />
    </div>
  );
};

export default CreateUser;
