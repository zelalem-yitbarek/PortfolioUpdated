"use client";

import { motion } from "framer-motion";

export default function Experiences() {
  const experiences = [
    {
      date: "May 2022–November 2022",
      company: "Kenean Digital Technology",
      role: "Full stack developer",
      desc: "Built a e-commissioning superapp for Zumra360 app and It was built by PHP,MySQL, Bootstrap and JQuery.",
    },
    {
          date: "November 2022–July 2023",
          company: "Strivers Academy",
          role: "IT Instructor and System Administrator",
          desc: "Built and administrated the school system for the student grade recording,employee management and other tasks.",
    },
    {
      date: "July 2023–January 2025",
      company: "Branna Printing Enterprise",
      role: "Graphics Designer",
      desc: "Created cohesive layouts, icons, and graphics using Adobe Creative Cloud tools to ensure a modern, intuitive, visually appealing experience.",
    },
    {
      date: "January 2025–March 2025",
      company: "Afriwork Freelance Ethiopia",
      role: "UI/UX Designer",
      desc: "Designed desktop and mobile interfaces, wireframes, prototypes, and high-fidelity UI designs with Adobe XD, Illustrator, and Photoshop.",
    },
    {
      date: "April 2025–",
      company: "Trust Technology",
      role: "Graphics Designer, UI/UX Designer and Frontend",
      desc: "Developed responsive UI, created graphics, and delivered consistent branding across all platforms.",
    },
    {
      date: "Feb 2025–",
      company: "Premier Bet Et",
      role: "Graphics Designer (Remote)",
      desc: "Created layouts, icons, and graphics using Adobe Creative Cloud tools to enhance the user experience.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-20" id="#exp">
      <h2 className="text-center text-4xl font-bold text-blue-600 mb-14">
        Experiences
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-sm font-semibold text-blue-600 mb-2">{exp.date}</p>
            <h3 className="text-lg font-bold mb-1">{exp.company}</h3>
            <p className="font-medium text-gray-700 mb-2">{exp.role}</p>
            <p className="text-gray-600 leading-relaxed">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
