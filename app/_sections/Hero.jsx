import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className=' flex'>
      <div className=' flex flex-col justify-center items-center md:pt-10 px-40 max-lg:px-5 text-white'>
        <h1 className=' text-6xl max-lg:text-4xl text-center mb-12 font-bold'>
          Empowering Financial Freedom through Blockchain Solutions
        </h1>
        <p className=' text-md text-center mb-12'>
          Experience the future of finance with blockchain technology, where
          security meets speed. Our decentralized solutions empower you with
          transparent and efficient transactions, ensuring your assets are
          protected while moving quickly across borders. Embrace financial
          freedom with a secure, high-performance platform built for the modern
          economy
        </p>
        <div className=' flex gap-8 mb-12'>
          <Link href='/connectWallet' className=' bg-white text-black py-2 px-8 rounded-xl'>
            Sign In
          </Link>
          <Link href='/' className=' bg-gradient-to-r from-primary to-accent text-white py-2 px-8 rounded-xl'>
            Watch Demo
          </Link>
        </div>
        <div>
          <img src='/image2.png' alt='' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
