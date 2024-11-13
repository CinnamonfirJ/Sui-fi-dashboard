// components/QuickPayments.js
export default function QuickPayments() {
  const payments = [
    "Pay Electricity",
    "Pay Internet",
    "Pay School Fees",
    "Pay Cable",
  ];
  return (
    <div className='bg-white p-6 rounded-xl shadow-md space-y-6'>
      <h3 className='text-xl font-bold'>Quick Payments</h3>
      {payments.map((payment, index) => (
        <div key={index} className='flex justify-between items-center'>
          <p className='font-medium'>{payment}</p>
          <button className='bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600'>
            Go
          </button>
        </div>
      ))}
    </div>
  );
}
