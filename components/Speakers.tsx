import React, { useState, useEffect } from "react";

const speakersData = [
  { name: "Speaker 1", bio: "Ketaki Mateygaonkar is a renowned Indian actress, singer, and songwriter primarily known for her contributions to Marathi cinema and music. She began her career as a playback singer before transitioning into acting, gaining recognition for her exceptional talent and versatility.", image: "/Speakers/Speaker 1.jpg" },
  { name: "Speaker 2", bio: "Padmashri Prahlada Rama Rao is an Indian missile scientist and former director of Defence Research and Development Laboratory (DRDL), the largest of the Defence Research and Development Organization (DRDO) laboratories in India, known for his contributions to the Indian space programme. He was honoured by the Government of India in 2015 with the Padma Shri, the fourth-highest Indian civilian award.", image: "/Speakers/Speaker 2.jpg" },
  { name: "Speaker 3", bio: "Dania Khan, a trailblazing individual with exceptional academic achievements, award-winning research, and global accolades in debate, literature, and community service. A published author and polyglot, she is passionate about economic affairs, global politics, and empowering communities.", image: "/Speakers/Speaker 3.jpg" },
  { name: "Speaker 4", bio: "Dr. Gajendra Purohit is a renowned Indian mathematician, educator, and YouTuber known for his contributions to higher mathematics and his efforts to make advanced mathematical concepts accessible to students.", image: "/Speakers/Speaker 4.jpg" },
  { name: "Speaker 5", bio: "Harshit Surana, the visionary founder of The Robot Restaurant - TYH and Biryani Nawaabs, is redefining the Indian hospitality industry by integrating robotics with dining.", image: "/Speakers/Speaker 5.jpg" },
];

const Speakers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBio, setShowBio] = useState(false);

  // Function to go to the next speaker (card)
  const nextSpeaker = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % speakersData.length);
  };

  // Function to go to the previous speaker (card)
  const prevSpeaker = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? speakersData.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!showBio) {
        nextSpeaker();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [showBio]);

  return (
    <div
      id="speakers"
      className="min-h-screen flex flex-col justify-center items-center gap-10 bg-black py-10 px-4"
    >
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-[#ff2020] font-black mb-12 p-4 bg-white rounded-full shadow-md w-[70%] mx-auto border-b-4 border-[#EB0028] min-w-[300px] sm:min-w-[300px] lg:min-w-[400px]">
  Speakers
</div>

      {/* Speaker Card Section */}
      <div className="relative w-full max-w-3xl aspect-video bg-black min-h-[300px] border-2 border-white rounded-lg overflow-hidden shadow-md">
        {/* Flex container for the card */}
        <div className="relative w-full h-full flex flex-col justify-center items-center ">
          {/* Speaker Image with Blur Effect */}
          <img
            src={speakersData[currentIndex].image}
            alt={speakersData[currentIndex].name}
            className={`w-full h-full object-contain rounded-lg shadow-md ${showBio ? 'blur-sm' : ''}`}
          />

          {/* Show Bio Button */}
          <button
            onClick={() => setShowBio(!showBio)}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10 border-2 border-red "
          >
            {showBio ? "Hide Bio" : "Show Bio"}
          </button>

          {/* Speaker Bio (if shown) */}
          {showBio && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 text-white p-5 rounded-lg shadow-md flex items-center justify-center z-0 overflow-auto max-h-[300px] mt-10">
              <div className="overflow-y-auto max-h-full">
                <p className="text-lg text-justify whitespace-pre-wrap break-words">
                  {speakersData[currentIndex].bio}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Section */}
      <div className="flex gap-2 mt-4 overflow-x-auto w-full max-w-4xl px-4 justify-center">
        {speakersData.map((speaker, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-24 h-16 rounded-lg overflow-hidden cursor-pointer border-2 ${currentIndex === index ? "border-red-500" : "border-white"}`}
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
