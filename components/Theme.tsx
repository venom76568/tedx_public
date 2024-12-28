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
          <div className="text-[#EB0028] text-5xl xl:text-7xl font-black">
            Theme
          </div>
          <div
            className={classNames(
              "text2xl xl:text-3xl py-5 whitespace-normal",
              titillium.className
            )}
          >
            The{" "}
            <span className="font-bold text-[#EB0028]">
              &quot;Kaleidovision: merging discrete perspectives&quot;
            </span>{" "}
            encapsulates the notion of integrating disparate viewpoints into a
            unified whole, akin to the harmonious blending of colors and
            patterns within a kaleidoscope. <br />
            In the context of a TEDx event hosted at VNIT, this theme
            underscores the imperative of embracing diversity of thought and
            experience. It champions the exploration of how the convergence of
            varied perspectives can catalyze innovation, foster collaboration,
            and deepen comprehension.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
