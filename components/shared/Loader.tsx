"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface LoaderProps {
  setLoadingAnimation: (value: boolean) => void;
}

const Loader = (props: LoaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const loaderTl = gsap.timeline({
        onComplete: () => {
          props.setLoadingAnimation(true);
        },
      });

      loaderTl.to("#loader h1", {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.1,
      });

      loaderTl.to("#loader h1", {
        opacity: 0,
        x: -10,
        duration: 1,
        stagger: 0.1,
      });

      loaderTl.to("#loader", {
        opacity: 0,
        zIndex: -1,
        duration: 0.5,
        ease: "none",
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div
      ref={containerRef}
      id="loader"
      className="w-full h-full bg-blac flex justify-center items-center gap-[9px] fixed top-[0%] z-50 text-black text-2xl md:text-4xl"
    >
      <h1 className="opacity-0 transform translate-x-[40px]">Bombay</h1>
      <h1 className="opacity-0 transform translate-x-[40px]">Blokes</h1>
      <h1 className="opacity-0 transform translate-x-[40px]">Studios</h1>
      <h1 className="opacity-0 transform translate-x-[40px]">.</h1>
      <h1 className="opacity-0 transform translate-x-[40px]">.</h1>
      <h1 className="opacity-0 transform translate-x-[40px]">.</h1>
    </div>
  );
};

export default Loader;
