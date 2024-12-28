import Link from "next/link";
import Header from "./Header";
import { classNames } from "./utils/utils";
import localFont from "next/font/local";
const gilroy = localFont({ src: "../public/font/Gilroy-BlackItalic.ttf" });

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-gray-600 bg-[url('/assets/posterx.png')] bg-blend-hard-light">
      <Header />
      <div className="flex flex-col lg:flex-row justify-between items-center h-screen p-10">
        <h1
          className={classNames(
            "text-5xl sm:text-7xl italic font-bold",
            gilroy.className
          )}
        >
          <span className="text-white">
            9<sup>th</sup>
          </span>
          <span className="text-red-600">{} February</span>
        </h1>
        <Link href="/form">
          <div className="mb-20 lg:mb-0 bg-gradient-to-b from-[#EB0028] to-[#710013] text-white uppercase p-1 text-xl md:text-2xl lg:text-3xl">
            <div className="bg-black p-5">Register Now</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
