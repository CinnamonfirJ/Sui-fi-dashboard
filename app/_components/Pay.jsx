import { useState } from "react";

export default function Pay() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [additionalInput, setAdditionalInput] = useState(""); // For meter or smart card number
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showLeavePopup, setShowLeavePopup] = useState(false); // For cancellation confirmation

  const amounts = [1, 5, 10, 20, 25, 50];
  const services = ["Airtime", "Gaming", "Entertainment"];

  // Simulated SUI-to-Naira conversion rate
  const conversionRate = 300; // 1 SUI = 300 Naira

  // Format number with commas
  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  const handleButtonClick = (amount) => {
    setSelectedAmount(amount);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setSelectedAmount(value);
    }
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
    setPhoneNumber("");
    setAdditionalInput("");
  };

  const handleBuyClick = () => {
    if (selectedAmount && additionalInput && selectedService) {
      setShowConfirmationPopup(true);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className='flex flex-col items-center gap-6 p-6 bg-white rounded-lg shadow-lg w-full max-w-xl mx-auto'>
      <h2 className='text-2xl font-bold text-gray-800'>
        Select Payment Details
      </h2>

      {/* Amount Selection */}
      <div className='grid grid-cols-3 gap-4 w-full'>
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => handleButtonClick(amount)}
            className={`px-6 py-3 text-lg font-semibold rounded-lg transition ${
              selectedAmount == amount
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            + {formatNumber(amount)} SUI
          </button>
        ))}
      </div>

      {/* Manual Input for Amount */}
      <input
        type='text'
        value={selectedAmount !== null ? `${selectedAmount}` : ""}
        placeholder='Enter amount'
        onChange={handleInputChange}
        className='w-full px-4 py-2 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400'
      />

      {/* Display Converted Amount */}
      {selectedAmount && (
        <p className='text-gray-600 mt-2'>
          Equivalent in Naira:{" "}
          <strong>
            {formatNumber((selectedAmount * conversionRate).toFixed(2))} NGN
          </strong>
        </p>
      )}

      {/* Service Selection */}
      <select
        value={selectedService}
        onChange={handleServiceChange}
        className='w-full px-4 py-2 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400'
      >
        <option value=''>Select a service</option>
        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>

      {/* Additional Input */}
      {(selectedService === "Airtime" ||
        selectedService === "Gaming" ||
        selectedService === "Entertainment") && (
        <input
          type='text'
          value={additionalInput}
          onChange={(e) => setAdditionalInput(e.target.value)}
          placeholder={
            selectedService === "Airtime"
              ? "Enter Phone Number"
              : selectedService === "Gaming"
              ? "Enter iLot Phone Number"
              : "Enter Smart Card Number"
          }
          className='w-full px-4 py-2 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400'
        />
      )}

      {/* Buy Button */}
      <button
        onClick={handleBuyClick}
        className='px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition w-full'
      >
        Proceed to Pay
      </button>

      {/* Confirmation Popup */}
      {showConfirmationPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full animate-fadeIn'>
            <h3 className='text-xl font-bold text-gray-800 mb-4'>
              Confirm Your Payment
            </h3>
            <div className='space-y-2'>
              <p>
                <strong>Amount:</strong> {formatNumber(selectedAmount)} SUI
              </p>
              <p>
                <strong>Equivalent in Naira:</strong>{" "}
                {formatNumber((selectedAmount * conversionRate).toFixed(2))} NGN
              </p>
              {selectedService === "Airtime" && (
                <p>
                  <strong>Phone Number:</strong> {additionalInput}
                </p>
              )}
              {selectedService === "Gaming" && (
                <p>
                  <strong>iLot Number:</strong> {additionalInput}
                </p>
              )}
              {selectedService === "Entertainment" && (
                <p>
                  <strong>Smart Card Number:</strong> {additionalInput}
                </p>
              )}
              <p>
                <strong>Service:</strong> {selectedService}
              </p>
            </div>
            <div className='flex justify-between mt-4'>
              <button
                onClick={() => setShowLeavePopup(true)}
                className='px-6 py-2 bg-gray-300 text-gray-800 font-bold rounded-lg hover:bg-gray-400 transition'
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("Payment Successful!");
                  setShowConfirmationPopup(false);
                }}
                className='px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition'
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Leave Confirmation Popup */}
      {showLeavePopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center animate-fadeIn'>
            <h3 className='text-xl font-bold text-gray-800 mb-4'>
              Payment is not yet complete
            </h3>
            <p className='text-sm font-bold text-gray-500 mb-4'>
              Are you sure you want to leave?
            </p>
            <div className='flex justify-between'>
              <button
                onClick={() => {
                  setShowConfirmationPopup(false);
                  setShowLeavePopup(false);
                }}
                className='px-6 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 font-bold rounded-lg transition'
              >
                Leave
              </button>
              <button
                onClick={() => setShowLeavePopup(false)}
                className='px-6 py-2 bg-green-500 text-white hover:bg-green-600 font-bold rounded-lg transition'
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
