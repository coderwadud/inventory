import React from "react";
import InventoryForm from "../inventory-form";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CreateInventoryProps {}

const CreateInventory: React.FC<CreateInventoryProps> = () => {
    return (
        <div className="create-inventory">
            <InventoryForm
            formHeading="Create Inventory"
            onSubmit={(data) => console.log("Create Data:", data)}
            />
        </div>
	);
};

export default CreateInventory;


