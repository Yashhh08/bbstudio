"use client";

import Image from "next/image";
import React, { useRef } from "react";
import frontEngine from "@/public/assets/images/front-engine.png";
import backEngine from "@/public/assets/images/back-engine.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import MetroCoach from "./MetroCoach";

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

        <MetroCoach />

        <MetroCoach />

        <div className="relative h-[70vh] w-[1200px]">
          <Image src={backEngine} alt="backEngine" fill className="absolute" />
        </div>
      </div>
    </div>
  );
};

export default MetroSection;
