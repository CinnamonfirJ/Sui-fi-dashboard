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
import Link from "next/link";

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
    <div className='bg-gradient-to-b from-primary to-accent text-white h-screen sticky top-0 left-0 p-6  flex flex-col'>
      <h1 className='text-2xl font-bold mb-8 max-lg:hidden'>SuiFi.</h1>
      <nav className='space-y-8'>
        <Link
          href='./dashboard'
          className='flex items-center space-x-3 hover:bg-accent p-2 rounded-md'
        >
          <span>
            <FaHome />
          </span>{" "}
          <span className=' max-lg:hidden'>Home</span>
        </Link>
        <Link
          href='/Payment'
          className='flex items-center space-x-3 hover:bg-accent p-2 rounded-md'
        >
          <span>
            <FaMoneyBill />
          </span>{" "}
          <span className=' max-lg:hidden'>Payments</span>
        </Link>
        <Link
          href='/Earn'
          className='flex items-center space-x-3 hover:bg-accent p-2 rounded-md'
        >
          <span>
            <FaExchangeAlt />
          </span>{" "}
          <span className=' max-lg:hidden'>Earn</span>
        </Link>
        <Link
          href='/Statistics'
          className='flex items-center space-x-3 hover:bg-accent p-2 rounded-md'
        >
          <span>
            {" "}
            <FaUsers />
          </span>{" "}
          <span className=' max-lg:hidden'>Statistics</span>
        </Link>
      </nav>

      <div
        onClick={handleDisconnect}
        className='mt-auto cursor-pointer flex items-center space-x-3 hover:bg-accent p-2 rounded-md'
      >
        <span>
          <FaDoorClosed />
        </span>{" "}
        <span className=' max-lg:hidden'>Logout</span>
      </div>
    </div>
  );
}
