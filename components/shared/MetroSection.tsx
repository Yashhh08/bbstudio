"use client";

import Image from "next/image";
import React, { useRef } from "react";
import frontEngine from "@/public/assets/images/front-engine.png";
import backEngine from "@/public/assets/images/back-engine.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import MetroCoach from "./MetroCoach";

const videos = [
  {
    brand: "brand1",
    videos: [
      {
        id: "1",
        src: "https://cdn.shopify.com/videos/c/o/v/0215a395de3f41c3987a38fcf0f243a7.mp4",
      },
      {
        id: "2",
        src: "https://cdn.shopify.com/videos/c/o/v/0215a395de3f41c3987a38fcf0f243a7.mp4",
      },
      {
        id: "3",
        src: "https://cdn.shopify.com/videos/c/o/v/0215a395de3f41c3987a38fcf0f243a7.mp4",
      },
      {
        id: "4",
        src: "https://cdn.shopify.com/videos/c/o/v/0215a395de3f41c3987a38fcf0f243a7.mp4",
      },
    ],
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MetroSection = () => {
  const brand1 = videos.find((brand) => brand.brand === "brand1");

  const containerWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getScrollWidth = () => {
    if (!containerRef.current) return 0;
    let width = containerRef.current.scrollWidth - window.innerWidth;
    return -width;
  };

  useGSAP(
    () => {
      const tween = gsap.to(containerRef.current, {
        x: getScrollWidth,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        animation: tween,
        trigger: containerWrapperRef.current,
        start: "top 15%",
        end: `+=${getScrollWidth() * -1}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // markers: true,
      });
    },
    { scope: containerWrapperRef }
  );

  return (
    <div ref={containerWrapperRef} className="overflow-hidden">
      <div
        ref={containerRef}
        className="relative left-0 flex justify-start w-fit"
      >
        <div className="relative h-[70vh] w-[1200px]">
          <Image
            src={frontEngine}
            alt="frontEngine"
            fill
            className="absolute"
            priority
          />
        </div>

        {brand1 && <MetroCoach brand={brand1.brand} videos={brand1.videos} />}

        {brand1 && <MetroCoach brand={brand1.brand} videos={brand1.videos} />}

        <div className="relative h-[70vh] w-[1200px]">
          <Image
            src={backEngine}
            alt="backEngine"
            fill
            className="absolute"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default MetroSection;
