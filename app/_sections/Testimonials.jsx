"use client";
import { motion } from "framer-motion";
import TitleHead from "../_components/TitleHead";
import { FaRegSmile } from "react-icons/fa";

const testimonials = [
  {
    text: "“I cannot imagine myself using a conventional bank anymore. I no longer have to go on a date where the girl has to pay because of my bank issues",
    name: "@fortified",
    title: "0xed812nd1319dkzoweiq...",
  },
  {
    text: "“I cannot imagine myself using a conventional bank anymore. I no longer have to go on a date where the girl has to pay because of my bank issues",
    name: "@fortified",
    title: "0xed812nd1319dkzoweiq...",
  },
  {
    text: "“I cannot imagine myself using a conventional bank anymore. I no longer have to go on a date where the girl has to pay because of my bank issues",
    name: "@fortified",
    title: "0xed812nd1319dkzoweiq...",
  },
  {
    text: "“I cannot imagine myself using a conventional bank anymore. I no longer have to go on a date where the girl has to pay because of my bank issues",
    name: "@fortified",
    title: "0xed812nd1319dkzoweiq...",
  },
  {
    text: "“I cannot imagine myself using a conventional bank anymore. I no longer have to go on a date where the girl has to pay because of my bank issues",
    name: "@fortified",
    title: "0xed812nd1319dkzoweiq...",
  },
];

export const Testimonials = () => {
  return (
    <section className='py-20 md:py-24 overflow-hidden'>
      <div className='container'>
        <TitleHead
          tag={"Testimonials"}
          icon={<FaRegSmile />}
          title={"what our users say"}
        />

        <div className=' relative flex gap-8 mt-10 mb-10'>
          <div className=' [mask-image:linear-gradient(to_right,transparent,white_10%,white_80%,transparent)] pointer-events-none'></div>
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className='flex gap-5 flex-none'
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className='relative border border-black rounded-xl p-6 md:p-10 hover:bg-accent transition duration-300 max-w-xs md:max-w-md flex-none'
              >
                <div className='text-lg md:text-2xl tracking-tight'>
                  {testimonial.text}
                </div>
                <div className='flex items-center gap-3 mt-5'>
                  <div className='relative after:content-[""] after:absolute after:inset-0 after:bg-[rgb(89,194,232)] after:mix-blend-soft-light'>
                    <img
                      src={"/img1.jfif"}
                      width={20}
                      height={20}
                      alt={`Avatar for ${testimonial.name}`}
                      className='h-11 w-11 rounded-lg grayscale'
                    />
                  </div>
                  <div>
                    <div>{testimonial.name}</div>
                    <div className='text-black/70 text-sm'>
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
