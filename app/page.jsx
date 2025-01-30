import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Black from "./Components/Black";

import Footer from "./Components/Footer";
import { Faq } from "./Components/Faq";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Black/>
<Faq/>
    <Footer/>
   </div>
  );
}
