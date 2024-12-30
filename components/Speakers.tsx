import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import giri from "../public/assets/giri.jpg";
import nagi from "../public/assets/nagi.jpg";
import tridha from "../public/assets/tridha.png";

import jimmny_card from "../public/assets/jimmy_card.png";
import parimal_card from "../public/assets/parimal_card.png";
import tridha_card from "../public/assets/tridha_card.png";
import React from "react";

const Speakers = () => {
  return (
    <div
      id="speakers"
      className="h-full flex flex-col justify-center items-center gap-10 bg-black"
    >
      <span className="text-5xl text-white">Speakers</span>
      <span className="text-3xl text-red-600">Coming soon</span>

      {/* <Carousel className="hidden lg:block h-full mx-4 "
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        useKeyboardArrows
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${hasPrev ? "absolute" : "hidden"
                } top-0 bottom-0 left-0 flex justify-center items-center p-3 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <svg width="27" height="47" viewBox="0 0 27 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9218 45.1126L0.912462 25.1626C0.674962 24.9251 0.507129 24.6678 0.408963 24.3907C0.309213 24.1136 0.259338 23.8167 0.259338 23.5001C0.259338 23.1834 0.309213 22.8865 0.408963 22.6094C0.507129 22.3324 0.674962 22.0751 0.912462 21.8376L20.9218 1.8282C21.476 1.27403 22.1687 0.996948 23 0.996948C23.8312 0.996948 24.5437 1.29382 25.1375 1.88757C25.7312 2.48132 26.0281 3.17403 26.0281 3.9657C26.0281 4.75736 25.7312 5.45007 25.1375 6.04382L7.68121 23.5001L25.1375 40.9563C25.6916 41.5105 25.9687 42.1929 25.9687 43.0036C25.9687 43.8158 25.6718 44.5188 25.0781 45.1126C24.4843 45.7063 23.7916 46.0032 23 46.0032C22.2083 46.0032 21.5156 45.7063 20.9218 45.1126Z" fill="white" />
              </svg>
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${hasNext ? "absolute" : "hidden"
                } top-0 bottom-0 right-0 flex justify-center items-center p-3 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <svg width="26" height="47" viewBox="0 0 26 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.1063 45.1126L25.1157 25.1626C25.3532 24.9251 25.521 24.6678 25.6192 24.3907C25.7189 24.1136 25.7688 23.8167 25.7688 23.5001C25.7688 23.1834 25.7189 22.8865 25.6192 22.6094C25.521 22.3324 25.3532 22.0751 25.1157 21.8376L5.1063 1.8282C4.55213 1.27403 3.85942 0.996948 3.02817 0.996948C2.19692 0.996948 1.48443 1.29382 0.890675 1.88757C0.296925 2.48132 5.01871e-05 3.17403 5.01871e-05 3.9657C5.01871e-05 4.75736 0.296925 5.45007 0.890675 6.04382L18.3469 23.5001L0.890675 40.9563C0.336509 41.5105 0.0594243 42.1929 0.0594243 43.0036C0.0594243 43.8158 0.356299 44.5188 0.950049 45.1126C1.5438 45.7063 2.23651 46.0032 3.02817 46.0032C3.81984 46.0032 4.51255 45.7063 5.1063 45.1126Z" fill="white" />
              </svg>

            </div>
          );
        }}
      >
        <div className="px-10 w-[50%] m-auto">
          <Image  src={giri} alt="giri" />
        </div>
        <div className="px-10 w-[50%] m-auto">
          <Image src={nagi} alt="nagi" />
        </div>
        {/* <div className="px-10">
          <Image src={tridha} alt="Tridha" />
        </div> */}
      {/* </Carousel>
      <Carousel
        className="lg:hidden"
        showIndicators={false}
        showStatus={false}
        autoPlay
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${hasPrev ? "absolute" : "hidden"
                } top-0 bottom-0 left-0 flex justify-center items-center p-3 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <svg width="27" height="47" viewBox="0 0 27 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9218 45.1126L0.912462 25.1626C0.674962 24.9251 0.507129 24.6678 0.408963 24.3907C0.309213 24.1136 0.259338 23.8167 0.259338 23.5001C0.259338 23.1834 0.309213 22.8865 0.408963 22.6094C0.507129 22.3324 0.674962 22.0751 0.912462 21.8376L20.9218 1.8282C21.476 1.27403 22.1687 0.996948 23 0.996948C23.8312 0.996948 24.5437 1.29382 25.1375 1.88757C25.7312 2.48132 26.0281 3.17403 26.0281 3.9657C26.0281 4.75736 25.7312 5.45007 25.1375 6.04382L7.68121 23.5001L25.1375 40.9563C25.6916 41.5105 25.9687 42.1929 25.9687 43.0036C25.9687 43.8158 25.6718 44.5188 25.0781 45.1126C24.4843 45.7063 23.7916 46.0032 23 46.0032C22.2083 46.0032 21.5156 45.7063 20.9218 45.1126Z" fill="white" />
              </svg>
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${hasNext ? "absolute" : "hidden"
                } top-0 bottom-0 right-0 flex justify-center items-center p-3 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <svg width="26" height="47" viewBox="0 0 26 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.1063 45.1126L25.1157 25.1626C25.3532 24.9251 25.521 24.6678 25.6192 24.3907C25.7189 24.1136 25.7688 23.8167 25.7688 23.5001C25.7688 23.1834 25.7189 22.8865 25.6192 22.6094C25.521 22.3324 25.3532 22.0751 25.1157 21.8376L5.1063 1.8282C4.55213 1.27403 3.85942 0.996948 3.02817 0.996948C2.19692 0.996948 1.48443 1.29382 0.890675 1.88757C0.296925 2.48132 5.01871e-05 3.17403 5.01871e-05 3.9657C5.01871e-05 4.75736 0.296925 5.45007 0.890675 6.04382L18.3469 23.5001L0.890675 40.9563C0.336509 41.5105 0.0594243 42.1929 0.0594243 43.0036C0.0594243 43.8158 0.356299 44.5188 0.950049 45.1126C1.5438 45.7063 2.23651 46.0032 3.02817 46.0032C3.81984 46.0032 4.51255 45.7063 5.1063 45.1126Z" fill="white" />
              </svg>

            </div>
          );
        }}
      >
        <div>
          <Image src={giri} alt="Jimmy" />
        </div>
        <div>
          <Image src={nagi} alt="Parimal" />
        </div>
        {/* <div>
          <Image src={tridha_card} alt="Tridha" />
        </div> */}
      {/* </Carousel> */}  
    </div>
  );
};

export default Speakers;
