"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Experiences", href: "#exp" },
    { name: "My Works", href: "#works" },
    { name: "Certification", href: "#cert" },
    { name: "Contact Me", href: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-white/30 dark:bg-black/30 backdrop-blur-md z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-black dark:text-white">
        
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span className="text-sm tracking-wide">Zelalem</span>
          <span className="text-sm tracking-wide">Yitbaarek</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        {mounted && (
          <button
            className="hidden md:block"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-black dark:bg-white" />
          <span className="w-6 h-[2px] bg-black dark:bg-white" />
          <span className="w-6 h-[2px] bg-black dark:bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/30 dark:bg-black/30 backdrop-blur-md text-black dark:text-white">
          <ul className="flex flex-col p-4 gap-4 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Theme toggle on mobile */}
            {mounted && (
              <button
                className="flex items-center gap-2 mt-2"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? (
                  <>
                    <Moon className="w-5 h-5" /> Dark Mode
                  </>
                ) : (
                  <>
                    <Sun className="w-5 h-5" /> Light Mode
                  </>
                )}
              </button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
