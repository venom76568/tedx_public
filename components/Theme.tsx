import Image from "next/image";
import { Titillium_Web } from "next/font/google";

import { classNames } from "./utils/utils";
import theme from "../public/assets/theme_coin.png";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: "400",
});

const Theme = () => {
  return (
    <div className="bg-gray-200 bg-[url('/assets/background.png')] bg-blend-screen bg-cover">
      <div className="gap-10 text-center justify-center items-center p-10">
        {/* <Image src={theme} alt="Theme" width={400} className="col-span-2 animate-vertical rounded-full" /> */}
        <div className="flex-wrap flex-col gap-5 col-span-3 justify-center">
          <div className="text-[#EB0028] text-5xl xl:text-7xl font-black ">
            Theme
          </div>
          <div
            className={classNames(
              "text2xl xl:text-3xl py-5 whitespace-normal text-justify",
              titillium.className
            )}
          > 
            <span className="font-bold text-[#EB0028] ">
              &quot;Waves of Wisdom:&quot;
            </span>{" "}
            Exploring the Idea Sphere encapsulates the journey of transformative ideas that ripple through art, education, research, and technology, shaping the world around us. This theme celebrates the power of innovation and thought-provoking perspectives that inspire change, connect diverse disciplines, and spark curiosity. It emphasizes the exchange of knowledge and creativity, creating waves that challenge conventions and empower individuals to explore uncharted territories of wisdom and imagination.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
