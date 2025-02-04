import Image from "next/image";
import { Titillium_Web } from "next/font/google";
import { useState, useEffect } from "react";
import { classNames } from "./utils/utils";

// Import images for the carousel
import themeImage1 from "../public/AlbumPhotos/Image1.png";
import themeImage2 from "../public/AlbumPhotos/Image5.png";
import themeImage3 from "../public/AlbumPhotos/Image9.png";

// Background image
import backgroundImage from "../public/assets/background4.jpg";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: "400",
});

const images = [themeImage1, themeImage2, themeImage3];

const Theme = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${titillium.className} bg-gray-200 bg-cover bg-no-repeat bg-center min-h-screen`}
      style={{
        backgroundImage: `url(${backgroundImage.src})`, // Fixed background image syntax
      }}
    >
      {/* Theme Header */}
      <div className="text-center p-10">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#EB0028] font-black mb-12 p-4 bg-white rounded-full shadow-md w-[70%] mx-auto border-b-4 border-[#EB0028] min-w-[300px]">
          Theme
        </div>

        <div className="text-2xl xl:text-3xl py-5 text-justify text-white">
          <span className="font-bold text-[#EB0028]">
            &quot;Waves of Wisdom:&quot;
          </span>{" "}
          Exploring the Idea Sphere encapsulates the journey of transformative
          ideas that ripple through art, education, research, and technology,
          shaping the world around us. This theme celebrates the power of
          innovation and thought-provoking perspectives that inspire change,
          connect diverse disciplines, and spark curiosity. It emphasizes the
          exchange of knowledge and creativity, creating waves that challenge
          conventions and empower individuals to explore uncharted territories
          of wisdom and imagination.
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 p-10">
        {/* Left: Text */}
        <div className="text-1xl xl:text-2xl w-full lg:w-1/2 text-white text-justify">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#EB0028] font-black mb-6 p-4 bg-black rounded-full shadow-md w-[70%] mx-auto border-b-4 border-white min-w-[300px] text-center">
            Past Glimpses:
            <div className="text-2xl xl:text-3xl">&quot;The Third Side of the Coin&quot;</div>
          </div>
          Every coin has two sides—heads and tails—symbolizing binary
          perspectives, choices, or opposites. But what about the unseen
          third side—the edge that connects both? This theme challenges
          conventional thinking and encourages exploring perspectives beyond
          the obvious. It represents nuance, balance, and the overlooked
          middle ground where true innovation and wisdom emerge.{" "}
          <span className="font-bold text-[#EB0028]">
            &quot;The Third Side of the Coin&quot;
          </span>{" "}
          invites speakers and audiences to uncover hidden possibilities,
          break binary constraints, and embrace multidimensional thinking in
          a world that often sees things in black and white.
        </div>

        {/* Right: Image Carousel */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <div className="relative w-full flex justify-center items-center">
            <Image
              src={images[currentImageIndex]}
              alt="Theme Image"
              width={500}
              height={500}
              className="rounded-lg shadow-lg transition-transform duration-500"
            />
          </div>

          {/* Dot Indicators */}
          <div className="flex gap-2 mt-5">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentImageIndex === index ? "bg-[#EB0028]" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
