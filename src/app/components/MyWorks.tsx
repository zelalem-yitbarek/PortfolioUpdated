"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ashenda from "../../../public/Ashenda.png";
import mawlid from "../../../public/mawlid.jpg";
import meskel from "../../../public/meskel_poster.jpg";
import Bomag from "../../../public/Bomag.jpg";
import jcb from "../../../public/jcb_220x_excavator.jpg";
import mobile from "../../../public/Mobile_App_dev.jpg";
import innovativeapp from "../../../public/Innovative_App.jpg";
import promotion from "../../../public/promotion.jpg";
import bonus from "../../../public/bonus1.png";
import casino from "../../../public/casino.png";
import muncry from "../../../public/cry Vs mun.png";
import Happy_Week from "../../../public/Happy_Week.png";
import erling from "../../../public/erling_halland.png";
import Komatsu from "../../../public/komatsu.jpg";
import dump from "../../../public/Dump Truck.jpg";
import livnott from "../../../public/Liv Vs Nott.png";
import selamjew from "../../../public/SelamJew.jpg";
import selamjew2 from "../../../public/SelamJew2.jpg";
import selamjew3 from "../../../public/SelamJew4.jpg";
import Selamjew4 from "../../../public/SelamJew5.jpg";
import Selamjew5 from "../../../public/SelamJew6.jpg";
import alphatech from "../../../public/AlphaTech.jpg";
import alphatech2 from "../../../public/Alphatech2.jpg";
import alphatech3 from "../../../public/Alphatech3.jpg";
import alphatech4 from "../../../public/Alphatech4.jpg";
import hamerecoff from "../../../public/hamerecoffee.jpg";
import hamerecoff2 from "../../../public/hamerecoffee2.jpg";
import hamerecoff3 from "../../../public/hamerecoffee3.jpg";
import adrashui1 from "../../../public/uiux/1stdesign.jpg";
import adrasgui2 from "../../../public/uiux/2nd.jpg";
import adrash3 from "../../../public/uiux/3rd.jpg";
import adrash4 from "../../../public/uiux/4.jpg";
import adrash5 from "../../../public/uiux/5th.jpg";
import digeder1 from "../../../public/uiux/digeder1.jpg";
import digeder2 from "../../../public/uiux/digeder2.jpg";
import digeder3 from "../../../public/uiux/digeder3.jpg";
import digeder4 from "../../../public/uiux/digeder4.jpg";
import DashenBank from "../../../public/uiux/DashenBankNew.jpg";
import Keberchacha from "../../../public/uiux/keberchaha.jpg";
import Keberchahca2 from "../../../public/uiux/keberchaha2.jpg";
import Keberechacha3 from "../../../public/uiux/keberchaha3.jpg";
import Keberecha4 from "../../../public/uiux/keberchaha4.jpg";
import Anbessa from "../../../public/uiux/Anbessaa.png";
import Anbessa2 from "../../../public/uiux/Anbessa2.jpg";
import Alem from "../../../public/uiux/ALem1.jpg";
import Alem2 from "../../../public/uiux/Alem2.png";
import Trust1 from "../../../public/uiux/Trust1.jpg";
import Trust2 from "../../../public/uiux/Trust2.jpg";
import Trust3 from "../../../public/uiux/Trust3.jpg";
import Trust4 from "../../../public/uiux/Trust4.jpg";
import Trust5 from "../../../public/uiux/Trust5.jpg";
import Trust6 from "../../../public/uiux/Trust6.jpg";
import lap from "../../../public/miscellnous/lap.jpg"
import boat from "../../../public/miscellnous/boat.jpg"
import city from "../../../public/miscellnous/city.jpg"
import eye from "../../../public/miscellnous/eye.jpg"
import cuplio from "../../../public/miscellnous/cuplion.jpg"
import ethchild from "../../../public/miscellnous/ethchild.jpg"
import girl from "../../../public/miscellnous/girl.jpg"
import underwater from "../../../public/miscellnous/underwater.jpg"
import tela from "../../../public/miscellnous/tela.jpg"
import illust from "../../../public/miscellnous/illustration.jpg"
import prest from "../../../public/miscellnous/prest.jpg"
import conc_mixer from "../../../public/Concrete_Mixer_vechile.jpg"
import buildurweb from "../../../public/lets_build_ur_website.jpg"
import LMS from "../../../public/LMS.jpg"
import mobapp2 from "../../../public/mobapp2.jpg"
import demera from "../../../public/demera.jpg"
import Janoo1 from "../../../public/Janoo1.jpg"
import Janoo2 from "../../../public/Janoo2.jpg"
import Janoo3 from "../../../public/Janoo3.jpg"
import Janoo4 from "../../../public/Janoo4.jpg"
import Janoo5 from "../../../public/Janoo5.jpg"
import Janoo6 from "../../../public/Janoo6.jpg"
import Janoo7 from "../../../public/Howtomake.jpg"
import Janoo8 from "../../../public/Jano_yimchal.jpg"
import Eid from "../../../public/Eid_Al_Adha.jpg"
import BuildDream from "../../../public/builddream (1).jpg"
import BuildDream2 from "../../../public/builddream (2).jpg"
import BuildDream3 from "../../../public/builddream (3).jpg"
import BuildDream4 from "../../../public/builddream (4).jpg"
import Pele from "../../../public/Pele_Happy_New_Week.png"
import Machine from "../../../public/machine (1).jpg"
import Machine2 from "../../../public/machine (2).jpg"
import bet1 from "../../../public/betting (1).png"
import bet2 from "../../../public/betting (2).png"
import bet3 from "../../../public/betting (3).png"


