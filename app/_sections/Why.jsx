import React from "react";

const features = [
  {
    name: "Fast Transactions",
    imgUrl: "/group.png",
    description:
      "Sui blockchain is optimized for low-latency, high-throughput transactions by leveraging parallel processing. It can handle multiple transactions simultaneously, making it ideal for financial services requiring instant payments and seamless trading experiences. This speed minimizes delays, enabling smooth, on-demand financial operations.",
  },
  {
    name: "Asset Ownership",
    imgUrl: "/speed.png",
    description:
      "Sui s unique object-centric model gives users clear, verifiable ownership of digital assets. This structure ensures that each asset, whether currency, tokens, or other digital forms, has a defined owner. Such a model is beneficial for decentralized finance (DeFi) solutions, offering users greater control, transparency, and flexibility in asset management.",
  },
  {
    name: "Security",
    imgUrl: "/vector.png",
    description:
      "Security on the Sui blockchain is robust, with mechanisms that prevent double-spending, fraud, and unauthorized access. By using a combination of consensus protocols and advanced cryptographic techniques, Sui ensures each transaction is secure and tamper-proof. This level of security is crucial for financial solutions that prioritize user protection and data integrity.",
  },
];

function Why() {
  return (
    <div className='flex flex-col gap-8 bg-white py-20 md:py-24'>
      <div>
        <h3 className=' text-4xl max-lg:text-2xl '>
          Why switch to decentralized
          <br />
          payment systems?
        </h3>
      </div>
      <div className=' flex justify-center items-center w-full '>
        <div className=' grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 justify-center items-center text-white'>
          {features.map((item, index) => (
            <div
              key={index}
              className=' flex flex-col items-center gap-4 max-w-80 p-9 rounded-xl bg-primary'
            >
              <div className=' flex justify-center items-center w-24 h-24 bg-[#60974E] rounded-full '>
                <img src={item.imgUrl} alt='' />
              </div>
              <h3 className=' text-[24px] '>{item.name}</h3>
              <p className=' text-[12px] text-center'>{item.description}</p>
              <a href='#' className=' text-[14px]'>
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why;
