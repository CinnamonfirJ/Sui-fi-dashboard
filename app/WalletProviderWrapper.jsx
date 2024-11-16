"use client"; // Ensure this is a Client Component
import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";

// wrapping the WalletProvider in a client component, 
// because the layout file is a server component and 
// would throw an error if WalletProvider is in a 
// server component in it's raw form.
export default function WalletProviderWrapper({ children }) {
  return(
    <WalletProvider>
        { children }
    </WalletProvider>
  );
}
