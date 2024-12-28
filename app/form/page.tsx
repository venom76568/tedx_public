"use client";

import Contact from "@/components/Contact";
import Form from "@/components/Form";
import Header from "@/components/Header";

const Speaker = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <Header />
      <Form />
      <Contact />
    </div>
  )
}

export default Speaker;