// components/Card.js
export default function Card({ title, value }) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md text-center space-y-2'>
      <h3 className='text-gray-500 text-sm font-semibold'>{title}</h3>
      <p className='text-blue-500 text-2xl font-bold'>{value}</p>
      {/* Line chart placeholder */}
      <div className='w-full h-1 bg-blue-300 rounded-full mt-4'></div>
    </div>
  );
}
