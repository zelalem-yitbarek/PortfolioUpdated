"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  percent: number;
  icon: string;
};

type SkillsCategory = {
  graphics: Skill[];
  uiux: Skill[];
  web: Skill[];
  data: Skill[];
};

function SkillBar({ skill }: { skill: Skill }) {
  const getColor = (percent: number) => {
    if (percent > 80) return "bg-green-700";
    if (percent >= 50) return "bg-orange-500";
    return "bg-red-700";
  };

  return (
    <div className="mb-2">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-6 h-6 relative">
          <Image
            src={skill.icon}
            alt={skill.name}
            fill
            style={{ objectFit: "cover", borderRadius: 4 }}
          />
        </div>

        <span className="text-sm font-medium">{skill.name}</span>
        <span className="ml-auto text-xs text-gray-500">{skill.percent}%</span>
      </div>

      <div className="w-full h-2 bg-gray-200/70 rounded-full relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percent}%` }}
          transition={{ duration: 1, delay: 0.15 }}
          viewport={{ once: true }}
          className={`${getColor(skill.percent)} h-full rounded-full absolute left-0 top-0`}
        />
      </div>
    </div>
  );
}

export default function About() {
  const skills: SkillsCategory = {
    graphics: [
      { name: "Adobe Photoshop", percent: 95, icon: "/Photoshop.png" },
      { name: "Adobe Illustrator", percent: 95, icon: "/illustrator.png" },
      { name: "Adobe Indesign", percent: 95, icon: "/Indesign.png" },
      { name: "Adobe Premiere Pro", percent: 70, icon: "/PremierPro.png" },
    ],
    uiux: [{ name: "Figma", percent: 90, icon: "/Figma.png" }],
    web: [
      { name: "React Js", percent: 90, icon: "/react.jpg" },
      { name: "Next Js", percent: 80, icon: "/nextjs-original.png" },
      { name: "Node Js", percent: 75, icon: "/node-logo.png" },
      {
        name: "Mongo DB",
        percent: 65,
        icon: "/mongodb-atlas-google-cloud-partnership-nosql-databases-integrations-2.jpg",
      },
    ],

    // ✅ NEW DATA ANALYSIS COLUMN
    data: [
      { name: "python", percent: 95, icon: "/Python.png" },
      { name: "SQL", percent: 80, icon: "/sql.png" },
      { name: "PostgreSQL", percent: 80, icon: "/postgres.png" },
    ],
  };

  return (
    <section id="about" className="w-full pt-6 pb-14 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* ABOUT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-4">About me</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10 max-w-4xl">
            A creative Graphics Designer, UI/UX Designer, and Frontend Developer skilled in
            crafting intuitive, visually engaging digital experiences. Experienced in turning
            ideas into user-centered designs with clean layouts and responsive interfaces.
            Proficient in modern design tools, prototyping, and front-end technologies.
            Also knowledgeable in Data Analysis using SQL, Python, and data visualization.
          </p>

          {/* SKILLS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full">

            <div>
              <h3 className="font-semibold mb-4">Graphics Design</h3>
              {skills.graphics.map((skill, i) => (
                <SkillBar key={`g-${i}`} skill={skill} />
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-4">UI/UX</h3>
              {skills.uiux.map((skill, i) => (
                <SkillBar key={`u-${i}`} skill={skill} />
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-4">Web Development</h3>
              {skills.web.map((skill, i) => (
                <SkillBar key={`w-${i}`} skill={skill} />
              ))}
            </div>

            {/* ✅ NEW COLUMN */}
            <div>
              <h3 className="font-semibold mb-4">Data Analysis</h3>
              {skills.data.map((skill, i) => (
                <SkillBar key={`d-${i}`} skill={skill} />
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
