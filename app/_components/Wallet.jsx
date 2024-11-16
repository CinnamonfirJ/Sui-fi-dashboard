import { useAccountBalance } from "@suiet/wallet-kit";

// components/WalletBalance.js
export default function WalletBalance() {
  const { error, loading, balance } = useAccountBalance(); //destructuring details from the AccountBalance

  return (
    <div className='bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8 shadow-md'>
      <p className='text-lg font-medium'>Wallet Balance</p>
      <h2 className='text-4xl font-bold mt-2'>
        {error ? "Error fetching Balance" : loading ? "loading" : balance}
      </h2>{" "}
      {/* conditionally render based on account state */}
      <p className='text-sm mt-1'>SUI</p>
      <button className='bg-white text-primary px-6 py-2 mt-6 rounded-lg font-semibold shadow hover:bg-gray-100'>
        Fund Account
      </button>
    </div>
  );
}
