import { useEffect, useState } from "react";
import Link from "next/link";
import { FiGitBranch } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import Image from "next/image";
import LinkedIn from "../public/icons/linkedin@2x.png";
import GitHub from "../public/icons/github@2x.png";
import Behance from "../public/icons/behance@2x.png";
import Instagram from "../public/icons/instagram@2x.png";
import Gmail from "../public/icons/google@2x.png";
import Star from "@/public/Star.svg";

const Footer = () => {
  const [metaData, setMetaData] = useState({ star: 0, forks: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/pranjalshikhar/portfolio-v3"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setMetaData({
          star: data.stargazers_count || 0,
          forks: data.forks_count || 0,
        });
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="flex select-none text-sm py-16 mt-16 flex-col h-max items-center mx-auto justify-center">
      <div className="flex justify-center space-x-4 md:space-x-6 dark:text-white/70 text-gray-500 text-xs mt-2">
        <Link href="https://www.linkedin.com/in/shemanti-pal-954006280/" target="_blank">
          <Image src={LinkedIn} alt="LinkedIn" width="30" />
        </Link>
        <Link href="https://github.com/shemantipal?tab=repositories" target="_blank">
          <Image src={GitHub} alt="GitHub" width="30" />
        </Link>
       
        <a href="https://instagram.com/shemantipal" target="_blank">
          <Image src={Instagram} alt="Instagram" width="30" />
        </a>
        <Link href="mailto:shemantipal.sun@gmail.com" target="_blank">
          <Image src={Gmail} alt="Gmail" width="30" />
        </Link>
      </div>

      <a href="https://github.com/shemantipal" target="_blank" className="flex flex-col text-center group w-max">
        <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="relative transition-all">
          <p className={`font-bold text-lg transition ${isHovering ? "scale-150 blur-sm" : ""}`}>
           shemanti pal
          </p>
          {isHovering && (
            <p className="absolute top-[35%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-purple-100 px-2 py-1 rounded-2xl backdrop-blur-lg opacity-100 text-gray-800 font-bold">
              <span>Amazing? </span>
              <Image src={Star} alt="star" className="h-5 w-5 inline" />
              <span> GitHub Repo</span>
            </p>
          )}
        </div>

        <div className="flex space-x-4">
          <div className="flex space-x-1 items-center">
            <FaRegStar className="h-4 w-4" />
            <p className="font-semibold text-sm">{metaData.star}</p>
          </div>
          <div className="flex space-x-1 items-center">
            <FiGitBranch className="h-4 w-4" />
            <p className="font-semibold text-sm">{metaData.forks}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Footer;
