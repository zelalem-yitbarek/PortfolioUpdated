"use client"
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white px-8 py-6 mt-5">
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-500 pb-4">
        {/* Left Section */}
        <div className="flex flex-col items-start">
          <div className="flex flex-col leading-tight">
            <span className="text-sm tracking-wide text-white">Zelalem</span>
            <span className="text-sm tracking-wide text-white">Yitbaarek</span>
          </div>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="Telegram">
            <FaTelegramPlane className="text-xl hover:text-gray-400" />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF className="text-xl hover:text-gray-400" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn className="text-xl hover:text-gray-400" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="text-xl hover:text-gray-400" />
          </a>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between items-center text-sm text-gray-300 mt-4">
        <a href="#" className="hover:text-white">
          Terms and Conditions
        </a>
        <p>2025 Trust Technologies</p>
      </div>
    </footer>
  );
}
