// pages/index.js
import Sidebar from "./_components/Sidebar";
import Card from "./_components/Card";
import MinerCard from "./_components/MinerCard";
import Header from "./_components/Header";
import WalletBalance from "./_components/Wallet";
import CardGrid from "./_components/CardGrid";
import TransactionsList from "./_components/TransactionList";
import ExpensePieChart from "./_components/PieChart";
import QuickPayments from "./_components/QuickPayment";

export default function Home() {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <Sidebar />
      <main className='flex-1 p-10'>
        <Header />
        <div className='mt-10 grid grid-cols-3 gap-6'>
          <div className='col-span-2'>
            <WalletBalance />
            <CardGrid />
            <div className=' mt-10'>
              <h3 className='text-xl font-bold mb-6'>Tasks</h3>
              <div className=' grid grid-cols-2  gap-6 '>
                <MinerCard task='Invite' balance={"200"} />
                <MinerCard task='Invite' balance={"200"} />
                <MinerCard task='Invite' balance={"200"} />
              </div>
            </div>
            <TransactionsList />
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
