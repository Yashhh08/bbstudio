"use client";

import Image from "next/image";
import React, { useRef } from "react";
import taxi from "@/public/assets/images/bb-taxi.png";
import city from "@/public/assets/images/city.png";
import road from "@/public/assets/images/road.png";
import station from "@/public/assets/images/station.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Button } from "../ui/button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TaxiSection = (props: { handleEnter: () => void }) => {
  const containerRef = useRef(null);
  const cityImageRef = useRef(null);
  const stationImageRef = useRef(null);
  const taxiImageRef = useRef(null);
  const enterButton = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({});

      tl.to(
        cityImageRef.current,
        {
          x: 0,
          duration: 3,
          ease: "none",
        },
        "-"
      );

      tl.to(
        stationImageRef.current,
        {
          x: 0,
          duration: 3,
          ease: "none",
        },
        "-"
      );

      tl.to(
        taxiImageRef.current,
        {
          x: 0,
          duration: 3,
          ease: "power1.out",
        },
        "-"
      );

      tl.to(enterButton.current, {
        display: "block",
        opacity: 1,
        duration: 1,
        ease: "power4.in",
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] overflow-hidden"
    >
      <div className="max-sm:w-[100vw] w-[50vw] absolute left-0 max-sm:top-[15%] max-xl:top-[25%] top-[5%]">
        <Image
          src={city}
          alt="city"
          className="object-cove max-sm:scale-150 max-xl:scale-[2.2] scale-[1.1] translate-x-[150px]"
          ref={cityImageRef}
          priority
        />
      </div>

      <div className="max-sm:w-[100vw] w-[50vw] absolute left-[-35%] md:left-[20%] xl:left-[40%] max-sm:top-[15%] max-xl:top-[20%] top-[5%]">
        <Image
          src={station}
          alt="station"
          className="object-cover max-sm:scale-150 max-xl:scale-[2.2] scale-[1.1] translate-x-[300px] md:translate-x-[150px]"
          ref={stationImageRef}
          priority
        />
      </div>

      {/* <div className="w-[120vw] absolute max-sm:top-[45%] top-[57%] -left-5">
        <Image
          src={road}
          alt="road"
          className="max-sm:scale-125 max-2xl:opacity-0 opacity-100"
        />
      </div> */}

      <div className="w-[120vw] absolute bottom-[40%] md:bottom-[30%] lg:bottom-[17%] xl:bottom-[30%] -left-5">
        <Image src={road} alt="road" className="max-sm:scale-125" priority/>
      </div>

      <div className="absolute bottom-[20%] lg:bottom-[15%] xl:bottom-[20%] left-[20%] md:left-[50%]">
        <Image
          src={taxi}
          alt="taxi"
          width={400}
          height={200}
          className="max-sm:scale-[0.9] max-lg:scale-105 -translate-x-[500px] md:-translate-x-[1200px]"
          ref={taxiImageRef}
          priority
        />
      </div>

      <div className="absolute left-[50%] translate-x-[-50%] top-3">
        <Button
          ref={enterButton}
          className="animate-pulse transition-all hidden opacity-0 hover:bg-[#F9B31B] hover:text-black"
          onClick={props.handleEnter}
        >
          Enter Studio
        </Button>
      </div>
    </div>
  );
};

export default TaxiSection;
