/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";

import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import pranjal_header_black from "@/public/pranjal-header-black.svg";
import pranjal_header_white from "@/public/pranjal-header-white.svg";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const router = useRouter().asPath;

  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const touchRef = useRef(null);

  const Links = [
    { name: "timeline", link: "/timeline" },
    { name: "work", link: "/work" },
    { name: "about", link: "/about" },
    { name: "tech", link: "/tech" },
    { name: "education", link: "/education" },
    { name: "blog", link: "/blog" },
  ];

  const clickHandler = () => {
    setTimeout(() => {
      setOpen(false);
    }, 400);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (touchRef.current && !touchRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    setMounted(true);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav
      ref={touchRef}
      className={`${
        isScrolled
          ? "bg-opacity-80 shadow-lg border border-white/10"
          : "bg-opacity-60"
      }
      transition-all duration-300 z-40
      dark:text-white
      w-[92%] sm:w-[88%] md:w-[78%] lg:w-[66%] xl:w-[58%]
      max-w-5xl
      mx-auto
      bg-white/70 dark:bg-[#141414cc]
      backdrop-blur-xl
      top-3 sticky
      rounded-2xl`}
    >
      <div className="flex items-center justify-between py-2.5 md:py-3 px-4 md:px-6">
        <div className="cursor-pointer flex items-center">
          <Link href="/">
            {currentTheme === "dark" ? (
              <Image
                src={pranjal_header_black}
                alt="header"
                width={135}
                priority
              />
            ) : (
              <Image
                src={pranjal_header_white}
                alt="header"
                width={135}
                priority
              />
            )}
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-medium">
          {Links.map((link) => (
            <li key={link.name} className="text-[15px]">
              <Link
                href={link.link}
                className={`relative transition-all duration-300 hover:text-purple-500 ${
                  router === link.link
                    ? "text-purple-400"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                <span className="flex items-start gap-1">
                  {link.name}
                  {link.name === "timeline" && (
                    <sup className="text-[8px] rounded bg-red-600 px-1 text-white">
                      1
                    </sup>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="transition hover:scale-110"
            >
              <MdOutlineLightMode className="w-4 h-4 text-white" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="transition hover:scale-110"
            >
              <MdOutlineDarkMode className="w-4 h-4 text-black" />
            </button>
          )}

          <div
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[4px] cursor-pointer"
          >
            <span
              className={`h-[2px] w-5 bg-current transition-all duration-300 ${
                open ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-current transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[400px] pb-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 gap-5 pt-2">
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.link}
                onClick={clickHandler}
                className={`text-[15px] transition-all duration-300 ${
                  router === link.link
                    ? "text-purple-400"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                <span className="flex items-start gap-1">
                  {link.name}
                  {link.name === "timeline" && (
                    <sup className="text-[8px] rounded bg-red-600 px-1 text-white">
                      1
                    </sup>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;