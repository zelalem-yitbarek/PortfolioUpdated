"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const behanceUrl = "https://www.behance.net/gallery/239504043/Portfolio";

  return (
    <section className="w-full min-h-screen relative flex items-center justify-center py-10 px-6 bg-gradient-to-b from-white via-blue-50/50 to-white dark:from-black dark:via-blue-950/30 dark:to-black overflow-hidden">
      
      {/* FANCY ANIMATED BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-72 h-72 bg-blue-300/30 rounded-full top-10 left-10 filter blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.div
          className="absolute w-60 h-60 bg-purple-300/20 rounded-full bottom-20 right-20 filter blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-pink-300/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 filter blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "loop" }}
        />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE — TEXT */}
        <div className="text-left z-10">

          {/* Hello */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl mb-3 flex items-center gap-2"
          >
            Hello
            <motion.span
              animate={{ rotate: [0, 15, -10, 15, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="inline-block origin-bottom"
            >
              👋
            </motion.span>
          </motion.div>

          {/* Main Heading — from LEFT to CENTER */}
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-blue-600 leading-snug"
          >
            I’m Zelalem Yitbarek —<br />
            Turner of Ideas into reality
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mt-6 text-gray-700 dark:text-gray-300 text-[15px]"
          >
            An experienced UI/UX Designer, Graphics Designer, and Front-end Developer
            who turns ideas into the real world.
          </motion.p>

          {/* Button */}
          <motion.a
            href={behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="inline-flex mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg items-center gap-2 hover:bg-blue-700 transition"
          >
            View My Portfolio <Eye className="w-4 h-4" />
          </motion.a>
        </div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center z-10"
        >
          {/* Circle behind half of the image */}
          <div className="absolute w-80 h-80 rounded-full bg-blue-300/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] filter blur-2xl"></div>

          <Image
            src="/image.png"
            alt="Profile Illustration"
            width={480}
            height={480}
            className="rounded-xl object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
