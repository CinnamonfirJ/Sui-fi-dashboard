"use client"
// pages/index.js
import { ConnectButton } from '@suiet/wallet-kit';
import { useWallet } from '@suiet/wallet-kit';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const wallet = useWallet()
  const router = useRouter()

  useEffect(() => {
    if (!wallet.connected) return;
    console.log('connected wallet name: ', wallet.name)
    console.log('account address: ', wallet.account?.address)
    console.log('account publicKey: ', wallet.account?.publicKey)

    if(wallet.connected) {
      router.push('/dashboard');
    }
  }, [wallet.connected, router])

  return (
    <div className='flex min-w-screen min-h-screen justify-center items-center bg-gray-100'>
      <ConnectButton />
    </div>
  );
}
