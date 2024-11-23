"use client"; // Ensure this is a Client Component
// pages/index.js
import Sidebar from "../_components/Sidebar";
import Card from "../_components/Card";
import MinerCard from "../_components/MinerCard";
import Header from "../_components/Header";
import WalletBalance from "../_components/Wallet";
import CardGrid from "../_components/CardGrid";
import TransactionsList from "../_components/TransactionList";
import ExpensePieChart from "../_components/PieChart";
import QuickPayments from "../_components/QuickPayment";
import { useEffect } from "react";
import SectionHead from "../_components/SectionHead";
import EarnPage from "../_sections/Earn/EarnPage";

export default function Task() {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <div className=' max-md:hidden'>
        <Sidebar />
      </div>
      <main className='flex-1 p-10'>
        <Header />
        <div className='mt-10 grid grid-cols-3 max-lg:grid-cols-2 gap-6'>
          <div className='col-span-2'>
            <SectionHead
              title={"Earn"}
              icon={
                <svg
                  width='15'
                  height='16'
                  viewBox='0 0 15 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.5 14.25V7.5C1.0875 7.5 0.7345 7.35325 0.441 7.05975C0.1475 6.76625 0.0005 6.413 0 6V4.5C0 4.0875 0.147 3.7345 0.441 3.441C0.735 3.1475 1.088 3.0005 1.5 3H3.9C3.8375 2.8875 3.797 2.76875 3.7785 2.64375C3.76 2.51875 3.7505 2.3875 3.75 2.25C3.75 1.625 3.96875 1.09375 4.40625 0.65625C4.84375 0.21875 5.375 0 6 0C6.2875 0 6.55625 0.05325 6.80625 0.15975C7.05625 0.26625 7.2875 0.413 7.5 0.6C7.7125 0.4 7.94375 0.25 8.19375 0.15C8.44375 0.05 8.7125 0 9 0C9.625 0 10.1562 0.21875 10.5937 0.65625C11.0312 1.09375 11.25 1.625 11.25 2.25C11.25 2.3875 11.2375 2.51575 11.2125 2.63475C11.1875 2.75375 11.15 2.8755 11.1 3H13.5C13.9125 3 14.2657 3.147 14.5597 3.441C14.8537 3.735 15.0005 4.088 15 4.5V6C15 6.4125 14.8532 6.76575 14.5597 7.05975C14.2662 7.35375 13.913 7.5005 13.5 7.5V14.25C13.5 14.6625 13.3532 15.0157 13.0597 15.3097C12.7662 15.6037 12.413 15.7505 12 15.75H3C2.5875 15.75 2.2345 15.6032 1.941 15.3097C1.6475 15.0162 1.5005 14.663 1.5 14.25ZM9 1.5C8.7875 1.5 8.6095 1.572 8.466 1.716C8.3225 1.86 8.2505 2.038 8.25 2.25C8.2495 2.462 8.3215 2.64025 8.466 2.78475C8.6105 2.92925 8.7885 3.001 9 3C9.2115 2.999 9.38975 2.927 9.53475 2.784C9.67975 2.641 9.7515 2.463 9.75 2.25C9.7485 2.037 9.6765 1.859 9.534 1.716C9.3915 1.573 9.2135 1.501 9 1.5ZM5.25 2.25C5.25 2.4625 5.322 2.64075 5.466 2.78475C5.61 2.92875 5.788 3.0005 6 3C6.212 2.9995 6.39025 2.9275 6.53475 2.784C6.67925 2.6405 6.751 2.4625 6.75 2.25C6.749 2.0375 6.677 1.8595 6.534 1.716C6.391 1.5725 6.213 1.5005 6 1.5C5.787 1.4995 5.609 1.5715 5.466 1.716C5.323 1.8605 5.251 2.0385 5.25 2.25ZM1.5 4.5V6H6.75V4.5H1.5ZM6.75 14.25V7.5H3V14.25H6.75ZM8.25 14.25H12V7.5H8.25V14.25ZM13.5 6V4.5H8.25V6H13.5Z'
                    fill='#7C7C7C'
                  />
                </svg>
              }
              search={true}
            />
            <EarnPage />
          </div>
          <div className='space-y-6'>
            <ExpensePieChart />
            <QuickPayments />
          </div>
        </div>
      </main>
    </div>
  );
}
