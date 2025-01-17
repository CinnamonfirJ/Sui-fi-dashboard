"use client";
import { FaBell } from "react-icons/fa";
// import { ConnectButton } from "@suiet/wallet-kit";

// components/DashboardHeader.js
export default function Header() {
  return (
    <div className='flex items-center justify-between p-6 bg-white rounded-xl shadow-md'>
      <div>
        <p className='text-gray-600'>Welcome back,</p>
        <h2 className='text-2xl text-primary font-bold'>@pTech988</h2>
      </div>
      {/* <ConnectButton /> */}
      <div className='flex items-center space-x-4'>
        <button className='text-gray-600 hover:text-gray-800'>
          <FaBell />
        </button>
        <img
          src='/img1.jfif'
          alt='Profile'
          className='w-12 h-12 rounded-full border-2 border-gray-300'
        />
      </div>
    </div>
  );
}
