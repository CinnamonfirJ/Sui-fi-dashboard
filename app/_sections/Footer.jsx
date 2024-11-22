import React from "react";
import {
  FaTwitter,
  FaDiscord,
  FaTelegram,
  FaQuestionCircle,
  FaEnvelope,
  FaHeadset,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary text-white py-8 md:pt-10">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row justify-between items-center xl:space-x-96">
        <div className="mb-8 lg:mb-0 lg:w-1/3">
          <img src="/image1.png" alt="SuiFi Logo" className="h-12 mb-4" />
          <p className="text-base mb-4 max-w-md">
            With SuiFi, we create the best payment experiences for our users.
          </p>
          <div className="flex space-x-4 text-xl">
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaDiscord className="hover:text-gray-300 cursor-pointer" />
            <FaTelegram className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:w-2/3 lg:pl-8">
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-base">
              <li className="hover:text-gray-300 cursor-pointer">Doc</li>
              <li className="hover:text-gray-300 cursor-pointer">Earn</li>
              <li className="hover:text-gray-300 cursor-pointer">Investors</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-base">
              <li className="hover:text-gray-300 cursor-pointer">About</li>
              <li className="hover:text-gray-300 cursor-pointer">Services</li>
              <li className="hover:text-gray-300 cursor-pointer">Contact us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-base">
              <li className="hover:text-gray-300 cursor-pointer">Getting started</li>
              <li className="hover:text-gray-300 cursor-pointer">Help center</li>
              <li className="hover:text-gray-300 cursor-pointer">Report a bug</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact us</h3>
            <ul className="space-y-2 text-base">
              <li className="flex items-center hover:text-gray-300 cursor-pointer">
                <FaQuestionCircle className="mr-2" /> FAQS
              </li>
              <li className="flex items-center hover:text-gray-300 cursor-pointer">
                <FaEnvelope className="mr-2" /> Email
              </li>
              <li className="flex items-center hover:text-gray-300 cursor-pointer">
                <FaHeadset className="mr-2" /> Support
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-8 pt-4 text-center text-base px-4">
        <p>Copyright © 2024 SuiFi</p>
        <p className="mt-2">
          All Rights Reserved |{" "}
          <a href="#" className="underline hover:text-gray-300">
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="underline hover:text-gray-300">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

