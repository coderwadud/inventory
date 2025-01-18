import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from '@/components/common/pagination';

interface UserTableProps {
  id: number;
  name: string;
  email: string;
  address: string;
  registrationDate: string;
  status: string;
  kycRequest: string;
  imgUrl: string;
}

interface UserTablePropsWithHeading {
  items: UserTableProps[];
  heading: string; // Add heading as part of props
}

const UserTable: React.FC<UserTablePropsWithHeading> = ({ items, heading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div className="border border-[#D0D5DD] rounded-xl py-6 bg-white w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 px-6">
        <h1 className="text-[18px] font-semibold text-dark">{heading}</h1>
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center gap-4 px-4 py-3 bg-white text-dark border border-[#E4E7EC] rounded-lg text-sm font-medium">
            <svg width="20" viewBox="0 0 20 20">
              <use href="/images/sprite.svg#svg-sort"></use>
            </svg>
            <span>Sort</span>
          </button>
          <Link href="/" className="inline-block px-4 py-3 bg-primary text-white rounded-lg text-sm font-medium">
            + Create New
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F3F3F5] border-b border-t !border-[#D0D5DD]">
              <th className="text-[12px] font-medium text-gray border-0 py-3 px-6">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Name</span>
                </div>
              </th>
              <th className="text-[12px] font-medium text-gray border-0 py-3 px-6">Email</th>
              <th className="text-[12px] font-medium text-gray border-0 py-3 px-6">Address</th>
              <th className="text-[12px] font-medium text-gray border-0 py-3 px-6">Registration Date</th>
              <th className="text-[12px] font-medium text-gray border-0 py-3 px-6">Status</th>
              <th className="text-[12px] font-medium text-gray border-0 py-3 px-6">KYC Request</th>
              <th className="text-[12px] font-medium text-gray border-0 py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedItems.map((item) => (
              <tr key={item.id} className="border-b !border-[#D0D5DD]">
                <td className="text-sm text-gray py-3 px-6">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" />
                    <span className="h-10 w-10 min-w-10 bg-white rounded-full border border-[#D0D5DD] overflow-hidden">
                      <Image
                        src={item.imgUrl}
                        loading="lazy"
                        height={40}
                        width={40}
                        quality={100}
                        alt={item.name}
                        className="object-cover h-10"
                      />
                    </span>
                    <span className="text-dark font-medium text-sm">{item.name}</span>
                  </div>
                </td>
                <td className="text-sm text-gray py-3 px-6">{item.email}</td>
                <td className="text-sm text-gray py-3 px-6">{item.address}</td>
                <td className="text-sm text-gray py-3 px-6">{item.registrationDate}</td>
                <td className="text-sm text-gray py-3 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      item.status === 'Active'
                        ? 'border-[#067647] text-[#067647]'
                        : 'border-primary text-primary'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="text-sm text-gray py-3 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      item.kycRequest === 'Approved'
                        ? 'border-[#067647] text-[#067647]'
                        : 'border-primary text-primary'
                    }`}
                  >
                    {item.kycRequest}
                  </span>
                </td>
                <td className="text-sm text-gray py-3 px-6">
                  <button className="text-gray-500 hover:text-gray-700">...</button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
};

export default UserTable;
