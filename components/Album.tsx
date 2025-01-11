// // const Album = () => {
// //   return (
// //     <div className="h-full flex flex-col justify-center items-center gap-10 bg-black">
// //       <span className="text-5xl text-white">Gallery</span>
// //       <span className="text-3xl text-red-600">Coming soon</span>
// //     </div>
// //   )
// // }

// // export default Album;

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// import image1 from "../public/AlbumPhotos/Image1.jpg";
// import image2 from "../public/AlbumPhotos/Image2.jpg";
// import image3 from "../public/AlbumPhotos/Image3.jpg";
// import image4 from "../public/AlbumPhotos/Image4.jpg";
// import image5 from "../public/AlbumPhotos/Image5.jpg";
// import image6 from "../public/AlbumPhotos/Image6.jpg";
// import image7 from "../public/AlbumPhotos/Image7.jpg";

// const Gallery = () => {
//   const images = [
//     { src: image1, alt: "Image 1" },
//     { src: image2, alt: "Image 2" },
//     { src: image3, alt: "Image 3" },
//     { src: image4, alt: "Image 4" },
//     { src: image5, alt: "Image 5" },
//     { src: image6, alt: "Image 6" },
//     { src: image7, alt: "Image 7" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const setImageFromThumbnail = (index: number) => {
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(nextImage, 3000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center bg-black min-h-screen px-4 sm:px-8">
//       <h1 className="text-white text-5xl font-bold mb-6">Gallery</h1>

//       {/* Main Image Section */}
//       <div className="relative w-full max-w-4xl aspect-video bg-black border-2 border-white">
//         <Image
//           src={images[currentIndex].src}
//           alt={images[currentIndex].alt}
//           layout="fill"
//           objectFit="cover"
//           className="rounded-lg shadow-md"
//         />

//         {/* Left Navigation Arrow */}
//         <button
//           onClick={prevImage}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
//         >
//           &#8249;
//         </button>

//         {/* Right Navigation Arrow */}
//         <button
//           onClick={nextImage}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
//         >
//           &#8250;
//         </button>
//       </div>

//       {/* Thumbnail Section */}
//       <div className="flex gap-2 mt-4 overflow-x-auto w-full max-w-4xl px-4 justify-center">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             onClick={() => setImageFromThumbnail(index)}
//             className={`relative w-24 h-16 rounded-lg overflow-hidden cursor-pointer border-2 ${
//               currentIndex === index
//                 ? "border-red-500"
//                 : "border-white"
//             }`}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import React, { useState } from "react";
import Image from "next/image";

import image1 from "../public/AlbumPhotos/Image1.png";
import image2 from "../public/AlbumPhotos/Image2.png";
import image3 from "../public/AlbumPhotos/Image3.png";
import image4 from "../public/AlbumPhotos/Image4.png";
import image5 from "../public/AlbumPhotos/Image5.png";
import image6 from "../public/AlbumPhotos/Image6.png";
import image7 from "../public/AlbumPhotos/Image7.png";
import image8 from "../public/AlbumPhotos/Image8.png";
import image9 from "../public/AlbumPhotos/Image9.png";

const Gallery = () => {
  const images = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
    { src: image4, alt: "Image 4" },
    { src: image5, alt: "Image 5" },
    { src: image6, alt: "Image 6" },
    { src: image7, alt: "Image 7" },
    { src: image8, alt: "Image 8" },
    { src: image9, alt: "Image 9" }
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen px-4 sm:px-8">
      <h1 className="text-white text-5xl font-bold mb-6">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl px-4 py-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer border-2 border-white
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
