"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { List } from "@phosphor-icons/react";

function Header() {
  const [style, setStyle] = useState({
    style1: "py-8 bg-transparent text-white",
    style2: "after:bg-white",
    style3: "border-white",
  });

  useEffect(() => {
    const onPageScroll = () => {
      setStyle(
        window.pageYOffset > 20
          ? {
              style1:
                "py-6 shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,.15)] bg-white text-black",

              style2: "after:bg-black",
              style3: "border-black",
            }
          : {
              style1: "py-8 bg-transparent text-white",

              style2: "after:bg-white",
              style3: "border-white",
            }
      );
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section
      id="header"
      className={`${style.style1} fixed inset-x-0 top-0 px-8 lg:px-16 flex items-center justify-between duration-300 ease-linear font-medium z-40`}
    >
      <Link href="/" className="font-bold text-2xl">
        Japan<span className="text-[#A32F3F]">Trip</span>
      </Link>
      <div className="lg:flex gap-8 hidden">
        <Link
          href="/"
          className={`relative after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] ${style.style2} after:duration-300 after:ease-linear`}
        >
          Home
        </Link>
        <Link
          href="/gallery"
          className={`relative after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] ${style.style2} after:duration-300 after:ease-linear`}
        >
          Gallery
        </Link>
        <Link
          href="/blog"
          className={`relative after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] ${style.style2} after:duration-300 after:ease-linear`}
        >
          Blog
        </Link>
      </div>
      <Link
        href="/contact"
        className={`${style.style3} border-2 py-2 px-4 rounded hidden lg:inline-block`}
      >
        Contact Us
      </Link>
      <button className="text-[2.75rem] lg:hidden">
        <List />
      </button>
    </section>
  );
}

export default Header;