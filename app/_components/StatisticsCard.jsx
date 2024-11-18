import React from "react";

function StatisticsCard({ task, img }) {
  return (
    <div className='flex justify-start items-start gap-6 border-b p-4  rounded-2xl bg-gradient-to-r from-grad1 to-grad2'>
      <div className='flex flex-col gap-2 justify-center items-center bg-[#B2B2B2C9] p-4 w-28 h-28 rounded-lg shadow-md text-center '>
        <div>
          <img src={img} alt='' />
        </div>
        <div>
          <h3 className='text-white text-[14px]'>{task}</h3>
        </div>
      </div>
      <div className=' flex flex-col justify-between gap-4'>
        <h3>Amount Spent: $21,732.11 (Last 30 days)</h3>
        <div>
          <h3>Games: FIFA 22, Panzerdogs</h3>
          <p className=' text-[11px]'>
            Recommendation: Gaming uses 1.32% of your savings funds. It is a
            good number.
          </p>
          <span className=' text-[#FF0000] '>32%</span>
        </div>
      </div>
    </div>
  );
}

export default StatisticsCard;
