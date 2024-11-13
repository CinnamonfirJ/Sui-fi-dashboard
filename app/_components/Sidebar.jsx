// components/Sidebar.js
import {
  FaCloud,
  FaMoneyBill,
  FaExchangeAlt,
  FaUsers,
  FaQuestionCircle,
  FaSignOutAlt,
  FaDoorClosed,
  FaHome,
} from "react-icons/fa";

// components/Sidebar.js
export default function Sidebar() {
  return (
    <div className='bg-blue-900 text-white h-screen sticky top-0 left-0 p-6  flex flex-col'>
      <h1 className='text-2xl font-bold mb-8'>SuiFi.</h1>
      <nav className='space-y-8'>
        <a
          href='#'
          className='flex items-center space-x-3 hover:bg-blue-800 p-2 rounded-md'
        >
          <span>
            <FaHome />
          </span>{" "}
          <span>Home</span>
        </a>
        <a
          href='#'
          className='flex items-center space-x-3 hover:bg-blue-800 p-2 rounded-md'
        >
          <span>
            <FaMoneyBill />
          </span>{" "}
          <span>Payments</span>
        </a>
        <a
          href='#'
          className='flex items-center space-x-3 hover:bg-blue-800 p-2 rounded-md'
        >
          <span>
            <FaExchangeAlt />
          </span>{" "}
          <span>Earn</span>
        </a>
        <a
          href='#'
          className='flex items-center space-x-3 hover:bg-blue-800 p-2 rounded-md'
        >
          <span>
            {" "}
            <FaUsers />
          </span>{" "}
          <span>Statistics</span>
        </a>
      </nav>
      <a
        href='#'
        className='mt-auto flex items-center space-x-3 hover:bg-blue-800 p-2 rounded-md'
      >
        <span>
          <FaDoorClosed />
        </span>{" "}
        <span>Logout</span>
      </a>
    </div>
  );
}
