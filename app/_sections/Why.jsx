'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

const features = [
  {
    name: "Fast Transactions",
    imgUrl: "/group.png",
    description: "Sui blockchain is optimized for low-latency, high-throughput transactions by leveraging parallel processing. It can handle multiple transactions simultaneously, making it ideal for financial services requiring instant payments and seamless trading experiences. This speed minimizes delays, enabling smooth, on-demand financial operations.",
    color: "from-green-500 to-green-800",
    tags: ["TESTING", "ANALYZE"],
    imgUrl: "/group.png",
  },
  {
    name: "Asset Ownership",
    imgUrl: "/speed.png",
    description: "Sui's unique object-centric model gives users clear, verifiable ownership of digital assets. This structure ensures that each asset, whether currency, tokens, or other digital forms, has a defined owner. Such a model is beneficial for decentralized finance (DeFi) solutions, offering users greater control, transparency, and flexibility in asset management.",
    color: "from-green-500 to-green-800",
    tags: ["SECURE", "FAST"],
    imgUrl: "/speed.png",
  },
  {
    name: "Security",
    imgUrl: "/vector.png",
    description: "Security on the Sui blockchain is robust, with mechanisms that prevent double-spending, fraud, and unauthorized access. By using a combination of consensus protocols and advanced cryptographic techniques, Sui ensures each transaction is secure and tamper-proof. This level of security is crucial for financial solutions that prioritize user protection and data integrity.",
    color: "from-green-500 to-green-800",
    tags: ["UI", "UX"],
    imgUrl: "/vector.png",
  },
]

const WaveBackground = ({ color }) => {
  return (
    <div className={`absolute bottom-0 left-0 right-0 h-20 rounded-b-2xl overflow-hidden transition-all duration-500 group-hover:h-2/3`}>
      <div className={`absolute inset-0 bg-gradient-to-b ${color} opacity-90`}>
        <svg
          className="absolute bottom-0 w-full h-28 group-hover:h-80 transition-transform duration-700 ease-in-out transform translate-y-12 group-hover:translate-y-8"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 25 Q 25 40 50 25 Q 75 10 100 25 L 100 100 L 0 100 Z"
            className="fill-current text-white opacity-20"
          >
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values="
                M0 25 Q 25 40 50 25 Q 75 10 100 25 L 100 100 L 0 100 Z;
                M0 25 Q 25 10 50 25 Q 75 40 100 25 L 100 100 L 0 100 Z;
                M0 25 Q 25 40 50 25 Q 75 10 100 25 L 100 100 L 0 100 Z"
            />
          </path>
        </svg>
      </div>
    </div>
  )
}

function FeatureCard() {
  return (
    <div className='flex flex-col gap-8 bg-white py-20 md:py-24'>
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center ms-auto relative group hover:cursor-pointer text-3xl max-lg:text-2xl mb-16 uppercase">
          Why switch to decentralized
          payment systems?
          <span className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-32"></span>
        </h2>
        
        <div className='flex justify-center items-center w-full hover:cursor-pointer'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center'>
            {features.map((item, index) => (
              <div
                key={index}
                className='group relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[400px] overflow-hidden'
              >
                <div className='relative z-10 flex flex-col items-center gap-4'>
                  <div className='flex justify-center items-center w-16 h-16 bg-[#60974E] rounded-full shadow-md'>
                    <Image
                      src={item.imgUrl}
                      alt={item.name}
                      width={32}
                      height={32}
                    />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-800'>{item.name}</h3>
                  <div className='flex gap-2 mb-2'>
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className='px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-full'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className='text-sm text-center text-gray-600 group-hover:text-white mb-4 z-10'>
                    {item.description}
                  </p>
                  <a
                    href='#'
                    className='text-sm text-white hover:underline z-10'
                  >
                    Learn more →
                  </a>
                </div>
                <WaveBackground color={item.color} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard

