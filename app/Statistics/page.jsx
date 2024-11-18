"use client"; // Ensure this is a Client Component
// pages/index.js
import { useWallet } from "@suiet/wallet-kit";
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
import { useRouter } from "next/navigation";
import SectionHead from "../_components/SectionHead";
import SocialsTask from "../_components/SocialsTask";
import WebTask from "../_components/WebTask";
import PaymentCard from "../_components/PaymentCard";
import Dropdown from "../_components/DropDown";
import StatisticsCard from "../_components/StatisticsCard";

export default function Statistics() {
  const wallet = useWallet();
  const router = useRouter();

  // checks if wallet is connected, if not it routes you to the connect wallet screen
  useEffect(() => {
    if (!wallet.connected) {
      router.push("/");
    }
  }, [wallet.connected, router]);

  return (
    <div className='flex min-h-screen bg-gray-100'>
      <div className=' max-md:hidden'>
        <Sidebar />
      </div>
      <main className='flex-1 p-10'>
        <Header />
        <div className='mt-10 grid grid-cols-3 max-lg:grid-cols-2 gap-6'>
          <div className='col-span-2'>
            <SectionHead title={"Statistics"} />
            <Dropdown />
            <div className=' flex flex-col gap-8 '>
              <div>
                <h3 className='text-[12px] mb-6'>
                  Most Used Services (Last 30 days)
                </h3>
                <div className=' grid grid-cols-1  gap-6 '>
                  <StatisticsCard task='Gaming' img={"/gamepad.png"} />
                  <StatisticsCard task='Internet' img={"/globe.png"} />
                  <StatisticsCard task='Airtime' img={"/phone.png"} />
                  <StatisticsCard
                    task='Electricity'
                    img={"/lightningbolt.png"}
                  />
                </div>
              </div>
            </div>
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
