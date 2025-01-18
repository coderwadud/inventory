import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Pagination from '../pagination';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from '../dropdown';

interface InventoryTableProps {
  id: number;
  prizeName: string;
  ticketSold: number;
  price: string;
  partner: string;
  stockLevel: number;
  status: 'Active' | 'Inactive';
  thumbnail: string;
}

interface InventoryTablePropsWithHeading {
  heading: string;
  items: InventoryTableProps[];  // Accepts items as prop
  onDelete: (id: number) => void; // Accepts delete handler as prop
}

const InventoryTable: React.FC<InventoryTablePropsWithHeading> = ({ heading, items, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]); // Track selected items
  const [selectAll, setSelectAll] = useState(false); // Track "Select All" checkbox state

  const router = useRouter();
  const itemsPerPage = 10;

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const inventoryDataList = items.slice(startIndex, endIndex);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Dropdown toggle
  const handleDropdownToggle = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  // Handlers for dropdown actions
  const handleView = (id: number) => {
    router.push(`/inventory-database/inventory-view/${id}`);
  };

  const handleEdit = (id: number) => {
    router.push(`/inventory-database/${id}`);
  };

  const handleDelete = (id: number) => {
    onDelete(id); // Call the delete handler passed from InventoryList
  };

  // Handle individual checkbox selection
  const handleCheckboxChange = (id: number) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((itemId) => itemId !== id); // Deselect
      } else {
        return [...prevSelected, id]; // Select
      }
    });
  };

  // Handle "Select All" checkbox
  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedItems([]); // Deselect all
    } else {
      const allItemIds = inventoryDataList.map((item) => item.id);
      setSelectedItems(allItemIds); // Select all
    }
    setSelectAll(!selectAll); // Toggle "Select All" state
  };

  // Check if all items on the current page are selected
  const isAllSelected = inventoryDataList.every((item) =>
    selectedItems.includes(item.id)
  );

  return (
    <div className="border border-[#D0D5DD] rounded-xl py-6 bg-white w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 px-6">
        <h1 className="text-[18px] font-semibold text-dark">{heading}</h1>
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center gap-4 px-4 py-3 bg-white text-dark border border-[#E4E7EC] rounded-lg text-sm font-medium">
            <svg width="20" viewBox="0 0 20 20">
              <use href="/images/sprite.svg#svg-filter"></use>
            </svg>
            <span>Filter</span>
          </button>
          <Link href="/inventory-database/create-inventory" className="inline-block px-4 py-3 bg-primary text-white rounded-lg text-sm font-medium">
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
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={handleSelectAllChange}
                  />
                  <span>Prize Name</span>
                </div>
              </th>
              <th className="text-[12px] font-medium text-gray border-0 py-3 px-6">Tickets Sold</th>
              <th className="text-[12px] font-medium text-gray border-0 py-3 px-6">Price</th>
              <th className="text-[12px] font-medium text-gray border-0 py-3 px-6">Partner</th>
              <th className="text-[12px] font-medium text-gray border-0 py-3 px-6">Stock Level</th>
              <th className="text-[12px] font-medium text-gray border-0 py-3 px-6">Status</th>
              <th className="text-[12px] font-medium text-gray border-0 py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {inventoryDataList.map((item) => (
              <tr key={item.id} className="border-b !border-[#D0D5DD]">
                <td className="text-sm text-gray py-3 px-6">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                    <span className="h-10 w-10 min-w-10 bg-white rounded-full border border-[#D0D5DD] overflow-hidden">
                      <Image
                        src={item.thumbnail || '/images/laptop.webp'} 
                        loading="lazy"
                        height={40}
                        width={40}
                        quality={100}
                        alt={item.prizeName}
                        className="object-cover h-10"
                      />
                    </span>
                    <span className="text-dark font-medium text-sm">{item.prizeName}</span>
                  </div>
                </td>
                <td className="text-sm text-gray py-3 px-6">{item.ticketSold}</td>
                <td className="text-sm text-gray py-3 px-6">${item.price}</td>
                <td className="text-sm text-gray py-3 px-6">{item.partner}</td>
                <td className="text-sm text-gray py-3 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-[#EAECF0] rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: `${item.stockLevel}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-700 text-sm">{item.stockLevel}%</span>
                  </div>
                </td>
                <td className="text-sm text-gray py-3 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      item.status === 'Active' ? 'border-[#D0D5DD] text-[#067647]' : 'border-primary text-primary'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="text-sm text-gray py-3 px-6">
                  <Dropdown
                    id={item.id}
                    isOpen={openDropdown === `${item.id}`}
                    toggleDropdown={() => handleDropdownToggle(`${item.id}`)}
                    options={[
                      { id: 1, name: 'View', action: () => handleView(item.id) },
                      { id: 2, name: 'Edit', action: () => handleEdit(item.id) },
                      { id: 3, name: 'Delete', action: () => handleDelete(item.id) },
                    ]}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {inventoryDataList.length > 9 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default InventoryTable;
