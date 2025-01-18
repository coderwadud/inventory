import React from "react";
import InventoryForm from "./../inventory-form";
import { toast } from 'react-toastify';
import AppConst from "../../../../config/app.config";
import { DataCreate } from "../../../../utility";
import { FormData } from "../../../../service/inventoryDataType";

const CreateInventory: React.FC = () => {
  const handleCreate = (data: FormData) => {
    const dbCollection = AppConst.inventoryDbCollection;
    DataCreate(data, dbCollection, (message: string) => {
      toast(message);
    });
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
