"use client"; // Ensure this is a Client Component
// pages/index.js
import { ConnectButton } from "@suiet/wallet-kit";
import { useWallet } from "@suiet/wallet-kit";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const wallet = useWallet();
  const router = useRouter();

  // checks if wallet is connected, then routes you to the dashboard
  useEffect(() => {
    if (wallet.connected) {
      router.push("/dashboard");
    }
  }, [wallet.connected, router]);

  return (
    <div className='flex flex-col gap-3 min-w-screen min-h-screen justify-center items-center bg-gray-100'>
      <p className='font-bold text-xl text-primary'>
        Connect Your Wallet to Sign In
      </p>
      <ConnectButton className='bg-primary hover:bg-accent'>
        Connect Wallet
      </ConnectButton>
    </div>
  );
}
