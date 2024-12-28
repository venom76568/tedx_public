"use client";

import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Teams from "@/components/Teams";

const Team = () => {
  return (
    <div className="h-full overflow-x-hidden">
      <Header />
      <Teams />
      <Contact />
    </div>
  )
}

export default Team;