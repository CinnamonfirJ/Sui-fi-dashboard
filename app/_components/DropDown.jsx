import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex p-4 bg-gray-100'>
      <div className='relative w-48'>
        {/* Dropdown Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none'
        >
          <span>Sort by</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`ml-2 h-5 w-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>

        {/* Dropdown Options */}
        {isOpen && (
          <div className='absolute left-0 right-0 z-10 mt-2 bg-white border border-gray-200 rounded-md shadow-lg'>
            <select
              className='w-full px-4 py-2 text-sm text-gray-700 bg-white appearance-none focus:outline-none cursor-pointer'
              size='4'
              onBlur={() => setIsOpen(false)} // Close dropdown when focus is lost
            >
              <option value='Option 1' className='hover:bg-gray-100'>
                Option 1
              </option>
              <option value='Option 2' className='hover:bg-gray-100'>
                Option 2
              </option>
              <option value='Option 3' className='hover:bg-gray-100'>
                Option 3
              </option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
