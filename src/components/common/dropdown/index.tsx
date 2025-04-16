import React from 'react';

interface DropdownOption {
  id: any;
  name: string;
  action: () => void;
}

interface DropdownProps {
  id: any;
  options: DropdownOption[];
  isOpen: boolean;
  toggleDropdown: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, isOpen, toggleDropdown }) => {
  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown}>...</button>

      {isOpen && (
        <ul className="absolute right-full w-48 rounded-xl bg-white border border-[#D0D5DD] z-20">
          {options.map((option) => (
            <li key={option.id} className="py-1">
              <button
                onClick={() => {
                  option.action();
                  toggleDropdown();
                }}
                className="flex items-center gap-3 p-3 px-5 w-full text-left"
              >
                <span className="text-sm font-normal text-[#475467]">{option.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
