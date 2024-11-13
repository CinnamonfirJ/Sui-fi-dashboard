// components/TransactionsList.js
export default function TransactionsList() {
  return (
    <div className='mt-8 bg-white p-6 rounded-xl shadow-md'>
      <h3 className='text-xl font-bold'>Transactions</h3>
      <div className='space-y-4 mt-6'>
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className='flex justify-between items-center border-b pb-4'
          >
            <div>
              <p className='text-black font-medium'>Pay Electricity</p>
              <p className='text-gray-500 text-sm'>******** Account Prepaid</p>
            </div>
            <p className='text-black font-semibold'>-₦8,710.09</p>
          </div>
        ))}
      </div>
    </div>
  );
}
