import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Corrected import
import RaffleForm, { FormData } from "./../form";
import { toast } from 'react-toastify';
import { updatedData } from "../../../../utility";
import AppConst from "../../../../config/app.config";

const EditRaffle: React.FC = () => {
  const router = useRouter(); 
  const { id } = router.query;
  const [initialData, setInitialData] = useState<FormData | undefined>(undefined); 
  const [isLoading, setIsLoading] = useState(true);

  const [raffleData, setRaffleData] = useState<any[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("raffle");
    if (storedData) {
      const items = JSON.parse(storedData);
      setRaffleData(items); // Set the Raffle data
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!id || raffleData.length === 0) return;
    const item = raffleData.find((item: FormData) => item.id === id);
    if (item) {
      setInitialData(item);
      setIsLoading(false);
    } else {
      toast.error("updated Fail!");
      router.push("/");
    }
  }, [id, raffleData, router]);

  const handleUpdate = (data: FormData) => {
    const dbCollection = AppConst.raffleDbCollection;
    updatedData(data, dbCollection, (message: string) => { toast(message);});
  };

  if (isLoading) return <p>Loading...</p>; 

  return (
    <div>
      <RaffleForm
        formHeading="Edit Raffle"
        initialData={initialData}
        onSubmit={handleUpdate}
      />
    </div>
  );
};

export default EditRaffle;
