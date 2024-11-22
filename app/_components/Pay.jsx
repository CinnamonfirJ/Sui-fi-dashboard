import { useState } from "react";

export default function Pay() {
  const [selectedAmount, setSelectedAmount] = useState(null); // State to track the selected amount

  // Predefined payment amounts
  const amounts = [1, 5, 10, 20, 25, 50];

  const handleButtonClick = (amount) => {
    setSelectedAmount(amount); // Update the selected amount
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only numbers in the input
    if (/^\d*$/.test(value)) {
      setSelectedAmount(value);
    }
  };

  return (
    <div className='flex flex-col gap-6 items-center space-y-4 p-6'>
      {/* Buttons */}
      <div className='grid grid-cols-3 gap-6'>
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => handleButtonClick(amount)}
            className={`px-12 py-3 border transition rounded-full ${
              selectedAmount === amount
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-800 border-gray-400"
            }`}
          >
            + {amount} SUI
          </button>
        ))}
      </div>
      {/* Input Field */}
      {/* <div>
        <label className='block mb-2 text-sm font-medium text-gray-700'>
          Selected Amount
        </label>
        <input
          type='text'
          readOnly
          value={selectedAmount !== null ? `$${selectedAmount}` : ""}
          placeholder='Select an amount'
          className='px-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div> */}
      <div>
        {/* Search Input */}
        <div className='relative flex justify-center items-center gap-6 w-72 '>
          <input
            value={selectedAmount !== null ? `${selectedAmount}` : ""}
            placeholder='Select an amount'
            onChange={handleInputChange}
            className='w-full px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white'
          />
          <button
            className={`px-4 py-2 border transition rounded-full border-primary bg-primary text-white "
            }`}
          >
            Buy
          </button>
        </div>
      </div>
      <div className=' flex justify-end items-end w-full text-gray-800 '>
        Need a Demo?
      </div>
    </div>
  );
}
