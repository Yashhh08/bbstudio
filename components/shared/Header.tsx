"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-4">
      <header className="flex justify-between items-center bg-black p-4 text-[#FAB31C] font-medium rounded-lg text-lg">
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:text-orange-400 hover:scale-95 transition-all"
          >
            Menu
          </button>
          {isMenuOpen && (
            <div className="flex flex-col gap-2 absolute w-fit p-8 bg-white mt-8 left-0 rounded-lg text-xl font-medium bg-gradient-to-b from-white to-yellow-100 border text-black">
              {/* <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="transition-all hover:scale-95 hover:underline hover:text-orange-400 underline-offset-4"
              >
                Home
              </Link> */}
              <Link
                href="https://bombayblokes.com/services/"
                onClick={() => setIsMenuOpen(false)}
                className="transition-all hover:scale-95 hover:underline hover:text-orange-400 underline-offset-4"
              >
                Services
              </Link>
              <Link
                href="https://bombayblokes.com/work/"
                onClick={() => setIsMenuOpen(false)}
                className="transition-all hover:scale-95 hover:underline hover:text-orange-400 underline-offset-4"
              >
                Works
              </Link>
              <Link
                href="https://bombayblokes.com/our-clients/"
                onClick={() => setIsMenuOpen(false)}
                className="transition-all hover:scale-95 hover:underline hover:text-orange-400 underline-offset-4"
              >
                Clients
              </Link>
              <Link
                href="https://bombayblokes.com/career/"
                onClick={() => setIsMenuOpen(false)}
                className="transition-all hover:scale-95 hover:underline hover:text-orange-400 underline-offset-4"
              >
                Careers
              </Link>
              <Link
                href="https://bombayblokes.com/career/"
                onClick={() => setIsMenuOpen(false)}
                className="transition-all hover:scale-95 hover:underline hover:text-orange-400 underline-offset-4"
              >
                Blogs
              </Link>
            </div>
          )}
        </div>
        <Image
          src={"/assets/images/bb-icon.webp"}
          alt="bb-icon"
          height={40}
          width={40}
          className="border-2 border-[#FAB31C] rounded-full"
        />

        <Link
          href={"https://bombayblokes.com/contact/"}
          className="hover:text-orange-400 hover:scale-95 transition-all"
        >
          Contact
        </Link>
      </header>
    </div>
  );
};

export default Header;
