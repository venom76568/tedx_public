"use client";

import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Album from "@/components/Album";

const Gallery = () => {
  return (
    <div className="h-full overflow-x-hidden">
      <Header />
      <Album />
      <Contact />
    </div>
  )
}

export default Gallery;