"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import frontEngine from "@/public/assets/images/front-engine.png";
import backEngine from "@/public/assets/images/back-engine.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import MetroCoach from "./MetroCoach";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Progress } from "../ui/progress";

const brands = [
  {
    id: "brand1",
    name: "Brand 1",
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
  {
    id: "brand2",
    name: "Brand 2",
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
  const [progress, setProgress] = useState(0);
  // const [activeBrand, setActiveBrand] = useState<string | null>(null);

  const containerWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollUpRef = useRef<HTMLParagraphElement>(null);

  const getScrollWidth = () => {
    if (!containerRef.current) return 0;
    let width = containerRef.current.scrollWidth - window.innerWidth;
    return -width;
  };

  useGSAP(
    () => {
      gsap.to(scrollUpRef.current, {
        y: -200,
        opacity: 0,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerWrapperRef.current,
          start: "10% 0%",
          end: "30% 0%",
          scrub: 1,
          // markers: true,
        },
      });

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
        onUpdate: (self) => {
          setProgress(Math.round(self.progress * 100));
          // const scrollPosition = self.progress * getScrollWidth() * -1;
          // const brandWidth = getScrollWidth() / brands.length;
          // const activeBrandIndex = Math.floor(scrollPosition / brandWidth);
          // setActiveBrand(brands[activeBrandIndex]?.id || null);
        },
        // markers: true,
      });

      // brands.forEach((brand, index) => {
      //   ScrollTrigger.create({
      //     trigger: containerRef.current,
      //     start: `left-=${index * (getScrollWidth() / brands.length)} center`,
      //     end: `left-=${
      //       (index + 1) * (getScrollWidth() / brands.length)
      //     } center`,
      //     onEnter: () => setActiveBrand(brand.id),
      //     onEnterBack: () => setActiveBrand(brand.id),
      //   });
      // });

      // brands.forEach((brand, index) => {
      //   const startPosition = (index / brands.length) * 100;
      //   const endPosition = ((index + 1) / brands.length) * 100;

      //   ScrollTrigger.create({
      //     trigger: containerRef.current,
      //     start: `left-=${startPosition}% center`,
      //     end: `left-=${endPosition}% center`,
      //     onEnter: () => setActiveBrand(brand.id),
      //     onEnterBack: () => setActiveBrand(brand.id),
      //   });
      // });
    },
    { scope: containerWrapperRef }
  );

  return (
    <div ref={containerWrapperRef} className="overflow-hidden">
      <p
        ref={scrollUpRef}
        className="rounded-xl font-semibold text-lg underline-offset-8 p-2 w-fit text-center m-auto transition-all flex justify-center items-center gap-2"
      >
        Scroll up to start the journey
        <span>
          <FaAngleDoubleUp className="size-6 animate-bounce duration-[5s]" />
        </span>
      </p>

      <div
        ref={containerRef}
        className="relative left-0 flex justify-start w-fit -top-7"
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

        {brands.map((brand, index) => (
          <div key={brand.id} className="relative">
            <MetroCoach brand={brand.id} videos={brand.videos} />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-whit bg-opacity-80 px-4 py-2 rounded-t-lg">
              <span className={`text-2xl font-medium`}>{brand.name}</span>
            </div>
          </div>
        ))}

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

      <Progress
        value={progress}
        className="fixed bottom-0 left-3 right-3 bg-transparent"
      />
    </div>
  );
};

export default MetroSection;
