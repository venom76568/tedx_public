import React from "react";
import Image from "next/image";
import { Titillium_Web } from "next/font/google";

import ted from "../public/assets/ted.jpg";
import tedx from "../public/assets/tedx.png";
import { classNames } from "./utils/utils";
const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: "200",
});

const About = () => {
  const [about, setAbout] = React.useState("ted");
  return (
    <div className="bg-black p-10" id="about">
      <div className="flex justify-around text-white text-4xl">
        <button
          onClick={() => setAbout("ted")}
          className={classNames("p-10", about === "ted" ? "bg-[#EB0028]" : "")}
        >
          TED
        </button>
        <button
          onClick={() => setAbout("tedx")}
          className={classNames("p-10", about === "tedx" ? "bg-[#EB0028]" : "")}
        >
          TEDx
        </button>
      </div>
      <div className="py-10 text-white">
        {about === "ted" ? (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 items-center">
            <Image
              src={ted}
              alt="ted"
              className="lg:order-last lg:col-span-2 p-10 w-full text-center"
              width={250}
              height={400}
            />
            <div
              className={classNames(
                "lg:col-span-3 text-xl lg:text-2xl md:px-10 space-y-5",
                titillium.className
              )}
            >
              <div className="text-justify">
                TED is a nonprofit organization devoted to Ideas Worth
                Spreading, often in the form of short talks delivered by leading
                thinkers and doers. Many of these talks are given at TED
                Conferences, intimate TED Salons and thousands of independently
                organised TEDx events around the world. Videos of these talks
                are made available, free, on TED.com and other platforms. Audio
                versions of TED Talks are published to TED Talks Daily,
                available on all podcast platforms.
              </div>
              <div className="text-justify">
                TED&apos;s open and free initiatives for spreading ideas include
                TED.com, where new TED Talk videos are posted daily; TEDx, which
                licenses thousands of individuals and groups to host local,
                self-organized TED-style events around the world; the TED
                Fellows program, which selects innovators from around the globe
                to amplify the impact of their remarkable projects and
                activities; The Audacious Project, which surfaces and funds
                critical ideas that have the potential to impact millions of
                lives; TED Translators Program, which crowdsources the
                subtitling of TED Talks so that big ideas can spread across
                languages and borders; and the educational initiative TED-Ed.
                TED also offers TED@Work a program that reimagines TED Talks for
                workplace learning. TED also has a growing library of original
                podcasts, including The TED Interview with Chris Anderson,
                WorkLife with Adam Grant, Far Flung with Saleem Reshamwala and
                How to Be a Better Human.
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 items-center">
            <Image
              src={tedx}
              alt="ted"
              className="lg:order-last col-span-2 p-10 w-full text-center"
              width={450}
              height={500}
            />
            <div
              className={classNames(
                "col-span-3 text-xl lg:text-2xl md:px-10 text-justify",
                titillium.className
              )}
            >
              In the spirit of ideas worth spreading, TED has created a program
              called TEDx. TEDx is a program of local, self-organized events
              that bring people together to share a TED-like experience. Our
              event is called TEDx[name], where x = independently organized TED
              event. At our TEDx[name] event, TED Talks video and live speakers
              will combine to spark deep discussion and connection in a small
              group. The TED Conference provides general guidance for the TEDx
              program, but individual TEDx events, including ours, are
              self-organized.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
