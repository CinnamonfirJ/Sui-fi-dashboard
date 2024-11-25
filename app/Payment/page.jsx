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
import SectionHead from "../_components/SectionHead";
import SocialsTask from "../_components/SocialsTask";
import WebTask from "../_components/WebTask";
import PaymentCard from "../_components/PaymentCard";
import Pay from "../_components/Pay";

export default function Payment() {
  return (
    <div className='flex bg-gray-100'>
      <div className=' max-md:hidden'>
        <Sidebar />
      </div>
      <main className='flex-1 p-10'>
        <Header />
        <div className='mt-10 grid grid-cols-3 max-lg:grid-cols-2 gap-6'>
          <div className='col-span-2'>
            <SectionHead title={"Payment"} search={true} />
            <div className=' flex flex-col gap-8 mt-8'>
              <div>
                <Pay />
              </div>
              <div>
                <h3 className='text-xl font-bold mb-6'>Recents</h3>
                <div className=' grid grid-cols-4 max-lg:grid-cols-1  gap-6 '>
                  <PaymentCard task='Gaming' img={"/gamepad.png"} />
                  <PaymentCard task='Internet' img={"/globe.png"} />
                  <PaymentCard task='Airtime' img={"/phone.png"} />
                  <PaymentCard task='Electricity' img={"/lightningbolt.png"} />
                </div>
              </div>
              {/* <div>
                <h3 className='text-xl font-bold mb-6'>Essentials</h3>
                <div className=' grid grid-cols-4 max-lg:grid-cols-1  gap-6 '>
                  <PaymentCard task='Gaming' img={"/gamepad.png"} />
                  <PaymentCard task='Internet' img={"/globe.png"} />
                  <PaymentCard task='Airtime' img={"/phone.png"} />
                  <PaymentCard task='Electricity' img={"/lightningbolt.png"} />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-bold mb-6'>Lifestyle</h3>
                <div className=' grid grid-cols-4 max-lg:grid-cols-1  gap-6 '>
                  <PaymentCard task='Gaming' img={"/gamepad.png"} />
                  <PaymentCard task='Internet' img={"/globe.png"} />
                  <PaymentCard task='Airtime' img={"/phone.png"} />
                  <PaymentCard task='Electricity' img={"/lightningbolt.png"} />
                </div>
              </div> */}
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
