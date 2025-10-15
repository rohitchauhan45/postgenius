import Image from "next/image";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}