type Work = {
  id: number;
  title: string;
  category: string;
  src: StaticImageData[];
  hoverText?: string;
};

export default function MyWorks() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const works: Work[] = [
    { id: 1, title: "Graphics 1", category: "Graphics", src: [ashenda, mawlid, meskel,demera,Eid], hoverText: "Holiday Post" },
    { id: 2, title: "Graphics 3", category: "Graphics", src: [Bomag, jcb, Komatsu, dump,conc_mixer,BuildDream,BuildDream2,BuildDream,BuildDream3,BuildDream4,Machine,Machine2], hoverText: "Machinery Rental Posts" },
    { id: 3, title: "UI/UX 1", category: "Graphics", src: [mobile, innovativeapp, promotion,buildurweb,LMS,mobapp2,Janoo1,Janoo2,Janoo3,Janoo4,Janoo5,Janoo6,Janoo7,Janoo8], hoverText: "Tech Promotional" },
    { id: 4, title: "Graphics 4", category: "Graphics", src: [Happy_Week,Pele], hoverText: "Happy Monday" },
    { id: 5, title: "Graphics 5", category: "Graphics", src: [bonus, muncry, casino, livnott, erling,bet1,bet2,bet3], hoverText: "Betting Ads" },
    { id: 6, title: "Logo", category: "Logofolio", src: [selamjew2, selamjew, selamjew3, Selamjew4, Selamjew5, alphatech, alphatech2, alphatech3, alphatech4, hamerecoff, hamerecoff2, hamerecoff3], hoverText: "Logofolio" },
    { id: 7, title: "UI/UX", category: "UIUX", src: [Anbessa, Anbessa2, Alem, Alem2, adrashui1, adrasgui2, adrash3, adrash4, adrash5, digeder1, digeder2, digeder3, digeder4, DashenBank, Keberchacha, Keberchahca2, Keberechacha3, Keberecha4, Trust1, Trust2, Trust3, Trust4, Trust5, Trust6], hoverText: "UI/UX Designs" },
    
    // Miscellaneous category
    { id: 8, title: "Miscellaneous", category: "Miscellaneous", src: [lap,boat,city,eye,cuplio,ethchild,girl,underwater,tela,illust,prest], hoverText: "Misscellaneous" },
  ];

  const filteredWorks = activeTab === "All"
    ? works
    : works.filter((item) => item.category === activeTab);

  if (!mounted) return null;

  return (
    <div className="w-full flex flex-col items-center pt-10 px-5" id="works">
      <h1 className="text-3xl font-bold text-blue-600">My Works</h1>
      <p className="text-gray-500 text-sm">Just a spoon from the sea</p>

      {/* Tabs */}
      <div className="flex gap-6 mt-6 font-medium text-gray-600">
        {["All", "Logofolio", "Graphics", "UIUX", "Miscellaneous"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : ""}`}
          >
            {tab === "UIUX"
              ? "UI/UX Design"
              : tab === "Graphics"
              ? "Graphics Design"
              : tab === "Logofolio"
              ? "Logofolio"
              : tab === "Miscellaneous"
              ? "Miscellaneous"
              : "All"}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        {filteredWorks.map((item) => (
          <div
            key={item.id}
            onClick={() => { setSelectedWork(item); setCurrentSlide(0); }}
            className="relative group cursor-pointer overflow-hidden"
          >
            <Image
              src={item.src[0]}
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-[250px] object-cover"
            />

            {/* Hover text */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
              <p className="text-white text-lg font-semibold">{item.hoverText ?? item.category}</p>
            </div>

            {/* Multi-image indicator */}
            {item.src.length > 1 && (
              <span className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                {item.src.length} images
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedWork(null)}
        >
          <div className="w-full max-w-4xl relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedWork.src[currentSlide]}
              alt={selectedWork.title}
              width={1200}
              height={800}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Carousel buttons */}
            {selectedWork.src.length > 1 && (
              <>
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 bg-black/50 rounded-full hover:bg-black/70"
                  onClick={() => setCurrentSlide((prev) => prev === 0 ? selectedWork.src.length - 1 : prev - 1)}
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 bg-black/50 rounded-full hover:bg-black/70"
                  onClick={() => setCurrentSlide((prev) => prev === selectedWork.src.length - 1 ? 0 : prev + 1)}
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
