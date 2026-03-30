"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experiences", href: "#exp" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
      w-full fixed top-0 left-0 z-50
      bg-white/70 dark:bg-black/60
      backdrop-blur-lg border-b
      border-black/10 dark:border-white/10
    "
    >
      <div
        className="
        max-w-7xl mx-auto px-6 py-4
        flex items-center justify-between
        text-black dark:text-white
      "
      >
        {/* Logo */}
        <div className="flex flex-col leading-tight font-medium">
          <span className="text-sm tracking-wide text-green-600 dark:text-green-400">
            Zelalem
          </span>
          <span className="text-sm tracking-wide">Yitbaarek</span>
        </div>

        {/* Desktop Menu - RIGHT SIDE */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium ml-auto">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="
                hover:text-green-600 dark:hover:text-green-400
                transition-colors duration-200
              "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 ml-auto"
        >
          <span className="w-6 h-[2px] bg-black dark:bg-white" />
          <span className="w-6 h-[2px] bg-black dark:bg-white" />
          <span className="w-6 h-[2px] bg-black dark:bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
          md:hidden
          bg-white/90 dark:bg-black/80
          backdrop-blur-lg
          text-black dark:text-white
          border-t border-black/10 dark:border-white/10
        "
        >
          <ul className="flex flex-col p-5 gap-5 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="
                  block
                  hover:text-green-600 dark:hover:text-green-400
                  transition
                "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}