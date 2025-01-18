import React from "react";
import { toast } from 'react-toastify';
import { DataCreate } from "../../../../utility";
import AppConst from "../../../../config/app.config";
import { RaffleFormData } from "../../../../service/raffleDataType";
import RaffleForm from "../form";


const CreateRaffle: React.FC = () => {
  const handleCreate = (data: RaffleFormData) => {
    const dbCollection = AppConst.raffleDbCollection;
    DataCreate(data, dbCollection, (message: string) => {
      toast(message);
    });
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
