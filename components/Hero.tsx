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
            7 <sup>th</sup>
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
 

// import Link from "next/link";
// import Header from "./Header";
// import { classNames } from "./utils/utils";
// import localFont from "next/font/local";

// const gilroy = localFont({ src: "../public/font/Gilroy-BlackItalic.ttf" });

// const Hero = () => {
//   return (
//     <div className="relative min-h-screen w-full bg-black bg-opacity-50">
//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         className="absolute inset-0 w-full h-full object-cover z-[-2]"
//       >
//         <source src="/video/video1.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Header Component */}
//       <Header />

//       {/* Content */}
//       <div className="flex flex-col lg:flex-row justify-between items-center h-screen p-10 relative z-10">
//         <h1
//           className={classNames(
//             "text-5xl sm:text-7xl italic font-bold text-white",
//             gilroy.className
//           )}
//         >
//           <span className="text-white">
//             7 <sup>th</sup>
//           </span>
//           <span className="text-red-600">February</span>
//         </h1>

//         {/* Register Button */}
//         <Link href="/form">
//           <div className="mt-10 lg:mt-0 bg-gradient-to-b from-[#EB0028] to-[#710013] text-white uppercase p-4 text-xl md:text-2xl lg:text-3xl">
//             <div className="bg-black p-5">Register Now</div>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Hero;





// import Link from "next/link";
// import Header from "./Header";
// import { classNames } from "./utils/utils";
// import localFont from "next/font/local";
// import { useState, useEffect } from "react";

// const gilroy = localFont({ src: "../public/font/Gilroy-BlackItalic.ttf" });

// const images = [
//   "/AlbumPhotos/image1.png",
//   "/AlbumPhotos/image4.png",
//   "/AlbumPhotos/image6.png", 
//   // Add more image paths here
// ];

// const Hero = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change image every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative min-h-screen w-full bg-black bg-opacity-50">
//       {/* Header Component */}
//       <Header />

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row h-screen">
//         {/* Section 1: Date and Register */}
//         <div className="relative flex-1 bg-black bg-opacity-50">
//           {/* Background Video */}
//           <video
//             autoPlay
//             muted
//             loop
//             className="absolute inset-0 w-full h-full object-cover z-[-2]"
//           >
//             <source src="/video/video2.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>

//           {/* Content */}
//           <div className="flex flex-col justify-center items-center h-full p-10 relative z-10 text-center">
//             <h1
//               className={classNames(
//                 "text-5xl sm:text-7xl italic font-bold text-white",
//                 gilroy.className
//               )}
//             >
//               <span className="text-white">
//                 7 <sup>th</sup>
//               </span>
//               <span className="text-red-600"> February</span>
//             </h1>
//             <Link href="/form">
//               <div className="mt-10 bg-gradient-to-b from-[#EB0028] to-[#710013] text-white uppercase p-4 text-xl md:text-2xl lg:text-3xl">
//                 <div className="bg-black p-5">Register Now</div>
//               </div>
//             </Link>
//           </div>
//         </div>

//         {/* Section 2: Image Slider */}
//         <div className="flex-1 flex justify-center items-center bg-gray-800">
//           <div className="w-full h-full flex justify-center items-center">
//             <img
//               src={images[currentImageIndex]}
//               alt="Event Image"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
