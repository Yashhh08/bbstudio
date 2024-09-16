"use client";

import Image from "next/image";
import React, { useRef } from "react";
import frontEngine from "@/public/assets/images/front-engine.png";
import metroCoach from "@/public/assets/images/metro-coach.png";
import backEngine from "@/public/assets/images/back-engine.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MetroSection = () => {
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
          />
        </div>

        <div className="relative h-[70vh] w-[1920px]">
          <Image src={metroCoach} alt="coach-1" fill className="absolute" />

          <video
            width={270}
            autoPlay
            loop
            muted
            className="absolute rounded-3xl left-[6%] top-[15%]"
          >
            <source
              src={
                "https://cdn.shopify.com/videos/c/o/v/0215a395de3f41c3987a38fcf0f243a7.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <video
            width={270}
            autoPlay
            loop
            muted
            className="absolute rounded-3xl left-[25%] top-[15%]"
          >
            <source
              src={
                "https://cdn.shopify.com/videos/c/o/v/0215a395de3f41c3987a38fcf0f243a7.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <video
            width={270}
            autoPlay
            loop
            muted
            className="absolute rounded-3xl right-[6%] top-[15%]"
          >
            <source
              src={
                "https://cdn.shopify.com/videos/c/o/v/0215a395de3f41c3987a38fcf0f243a7.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <video
            width={270}
            autoPlay
            loop
            muted
            className="absolute rounded-3xl right-[25%] top-[15%]"
          >
            <source
              src={
                "https://cdn.shopify.com/videos/c/o/v/0215a395de3f41c3987a38fcf0f243a7.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="relative h-[70vh] w-[1920px]">
          <Image src={metroCoach} alt="coach-1" fill className="absolute" />
        </div>

        <div className="relative h-[70vh] w-[1200px]">
          <Image src={backEngine} alt="backEngine" fill className="absolute" />
        </div>
      </div>
    </div>
  );
};

export default MetroSection;
