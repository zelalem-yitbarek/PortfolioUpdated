"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useCallback } from "react";

export default function DownloadCVButton() {
  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // File inside /public
    link.download = "Resume.pdf";
    link.style.display = "none";
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      onClick={handleDownload}
      className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 
                 hover:bg-blue-700 transition"
    >
      Download CV <Download className="w-4 h-4" />
    </motion.button>
  );
}
