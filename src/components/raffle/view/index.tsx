import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FormData } from "./../form";

const ViewRaffle: React.FC = () => {
  const { query } = useRouter();
  const { id } = query;
  const [raffleItem, setRaffleItem] = useState<FormData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    const currentData: FormData[] = JSON.parse(localStorage.getItem("raffle") || "[]");
    const item = currentData.find((item: FormData) => item.id === id);
    if (item) {
      setRaffleItem(item);
    } else {
      setRaffleItem(null);
    }
    setIsLoading(false);
  }, [id]);

   const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    return new Date(date).toLocaleDateString("en-GB", options);
  };


  if (isLoading) return <p>Loading...</p>;
  if (!raffleItem) return <p>Item not found</p>;

  return (
    <div className="border border-[rgb(208,213,221)] rounded-xl p-6 bg-white w-full">
      <h1 className="text-[18px] font-semibold text-dark mb-8">View Raffle</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="form-group">
          <label>Title</label>
          <p className="text-sm text-dark">{raffleItem.title}</p>
        </div>
        <div className="form-group">
          <label>Prize Name</label>
          <p className="text-sm text-dark">{raffleItem.prizeName}</p>
        </div>
        <div className="form-group">
          <label>Start Date</label>
          <p className="text-sm text-dark">{formatDate(raffleItem.startDate)}</p>
        </div>
        <div className="form-group">
          <label>End Date</label>
          <p className="text-sm text-dark">{formatDate(raffleItem.endDate)}</p>
        </div>
        <div className="form-group md:col-span-2">
          <label>Status</label>
          <p className="text-sm text-dark">{raffleItem.status}</p>
        </div>
        <div className="form-group md:col-span-2">
          <label>Prize Image</label>
          {raffleItem.thumbnail && (
            <Image
              src={raffleItem.thumbnail}
              alt={raffleItem.prizeName}
              width={150}
              height={100}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewRaffle;
