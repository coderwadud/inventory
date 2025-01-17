import React from "react";
import InventoryForm from "../inventory-form";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface EditInventoryProps {}

const EditInventory: React.FC<EditInventoryProps> = () => {
    return (
        <div className="Edit-inventory">
            <InventoryForm
                formHeading="Update Inventory"
                initialData={{
                    prizeName: "Sample Prize",
                    ticketSold: 100,
                    price: 50,
                    partner: "Sample Partner",
                    stockLevel: "50",
                    status: "Active",
                    thumbnail: "",
                }}
                onSubmit={(data) => console.log("Update Data:", data)}
                />

        </div>
	);
};

export default EditInventory;


