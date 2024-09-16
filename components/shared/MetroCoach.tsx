"use client";

import Image from "next/image";
import React, { useState } from "react";
import metroCoach from "@/public/assets/images/metro-coach.png";
import { Button } from "../ui/button";
import { Maximize2, X } from "lucide-react";

interface Props {
  brand: string;
  videos: { id: string; src: string }[];
}

const MetroCoach = (props: Props) => {
  const [enlargedVideo, setEnlargedVideo] = useState(null);

  const handleEnlarge = (videoId: any) => {
    setEnlargedVideo(videoId);
  };

  const handleClose = () => {
    setEnlargedVideo(null);
  };

  return (
    <div className="relative h-[70vh] w-[1920px]">
      <Image
        src={metroCoach}
        alt="coach-1"
        fill
        className="absolute"
        priority
      />

      {props.videos.map((video, index) => (
        <div
          key={video.id}
          className={`absolute rounded-3xl overflow-hidden ${
            index === 0
              ? "left-[6%] top-[15%]"
              : index === 1
              ? "left-[25%] top-[15%]"
              : index === 2
              ? "right-[25%] top-[15%]"
              : "right-[6%] top-[15%]"
          }`}
        >
          <video width={270} autoPlay loop muted className="rounded-3xl">
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Button
            size="icon"
            variant="secondary"
            className="absolute bottom-2 right-2"
            onClick={() => handleEnlarge(video.id)}
          >
            <Maximize2 className="h-7 w-7 z-1 bg-white p-1 rounded-lg" />
          </Button>
        </div>
      ))}

      {enlargedVideo && (
        <div className="bg-opacity-75 z-50 left-[50%] translate-x-[-50%] w-[100vw]">
          <div className="relative w-[75vw]">
            <video autoPlay loop controls className="w-full h-full">
              <source
                src={
                  props.videos.find((v) => v.id === enlargedVideo)?.src || ""
                }
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-2 right-2"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* <div>
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
      </div> */}
    </div>
  );
};

export default MetroCoach;
