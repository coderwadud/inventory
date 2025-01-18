import React from "react";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
interface Option {
  id: string | number;
  title: string;
  qty: string;
  low: string;
}
interface SmallTableProps {
    options: Array<Option>
}

const SmallTable: React.FC<SmallTableProps> = ({
    options
}) => {
    return (
        <div className="border border-[#D0D5DD] rounded-xl p-6 bg-white">
            <div className="flex justify-between items-center">
                <h3 className="text-[18px] font-semibold text-dark">Least Selling Raffles</h3>
                <Link className="text-sm font-semibold text-primary" href="/">See All</Link>
            </div>
            <div className="overflow-auto">
                <table className="w-full mt-2">
                <tbody className="divide-y divide-[#D9DADF]">
                    {options.map(item => (
                        <tr key={item.id}>
                            <td className="p-3">
                                <div className="bg-primary-light h-10 w-10 rounded-full"></div>
                            </td>
                            <td className="p-3">
                                <strong className="text-sm font-medium text-dark block">{ item.title }</strong>
                                <p className="text-sm text-normal text-gray">Remaining Quantity :
                                    {item.qty}
                                </p>
                            </td>
                            <td className="p-3">
                                <span className="inline-flex font-medium text-[12px] border border-[#D12A2A] text-[#D12A2A] px-3 p-1 gap-1 rounded-full">
                                    <Image
                                        src="/images/icon/5.svg"
                                        alt="icon"
                                        width={12}
                                        height={ 12 }
                                        sizes="100vw"
                                        quality={100}
                                    />
                                    {item.low}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
	);
};

export default SmallTable;
