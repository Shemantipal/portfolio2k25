import Image from "next/image";
import Link from "next/link";

import aizen from "@/public/work/aizen.jpg";
import kamui from "@/public/work/kamui.jpg";
import pokedex from "@/public/work/pokedex.jpg";
import portfolio from "@/public/work/portfolio.jpg";
import cryptohunter from "@/public/work/crypto-hunter.jpg";
import redeye from "@/public/work/red-eye.jpg";
import evo from "@/public/work/evo.jpg";
import notion from "@/public/work/notion.jpg";
import nike from "@/public/work/nike.jpg";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: aizen,
      title: "Dashlyx",
      description: "no-code dashboard builder",
      link: "http://dashlyx.vercel.app/",
      target: "_self",
    },
    {
      id: 2,
      image: kamui,
      title: "Last Thought",
      description: "The Last Thought is an interactive gamified experience where every decision either strengthens your mind or feeds dependence on AI.",
      link: "https://lastthought.vercel.app/",
      target: "_self",
    },
    {
      id: 3,
      image: pokedex,
      title: "Mapmoire",
      description: "A gamified travel memory app. Pin cities, log story capsules with photos, quotes & music, earn XP, and share your journey as a beautiful travel diary.",
      link: "https://mapmoire.vercel.app/",
      target: "_self",
    },
    {
      id: 4,
      image: evo,
      title: "Habit Forest",
      description: "URL Shortener",
      link: "https://habit-forest-hyss.vercel.app/",
      target: "_blank",
    },
    {
      id: 5,
      image: nike,
      title: "Green Receipt",
      description: "carbon footprint calculator for your purchases",
      link: "https://green-receipt-six.vercel.app/",
      target: "_blank",
    },
    {
      id: 6,
      image: notion,
      title: "Stockmaster",
      description: "using numberplate and streamlit to create a stock market dashboard",
      link: "https://stockmaster.streamlit.app/",
      target: "_blank",
    },
    {
      id: 8,
      image: cryptohunter,
      title: "Scrapit",
      description: "Linkedin Job Scraper",
      link: "https://github.com/Shemantipal/scrapit",
      target: "_self",
    },
   
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-lg drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
