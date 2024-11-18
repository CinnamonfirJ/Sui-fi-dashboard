export default function PaymentCard({ task, img }) {
  return (
    <div className='flex flex-col gap-2 justify-center items-center bg-[#B2B2B2C9] p-4 rounded-lg shadow-md text-center '>
      <div className=' p-2'>
        <img src={img} alt='' />
      </div>
      <div>
        <h3 className='text-white text-[14px]'>{task}</h3>
      </div>
    </div>
  );
}
