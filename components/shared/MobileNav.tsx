"use client";

import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { navbarLinks } from "@/constants/navbarLinks";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { workLinks } from "@/constants/workLinks";
import Image from "next/image";
import { calculatorLinks } from "@/constants/calculatorLinks";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center ml-2">
        <GiHamburgerMenu className="size-6" />
      </SheetTrigger>
      <SheetContent
        side={"right"}
        className="flex flex-col pt-10 justify-between overflow-auto bg-white"
      >
        <div className="flex flex-col gap-3">
          {navbarLinks.map((link) => {
            const active =
              pathname === link.path ? "bg-black text-[#F9B31B]" : "";

            if (link.name === "Work") {
              return (
                <Accordion type="single" collapsible key={link.path}>
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="font-semibold text-2xl pl-1">
                      {link.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      {workLinks.map((workLink) => {
                        return (
                          <SheetClose asChild key={workLink.path}>
                            <Link href={workLink.path}>
                              <div className="flex justify-start items-center gap-1">
                                <Image
                                  src={workLink.icon}
                                  alt={workLink.name}
                                  width={50}
                                  height={50}
                                  className="group-hover:scale-90 transition-all"
                                />
                                <p className="font-medium text-base">
                                  {workLink.name}
                                </p>
                              </div>
                            </Link>
                          </SheetClose>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            }

            if (link.name === "Calculator") {
              return (
                <Accordion type="single" collapsible key={link.path}>
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="font-semibold text-2xl pl-1">
                      {link.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      {calculatorLinks.map((link) => {
                        return (
                          <SheetClose asChild key={link.path}>
                            <Link href={link.path}>
                              <div className="flex justify-start items-center gap-1">
                                <Image
                                  src={link.icon}
                                  alt={link.name}
                                  width={50}
                                  height={50}
                                  className="group-hover:scale-90 transition-all"
                                />
                                <p className="font-medium text-base">
                                  {link.name}
                                </p>
                              </div>
                            </Link>
                          </SheetClose>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            }

            return (
              <SheetClose asChild key={link.name}>
                <Link
                  href={link.path}
                  className={`flex justify-start items-center font-semibold text-2xl rounded-lg w-fit p-[7px] ${active}`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </div>

        <SheetClose asChild>
          <Link href={"https://bombayblokes.com/contact/"}>
            <Button
              size={"lg"}
              className="rounded-xl text-[#F9B31B] dark:text-black hover:bg-white transition-all hover:text-black text-base w-full"
            >
              Contact Us
            </Button>
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
