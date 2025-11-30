import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Exprience";
import MyWorks from "./components/MyWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Experiences/>
    <MyWorks/>
    <Contact/>
    <Footer/>
    </>
  );
}
