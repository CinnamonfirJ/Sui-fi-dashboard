import Link from "next/link";
import React from "react";

function End() {
  return (
    <div className=' p-20 text-white'>
      <div className=' bg-primary flex flex-col justify-center items-center gap-3 rounded-2xl p-8'>
        <h3 className=' text-2xl capitalize'>
          Secure, seamless <span className=' text-accent'>Payments</span> in
          literally No <span className=' text-accent'>Time</span>
        </h3>
        <p className=' text-center'>
          Sui blockchain is optimized for low-latency, high-throughput
          transactions. By leveraging parallel processing, it can handle
          multiple transactions simultaneously, making it ideal for financial
          services requiring instant payments, real-time asset transfers, and
          seamless trading experiences. This speed minimizes delays, enabling
          smooth, on-demand financial operations
        </p>
        <div className=' flex max-md:justify-end gap-8'>
          <Link href='/connectWallet' className='bg-white text-primary py-2 px-8 rounded-xl'>
            Sign In
          </Link>
          <Link href='/' className='bg-gradient-to-r from-primary to-accent text-white py-2 px-8 rounded-xl max-sm:hidden'>
            Watch Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default End;
