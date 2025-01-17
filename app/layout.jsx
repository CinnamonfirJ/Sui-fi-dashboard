import localFont from "next/font/local";
import "./globals.css";
// import Header from "./_components/Header";
import WalletProviderWrapper from "./WalletProviderWrapper";
// import { AirtimeProvider } from "./context/useAirtime";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sui-Fi",
  icons: {
    icon: "/public/logo.svg",
  },
  description: "A decentralized finance platform, built on the sui blockchain.",
};

// PS: the WalletProvider is a client component, and can't be here,
// so i moved it to a seperate component, then import it into this
// layout file if not there would have been an error
// check WalletProviderWrapper.jsx
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WalletProviderWrapper>
          {/* <AirtimeProvider> */}
          <div>
            {/* <Header /> */}
            {children}
          </div>
          {/* </AirtimeProvider> */}
        </WalletProviderWrapper>
      </body>
    </html>
  );
}
