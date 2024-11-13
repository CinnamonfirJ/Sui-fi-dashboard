// components/CardGrid.js
export default function CardGrid() {
  return (
    <div className='grid grid-cols-4 gap-4 mt-8'>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className='bg-gray-200 h-28 rounded-xl shadow-md border border-gray-300'
        ></div>
      ))}
    </div>
  );
}
