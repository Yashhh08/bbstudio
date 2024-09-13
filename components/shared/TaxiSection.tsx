import Image from "next/image";
import React, { useRef } from "react";
import taxi from "@/public/assets/images/bb-taxi.png";
import city from "@/public/assets/images/city.png";
import road from "@/public/assets/images/road.png";
import station from "@/public/assets/images/station.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TaxiSection = () => {
  const containerRef = useRef(null);
  const cityImageRef = useRef(null);
  const stationImageRef = useRef(null);
  const taxiImageRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(cityImageRef.current, {
        x: 0,
        duration: 3,
        ease: "none",
      });

      gsap.to(stationImageRef.current, {
        x: 0,
        duration: 3,
        ease: "none",
      });

      gsap.to(taxiImageRef.current, {
        x: 0,
        duration: 3,
        ease: "power1.out",
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
        />
      </div>

      <div className="max-sm:w-[100vw] w-[50vw] absolute left-[-35%] md:left-[20%] xl:left-[40%] max-sm:top-[15%] max-xl:top-[20%] top-[5%]">
        <Image
          src={station}
          alt="station"
          className="object-cover max-sm:scale-150 max-xl:scale-[2.2] scale-[1.1] translate-x-[300px] md:translate-x-[150px]"
          ref={stationImageRef}
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
        <Image
          src={road}
          alt="road"
          className="max-sm:scale-125"
        />
      </div>

      <div className="absolute bottom-[20%] lg:bottom-[15%] xl:bottom-[20%] left-[20%] md:left-[50%]">
        <Image
          src={taxi}
          alt="taxi"
          width={400}
          height={200}
          className="max-sm:scale-[0.9] max-lg:scale-105 -translate-x-[500px] md:-translate-x-[1200px]"
          ref={taxiImageRef}
        />
      </div>
    </div>
  );
};

export default TaxiSection;
