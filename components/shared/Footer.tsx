import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full xl:w-3/4 mx-auto p-4 flex flex-col justify-between items-center gap-3">
      <div className="flex flex-col md:flex-row justify-between w-full md:items-center">
        <Link href={"/"}>
          <Image
            src="/assets/images/bb-yellow-logo.webp"
            alt="Bombay Blokes"
            width={214}
            height={31}
          />
        </Link>

        <div className="flex flex-col gap-1">
          <p className="font-medium">Mail Us</p>
          <Link
            href={"mailto:hello@bombayblokes.com"}
            className="font-semibold text-[22px]"
          >
            hello@bombayblokes.com
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium">Call Us</p>
          <Link href={"tel:919987558189"} className="font-semibold text-[22px]">
            +91 99875 58189
          </Link>
        </div>
      </div>

      <hr className="w-full h-1 my-3" />

      <div className="flex flex-col max-sm:flex-col-reverse gap-3 md:flex-row justify-between w-full">
        <p className="text-sm">
          Copyright ©2023 Bombay Blokes. All rights reserved.
        </p>

        <div className="flex flex-wrap ">
          <Link
            href={"https://bombayblokes.com/"}
            className="text-sm hover:text-[#F9B31B] transition-all"
          >
            Home
          </Link>

          <span className="mx-2 border-l h-6"></span>

          <Link
            href={"https://bombayblokes.com/our-clients/"}
            className="text-sm hover:text-[#F9B31B] transition-all"
          >
            Our Clients
          </Link>

          <span className="mx-2 border-l h-6"></span>

          <Link
            href={"https://bombayblokes.com/contact/"}
            className="text-sm hover:text-[#F9B31B] transition-all"
          >
            Contact
          </Link>

          <span className="mx-2 border-l h-6"></span>

          <Link
            href={"https://bombayblokes.com/client-registration/"}
            className="text-sm hover:text-[#F9B31B] transition-all"
          >
            Client Registration
          </Link>

          <span className="mx-2 border-l h-6"></span>

          <Link
            href={"https://bombayblokes.com/service-affiliates/"}
            className="text-sm hover:text-[#F9B31B] transition-all"
          >
            Service Affilation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
