'use client';
import React from "react"; 
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import { Work_Sans } from 'next/font/google';
const work_sans = Work_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const page = () => {
  return (
    <div className={work_sans.className}>
      <Header />
      <div className="min-h-screen flex justify-center items-start md:items-center bg-gray-800 bg-[url('/assets/background.png')] bg-cover bg-center bg-blend-hard-light">
        <div className="h-screen flex flex-col justify-center items-center gap-6 p-10">
          <div className="text-white font-bold text-3xl xl:text-5xl">
            Your registration is completed successfully
          </div>
          <div className="text-[#EB0028] text-3xl xl:text-5xl">
            The TedX event will start at 5:30 PM at VNIT Auditorium.
          </div>
        </div>
      </div >
      <Contact />
    </div>
  )
}


export default page;