import { useEffect, useState } from "react";
// import { useWallet } from "@mysten/wallet-kit";
import { Transaction } from "@mysten/sui/transactions";
import { useRouter } from "next/navigation";
import { useWallet } from "@suiet/wallet-kit";
// import { useAirtime } from "../context/useAirtime";

export default function Pay() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [additionalInput, setAdditionalInput] = useState(""); // For meter or smart card number
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showLeavePopup, setShowLeavePopup] = useState(false); // For cancellation confirmation
  const purchaseData = {
    phoneNumber: "",
    amount: 0,
  };

  const amounts = [1, 5, 10, 20, 25, 50];
  const services = ["Airtime", "Gaming", "Entertainment"];
  const wallet = useWallet();
  const router = useRouter();
  // const { buyAirtime } = useAirtime();

  console.log(wallet);
  // checks if wallet is connected, if not it routes you to the connect wallet screen
  useEffect(() => {
    if (!wallet.connected) {
      router.push("/");
    }
  }, [wallet.connected, router]);
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
    setShowConfirmationPopup(true);
    purchaseData.amount = formatNumber(
      (selectedAmount * conversionRate).toFixed(2)
    );
    purchaseData.phoneNumber = phoneNumber.replace("0", "+234");
    console.log(phoneNumber.replace("0", "+234"));

    // buyAirtime(purchaseData);
    console.log(`Here ${purchaseData.amount}`);
    console.log(`Again ${purchaseData.phoneNumber}`);
    // if (selectedAmount && additionalInput && selectedService) {
    // } else {
    //   alert("Please fill out all fields.");
    // }
  };

  const handleConfirmBuy = async () => {
    if (
      !selectedAmount || selectedService === "Airtime"
        ? !phoneNumber
        : !additionalInput
    ) {
      alert("Please provide all required details. 2");
      return;
    }

    await performTransactions(selectedAmount, additionalInput);
  };

  async function performTransactions(selectedAmount, additionalInput) {
    if (
      !selectedAmount || selectedService === "Airtime"
        ? !phoneNumber
        : !additionalInput
    ) {
      alert("Please provide all required details. 1");
      return;
    }
    // Create a new transaction
    const transaction = new Transaction();

    transaction.add({
      to: wallet.address,
      amount: selectedAmount,
    });

    try {
      //sign and execute the transaction
      const response = await wallet.signAndExecuteTransaction({
        transaction: transaction,
      });
      console.log("Transaction Successful:", response);
      alert("Airtime purchased successfully!");
    } catch (error) {
      console.log("Transaction failed:", error);
      console.log("Transaction Object:", transaction);
      alert("Transaction failed. Please try again.");
    }
  }

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
          value={selectedService === "Airtime" ? phoneNumber : additionalInput}
          onChange={(e) =>
            selectedService === "Airtime"
              ? setPhoneNumber(e.target.value)
              : setAdditionalInput(e.target.value)
          }
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
                  // alert("Payment Successful!");
                  handleConfirmBuy();
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
