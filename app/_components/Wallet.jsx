// components/WalletBalance.js
export default function WalletBalance() {
  return (
    <div className='bg-blue-700 text-white rounded-xl p-8 shadow-md'>
      <p className='text-lg font-medium'>Wallet Balance</p>
      <h2 className='text-4xl font-bold mt-2'>₦582,801.98</h2>
      <p className='text-sm mt-1'>Nigerian Naira</p>
      <button className='bg-white text-blue-700 px-6 py-2 mt-6 rounded-lg font-semibold shadow hover:bg-gray-100'>
        Fund Account
      </button>
    </div>
  );
}
