"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Theme from "@/components/Theme";
import Speakers from "@/components/Speakers";

const Home = () => {
  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      <About />
      <Speakers />
      <Theme />
      <Contact />
    </div>
  )
}

export default Home;