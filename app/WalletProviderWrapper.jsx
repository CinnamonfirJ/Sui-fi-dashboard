"use client"; // Ensure this is a Client Component

import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";

export default function WalletProviderWrapper({ children }) {
  return <WalletProvider>{children}</WalletProvider>;
}
