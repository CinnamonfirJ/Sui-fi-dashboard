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
import { useWallet } from "@suiet/wallet-kit";

// components/Sidebar.js
export default function Sidebar() {
  const { connected, disconnect } = useWallet(); // destructuring the connect and disconnect function fron useWallet

  // function to isconnect the wallet and log you out
  const handleDisconnect = () => {
    if (connected) {
      disconnect();
    }
  };

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

      <div
        onClick={handleDisconnect}
        className='mt-auto cursor-pointer flex items-center space-x-3 hover:bg-blue-800 p-2 rounded-md'
      >
        <span>
          <FaDoorClosed />
        </span>{" "}
        <span>Logout</span>
      </div>
    </div>
  );
}
