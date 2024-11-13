// components/MinerCard.js
// components/Sidebar.js
import {
  FaCloud,
  FaMoneyBill,
  FaExchangeAlt,
  FaUsers,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
export default function MinerCard({ task, gpuPower, balance }) {
  return (
    <div className='flex justify-between items-center bg-white p-4 rounded-lg shadow-md text-center '>
      <div className='flex items-center space-x-2 cursor-pointer text-blue-500 text-4xl'>
        <FaMoneyBill />
      </div>
      <div>
        <h3 className='text-gray-500 text-lg font-semibold'>{task}</h3>
        <p className='text-gray-600 text-sm'>{balance}</p>
      </div>
    </div>
  );
}
