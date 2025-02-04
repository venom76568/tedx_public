import Image from 'next/image';
import { Titillium_Web } from "next/font/google";
import { useState, useEffect } from "react";
import { classNames } from "./utils/utils";

// Import your images for the carousel
import themeImage1 from "../public/AlbumPhotos/Image1.png";
import themeImage2 from "../public/AlbumPhotos/Image5.png";
import themeImage3 from "../public/AlbumPhotos/Image9.png";

// Single background image for all sections
import backgroundImage from "../public/assets/background4.jpg"; // Single background image

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
      className={classNames(
        "bg-gray-200 bg-cover bg-no-repeat bg-center min-h-screen",
        titillium.className // Apply the font globally
      )}
      style={{
        backgroundImage: `url(${backgroundImage.src})`, // Applying one background image to cover all sections
      }}
    >
      {/* Top Section: Theme Description */}
      <div className="gap-10 text-center justify-center items-center p-10">
        <div className="flex-wrap flex-col gap-5 col-span-3 justify-center">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-[#EB0028] font-black mb-12 p-4 bg-white rounded-full shadow-md w-[70%] mx-auto border-b-4 border-[#EB0028] min-w-[300px] sm:min-w-[300px] lg:min-w-[400px]">
  Theme
</div>

          <div className="text-2xl xl:text-3xl py-5 whitespace-normal text-justify text-white">
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
      </div>
      
      {/* Bottom Section: Left (New Text) and Right (Image Carousel) */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 p-10">
        {/* Left Section: Updated Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center gap-5">
          <div className="text-xl xl:text-2xl text-white text-justify">
            <div className="flex flex-col items-center text-[#EB0028] font-black py-3">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#EB0028] font-black mb-6 p-4 bg-black rounded-full shadow-md w-[70%] mx-auto border-b-4 border-[#ffffff] min-w-[300px] sm:min-w-[300px] lg:min-w-[400px]">
  Past Glimpses:
  <div className="text-2xl xl:text-3xl">
                "The Third Side of the Coin"
              </div>
</div>   
            </div>
            Every coin has two sides—heads and tails—symbolizing binary
            perspectives, choices, or opposites. But what about the unseen
            third side—the edge that connects both? This theme challenges
            conventional thinking and encourages exploring perspectives beyond
            the obvious. It represents nuance, balance, and the overlooked
            middle ground where true innovation and wisdom emerge.{" "}
            <span className=" font-bold text-[#EB0028]">
              "The Third Side of the Coin"
            </span>{" "}
            invites speakers and audiences to uncover hidden possibilities,
            break binary constraints, and embrace multidimensional thinking in
            a world that often sees things in black and white.
          </div>
        </div>

        {/* Right Section: Image Scroller */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <div className="relative w-full flex justify-center items-center">
            <Image
              src={images[currentImageIndex]}
              alt="Theme Image"
              width={500}
              height={500}
              className="rounded-lg shadow-[0px_0px_20px_5px_rgba(255,255,255,0.6)] transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* Dot Indicator */}
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
// import Image from 'next/image';
// import { Titillium_Web } from "next/font/google";
// import { useState, useEffect } from "react";
// import { classNames } from "./utils/utils";

// const titillium = Titillium_Web({
//   subsets: ["latin"],
//   weight: "400",
// });

// // Corrected image paths (referencing public folder directly)
// const images = [
//   "/AlbumPhotos/Image1.png",
//   "/AlbumPhotos/Image5.png",
//   "/AlbumPhotos/Image9.png",
// ];

// const backgroundImage = "/assets/background4.jpg"; // Background image path

// const Theme = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000); // Change image every 2 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className={classNames(
//         "bg-gray-200 bg-cover bg-no-repeat bg-center min-h-screen",
//         titillium.className
//       )}
//       style={{
//         backgroundImage: `url(${backgroundImage})`, // Applying the background image
//       }}
//     >
//       {/* Top Section: Theme Description */}
//       <div className="gap-10 text-center justify-center items-center p-10">
//         <div className="flex-wrap flex-col gap-5 col-span-3 justify-center">
//           <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-[#EB0028] font-black mb-12 p-4 bg-white rounded-full shadow-md w-[70%] mx-auto border-b-4 border-[#EB0028] min-w-[300px] sm:min-w-[300px] lg:min-w-[400px]">
//             Theme
//           </div>

//           <div className="text-2xl xl:text-3xl py-5 whitespace-normal text-justify text-white">
//             <span className="font-bold text-[#EB0028]">
//               &quot;Waves of Wisdom:&quot;
//             </span>{" "}
//             Exploring the Idea Sphere encapsulates the journey of transformative
//             ideas that ripple through art, education, research, and technology,
//             shaping the world around us. This theme celebrates the power of
//             innovation and thought-provoking perspectives that inspire change,
//             connect diverse disciplines, and spark curiosity. It emphasizes the
//             exchange of knowledge and creativity, creating waves that challenge
//             conventions and empower individuals to explore uncharted territories
//             of wisdom and imagination.
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section: Left (Text) and Right (Image Carousel) */}
//       <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 p-10">
//         {/* Left Section: Updated Text */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center gap-5">
//           <div className="text-xl xl:text-2xl text-white text-justify">
//             <div className="flex flex-col items-center text-[#EB0028] font-black py-3">
//               <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#EB0028] font-black mb-6 p-4 bg-black rounded-full shadow-md w-[70%] mx-auto border-b-4 border-[#ffffff] min-w-[300px] sm:min-w-[300px] lg:min-w-[400px]">
//                 Past Glimpses:
//                 <div className="text-2xl xl:text-3xl">
//                   "The Third Side of the Coin"
//                 </div>
//               </div>
//             </div>
//             Every coin has two sides—heads and tails—symbolizing binary
//             perspectives, choices, or opposites. But what about the unseen
//             third side—the edge that connects both? This theme challenges
//             conventional thinking and encourages exploring perspectives beyond
//             the obvious. It represents nuance, balance, and the overlooked
//             middle ground where true innovation and wisdom emerge.{" "}
//             <span className=" font-bold text-[#EB0028]">
//               "The Third Side of the Coin"
//             </span>{" "}
//             invites speakers and audiences to uncover hidden possibilities,
//             break binary constraints, and embrace multidimensional thinking in
//             a world that often sees things in black and white.
//           </div>
//         </div>

//         {/* Right Section: Image Scroller */}
//         <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
//           <div className="relative w-full flex justify-center items-center">
//             <Image
//               src={images[currentImageIndex]}
//               alt="Theme Image"
//               width={500}
//               height={500}
//               className="rounded-lg shadow-[0px_0px_20px_5px_rgba(255,255,255,0.6)] transition-transform duration-500 ease-in-out"
//             />
//           </div>

//           {/* Dot Indicator */}
//           <div className="flex gap-2 mt-5">
//             {images.map((_, index) => (
//               <div
//                 key={index}
//                 className={`w-3 h-3 rounded-full ${
//                   currentImageIndex === index ? "bg-[#EB0028]" : "bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Theme;
