"use client";

import Image from "next/image";
import React from "react";
import metroCoach from "@/public/assets/images/metro-coach.png";

const MetroCoach = () => {
  return (
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
  );
};

export default MetroCoach;
