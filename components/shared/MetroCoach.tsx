"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import metroCoach from "@/public/assets/images/metro-coach.png";
import { Button } from "../ui/button";
import { Maximize2, X } from "lucide-react";
import videoDefault from "@/public/assets/images/video-default.png";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "../ui/aspect-ratio";
import { brands } from "@/constants/brands";
interface Props {
  brand1: string;
  brand2: string;
  videos: { id: string; src: string; poster: string }[];
}

const MetroCoach = (props: Props) => {
  const [enlargedVideo, setEnlargedVideo] = useState(null);
  const [loadedVideos, setLoadedVideos] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    const videoElements = props.videos.map((video) => {
      if (video.src && video.src.length > 0) {
        const videoElement = document.createElement("video");
        videoElement.src = video.src;
        videoElement.preload = "auto";
        videoElement.muted = true;
        videoElement.playsInline = true;

        videoElement.onloadstart = () => {
          setLoadedVideos((prev) => ({ ...prev, [video.id]: true }));
        };

        return videoElement;
      }
      return null;
    });

    return () => {
      videoElements.forEach((element) => {
        if (element) {
          element.oncanplaythrough = null;
        }
      });
    };
  }, [props.videos]);

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

      <p
        className={`absolute ${
          props.brand1.length > 7 ? "left-[19%]" : "left-[22%]"
        } bottom-[20%] text-2xl font-semibold`}
      >
        {props.brand1}
      </p>
      <p
        className={`absolute ${
          props.brand2.length > 7 ? "right-[19%]" : "right-[22%]"
        } bottom-[20%] text-2xl font-semibold`}
      >
        {props.brand2}
      </p>

      {props.videos.map((video, index) => (
        <div
          key={video.id}
          className={`absolute rounded-3xl overflow-hidden w-[280px] ${
            index === 0
              ? "left-[6%] top-[15%]"
              : index === 1
              ? "left-[25%] top-[15%]"
              : index === 2
              ? "right-[25%] top-[15%]"
              : "right-[6%] top-[15%]"
          }`}
        >
          <AspectRatio ratio={1 / 1}>
            {video.src && video.src.length > 0 ? (
              <div className="relative w-full h-full">
                <div
                  className={`absolute inset-0 bg-gray-200 animate-pulse ${
                    loadedVideos[video.id]
                      ? "hidden"
                      : "flex items-center justify-center"
                  }`}
                >
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
                <video
                  height="full"
                  width="full"
                  // autoPlay
                  loop
                  muted
                  playsInline
                  poster={video.poster ? video.poster : "./assets/images/video-default.png"}
                  className={`rounded-3xl object-cover ${
                    loadedVideos[video.id] ? "" : "invisible"
                  }`}
                  onMouseEnter={(e) => {
                    e.currentTarget.play();
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                  }}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <Image
                src={videoDefault}
                alt={video.id}
                className="rounded-3xl object-cover"
              />
            )}
          </AspectRatio>

          {video.src && video.src.length > 0 && (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-2 right-2 rounded-3xl"
                  onClick={() => handleEnlarge(video.id)}
                >
                  <Maximize2 className="h-7 w-7 z-1 bg-white p-1 rounded-lg" />
                </Button>
              </DialogTrigger>

              <DialogContent className="border-none h-fit flex justify-center items-center">
                <video
                  autoPlay
                  loop
                  controls
                  className="w-full h-full rounded-xl"
                >
                  <source
                    src={
                      props.videos.find((v) => v.id === enlargedVideo)?.src ||
                      ""
                    }
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </DialogContent>
            </Dialog>
          )}
        </div>
      ))}
    </div>
  );
};

export default MetroCoach;
