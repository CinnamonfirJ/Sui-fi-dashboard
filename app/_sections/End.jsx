import Link from "next/link";
import React from "react";

function End() {
  return (
    <div>
      <div className="block md:hidden p-4 sm:p-8 md:p-16 lg:p-20 text-white">
        <div className="bg-primary flex flex-col justify-center items-center gap-3 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center capitalize">
            Secure, seamless <span className="text-accent">Payments</span> in
            literally No <span className="text-accent">Time</span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-center max-w-3xl mx-auto mt-2 mb-4">
            Sui blockchain is optimized for low-latency, high-throughput
            transactions. By leveraging parallel processing, it can handle
            multiple transactions simultaneously, making it ideal for financial
            services requiring instant payments, real-time asset transfers, and
            seamless trading experiences. This speed minimizes delays, enabling
            smooth, on-demand financial operations
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 w-full">
            <Link
              href="/connectWallet"
              className="bg-white text-primary py-2 px-8 rounded-xl w-full sm:w-auto text-center transition-colors duration-300 hover:bg-gray-100"
            >
              Sign In
            </Link>
            <Link
              href="/"
              className="bg-gradient-to-r from-primary to-accent text-white py-2 px-8 rounded-xl w-full sm:w-auto text-center transition-colors duration-300 hover:from-primary hover:to-accent/90"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:block p-20 text-white">
        <div className=" bg-primary flex flex-col justify-center items-center gap-3 rounded-2xl p-8">
          <h3 className=" text-2xl capitalize">
            Secure, seamless <span className=" text-accent">Payments</span> in
            literally No <span className=" text-accent">Time</span>
          </h3>
          <p className=" text-center">
            Sui blockchain is optimized for low-latency, high-throughput
            transactions. By leveraging parallel processing, it can handle
            multiple transactions simultaneously, making it ideal for financial
            services requiring instant payments, real-time asset transfers, and
            seamless trading experiences. This speed minimizes delays, enabling
            smooth, on-demand financial operations
          </p>
          <div className=" flex max-md:justify-end gap-8">
            <Link
              href="/connectWallet"
              className="bg-white text-primary py-2 px-8 rounded-xl"
            >
              Sign In
            </Link>
            <Link
              href="/"
              className="bg-gradient-to-r from-primary to-accent text-white py-2 px-8 rounded-xl max-sm:hidden"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default End;
