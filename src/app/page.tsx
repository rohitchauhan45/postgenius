"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { usePageLoad } from "./hooks/usePageLoad";

export default function HomePage() {
  const isLoaded = usePageLoad();

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <Home />
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}
