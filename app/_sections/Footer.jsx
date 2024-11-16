import React from "react";
import {
  FaDiscord,
  FaEnvelope,
  FaHeadset,
  FaQuestionCircle,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className=' bg-primary text-white'>
      <div className=' mx-20 py-10 flex max-md:flex-col gap-8 justify-between max-md:justify-center items-center'>
        <div>
          <img src='/image1.png' className=' h-12' />
          With SuiFi, we create the best payment experiences for our users.
        </div>
        <div className=' grid gap-12 grid-cols-3 max-md:grid-cols-1'>
          <div>
            <h3 className=' text-2xl mb-2'>About Us</h3>
            <ul className=' flex flex-col gap-3'>
              <li>Docs</li>
              <li>Earn</li>
              <li>Investors</li>
            </ul>
          </div>
          <div>
            <h3 className=' text-2xl mb-2'>Socials</h3>
            <ul className=' flex flex-col gap-3'>
              <li className=' flex items-center gap-2'>
                <FaTwitter /> Twitter
              </li>
              <li className=' flex items-center gap-2'>
                <FaDiscord /> Discord
              </li>
              <li className=' flex items-center gap-2'>
                <FaTelegram /> Telegram
              </li>
            </ul>
          </div>
          <div>
            <h3 className=' text-2xl mb-2'>Contact Us</h3>
            <ul className=' flex flex-col gap-3'>
              <li className=' flex items-center gap-2'>
                <FaQuestionCircle /> FAQs
              </li>
              <li className=' flex items-center gap-2'>
                <FaEnvelope /> Email
              </li>
              <li className=' flex items-center gap-2'>
                <FaHeadset /> Support
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=' flex justify-end items-center px-12 pb-5'>
        Copyright ©SuiFi, 2024 All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
