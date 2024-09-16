"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { navbarLinks } from "@/constants/navbarLinks";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import { IoMdArrowDropdown } from "react-icons/io";
import { workLinks } from "@/constants/workLinks";
import { calculatorLinks } from "@/constants/calculatorLinks";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#F9B31B] sticky top-0 z-10">
      <div className="w-11/12 xl:w-3/4 mx-auto p-4 flex justify-between items-center gap-3">
        <Link href={"/"}>
          <Image
            src="/assets/images/bb-white-logo.svg"
            alt="Bombay Blokes"
            width={214}
            height={31}
          />
        </Link>

        <div className="hidden md:flex justify-center items-center gap-1 xl:gap-5 font-medium text-[17px]">
          {navbarLinks.map((link) => {
            const active =
              pathname === link.path ? "bg-black text-[#F9B31B]" : "";

            if (link.name === "Work") {
              return (
                <div
                  key={link.path}
                  className={`p-[5px] rounded-lg transition-all hover:cursor-pointer relative group/main h-fit`}
                >
                  <p className="flex justify-center items-center gap-1">
                    {link.name}
                    <span>
                      <IoMdArrowDropdown className="group-hover/main:rotate-180 transition-all" />
                    </span>
                  </p>

                  <div className="hidden z-10 group-hover/main:flex transition-all bg-gradient-to-b from-white to-yellow-100 w-[400px] h-fit absolute left-[50%] top-8 transform translate-x-[-20%] rounded-xl flex-col gap-0 animate-fade-in">
                    {workLinks.map((workLink) => {
                      return (
                        <Link
                          href={workLink.path}
                          key={workLink.path}
                          className="rounded-lg transition-all group"
                        >
                          <div className="flex justify-start items-center gap-1">
                            <Image
                              src={workLink.icon}
                              alt={workLink.name}
                              width={70}
                              height={70}
                              className="group-hover:scale-90 transition-all"
                            />
                            <p className="group-hover:text-[#F9B31B] group-hover:underline underline-offset-8 group-hover:font-semibold text-black">
                              {workLink.name}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            if (link.name === "Calculator") {
              return (
                <div
                  key={link.path}
                  className={`p-[5px] rounded-lg transition-all hover:cursor-pointer relative group/main h-fit`}
                >
                  <p className="flex justify-center items-center gap-1">
                    {link.name}
                    <span>
                      <IoMdArrowDropdown className="group-hover/main:rotate-180 transition-all" />
                    </span>
                  </p>

                  <div className="hidden z-10 group-hover/main:flex transition-all bg-gradient-to-b from-white to-yellow-100 w-[400px] h-fit absolute left-[50%] top-9 transform translate-x-[-20%] rounded-xl flex-col gap-0 animate-fade-in">
                    {calculatorLinks.map((link) => {
                      return (
                        <Link
                          href={link.path}
                          key={link.path}
                          className="rounded-lg transition-all group"
                        >
                          <div className="flex justify-start items-center gap-1">
                            <Image
                              src={link.icon}
                              alt={link.name}
                              width={75}
                              height={75}
                              className="group-hover:scale-90 transition-all"
                            />
                            <p className="group-hover:text-[#F9B31B] group-hover:underline underline-offset-8 group-hover:font-semibold text-black">
                              {link.name}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                href={link.path}
                key={link.path}
                className={`hover:bg-black p-[5px] rounded-lg hover:text-[#F9B31B] transition-all ${active}`}
              >
                <p>{link.name}</p>
              </Link>
            );
          })}
        </div>

        <Link
          href={"https://bombayblokes.com/contact/"}
          className="hidden md:block"
        >
          <Button
            size={"lg"}
            className="rounded-xl text-[#F9B31B] dark:text-black hover:dark:text-[#F9B31B] hover:dark:bg-black hover:bg-white transition-all hover:text-black text-base"
            style={{
              boxShadow:
                "0px 3px 0px 0px rgba(163.20002746582028, 138.1397750621899, 74.1140972641651, 0.5",
            }}
          >
            Contact Us
          </Button>
        </Link>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
