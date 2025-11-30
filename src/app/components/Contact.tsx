"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaGithub, FaTelegramPlane, FaLinkedin, FaEnvelope } from "react-icons/fa";
import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="w-full flex justify-center py-20 px-6" id="contact">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold text-blue-700 mb-6">
            Let's Work Together
          </h1>

          <div className="space-y-4">
            {/* Phone */}
            <ContactItem icon={<FaPhoneAlt />} text="+251966813898 / +251920811869" />

            {/* LinkedIn */}
            <Link 
              href="https://www.linkedin.com/in/zelalem-yitbarek-msc-a0a13924b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block"
            >
            <ContactItem icon={<FaLinkedin />} text="Zelalem Yitbarek" />
            </Link>
            {/* Telegram */}
            <Link 
              href="https://t.me/Zelalem22" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block"
            >
              <ContactItem icon={<FaTelegramPlane />} text="@Zelalem22" />
            </Link>

            {/* GitHub */}
            <Link 
              href="https://github.com/ZelalemYitbarek" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block"
            >
              <ContactItem icon={<FaGithub />} text="Zelalem Yitbarek" />
            </Link>

            {/* Email */}
            <Link 
              href="mailto:zelalemyitbarek80@gmail.com" 
              className="block"
            >
              <ContactItem icon={<FaEnvelope />} text="zelalemyitbarek80@gmail.com" />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <form
            action="/api/contact"
            method="POST"
            className="space-y-5 bg-white p-8 rounded-2xl border border-blue-200 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField name="firstName" placeholder="First Name" />
              <InputField name="lastName" placeholder="Last Name" />
            </div>

            <InputField name="subject" placeholder="Subject" />

            <textarea
              name="message"
              placeholder="Your Message Here..."
              rows={6}
              required
              className="w-full p-4 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />

            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 active:scale-95 transition"
            >
              Send Message
            </button>

            {/* Additional contact text */}
            <p className="mt-4 text-gray-700 text-sm">
              Or you can reach out directly by email: <span className="font-medium">zelalemyitbarek80@gmail.com</span>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* COMPONENTS */
type ContactItemProps = {
  icon: React.ReactNode;
  text: string;
};

function ContactItem({ icon, text }: ContactItemProps) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl border shadow-sm border-blue-300 bg-white hover:bg-blue-50 transition cursor-pointer">
      <span className="text-blue-600 text-xl">{icon}</span>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

type InputFieldProps = {
  name: string;
  placeholder: string;
};

function InputField({ name, placeholder }: InputFieldProps) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      required
      className="w-full p-4 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
