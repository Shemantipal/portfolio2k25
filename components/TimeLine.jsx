import React from "react";

const TimeLine = () => {
  const data = [
    {
      id: 0,
      title: "Full Stack Developer",
      mode: "Remote",
      duration: "Oct 2024 - Present",
      org: "HyRecruitAI (Prepverse)",
      skills: [
        "Next.js",
        "TypeScript",
        "Zod",
        "PostgreSQL",
        "Drizzle ORM",
        "Redux.js",
        "SASS",
      ],
      points: [
        "Contributed to 5X user growth over 3 months by supporting GTM experiments, analyzing user behavior, and iterating on product experiences.",
        "Translated user feedback into AI-powered agent features and UX improvements that improved engagement and platform usefulness.",
        "Designed and developed a blog management workflow with a custom WYSIWYG + Markdown editor inspired by Tiptap.",
        "Implemented in-browser audio recording for coding interview catalogs with smooth capture, upload, and playback support.",
        "Built workflows for company-specific coding contests and candidate recommendation architecture based on contest performance and analytics.",
        "Worked with Next.js, TypeScript, Zod, PostgreSQL, and Drizzle ORM for schemas, migrations, and query monitoring.",
      ],
      badge: "Latest",
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
      dot: "bg-purple-500",
    },
    {
      id: 1,
      title: "Full Stack Developer Intern",
      mode: "Onsite - Kolkata, India",
      duration: "Aug 2025 - Oct 2025",
      org: "VECC, BARC, Govt. of India",
      skills: [
        "Groovy",
        "Grails",
        "Java",
        "OracleDB",
        "Oracle SQL Developer",
        "REST APIs",
      ],
      points: [
        "Worked under the Calcutta Regional Stock Unit on the VEDA project, developing secure and scalable modules using Groovy on Grails, Java, and Oracle DB.",
        "Designed RESTful APIs, optimized Oracle DB queries, and implemented database procedures for large-scale scientific data workflows.",
        "Upgraded and streamlined UI components to improve usability for internal researchers, scientists, and technical staff.",
      ],
      color: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
      dot: "bg-red-500",
    },
    {
      id: 2,
      title: "Design Lead",
      mode: "Remote",
      duration: "Jul 2024 - Jul 2025",
      org: "Google Developer Groups On Campus",
      skills: ["Figma", "Canva", "React.js", "Next.js", "UI/UX", "Community"],
      points: [
        "Helped build and support a vibrant community of 700+ college students interested in technology, design, and development.",
        "Designed user-friendly and accessible interfaces for websites and applications with a focus on visual appeal and usability.",
        "Collaborated with GDG leads and industry experts to plan and execute events, hackathons, and technical workshops.",
      ],
      color:
        "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
      dot: "bg-green-500",
    },
    {
      id: 3,
      title: "Technical Content Writer Intern",
      mode: "Remote",
      duration: "Nov 2023 - May 2024",
      org: "BashSchool",
      skills: ["React.js", "Python", "Technical Writing", "Content"],
      points: [
        "Created beginner-friendly technical content around programming, development, and modern web technologies.",
        "Worked on simplifying technical concepts into clear, readable, and practical learning material.",
        "Improved content structure and readability for students and early-stage developers.",
      ],
      color:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
      dot: "bg-yellow-500",
    },
    {
      id: 4,
      title: "Contributor",
      mode: "Remote",
      duration: "May 2023",
      org: "GirlScript Summer of Code 2023",
      skills: ["Python", "Data Analysis", "Machine Learning", "Open Source"],
      points: [
        "Contributed to open-source projects and collaborated with developers across different repositories.",
        "Worked on beginner-friendly improvements involving Python, data analysis, and machine learning concepts.",
        "Gained hands-on experience with Git, GitHub workflows, and collaborative software development.",
      ],
      color: "bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300",
      dot: "bg-pink-500",
    },
  ];

  return (
    <div className="w-full">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {data.map((item) => (
          <li className="mb-12 ms-6" key={item.id}>
            <span
              className={`absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-white dark:ring-gray-950 ${item.dot}`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
            </span>

            <div className="rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-md p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <h3 className="flex flex-wrap items-center gap-2 text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}

                    {item.badge && (
                      <span className="bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </h3>

                  <p className="mt-1 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                    {item.org}
                  </p>

                  <p className="mt-1 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    {item.mode}
                  </p>
                </div>

                <time className="w-max rounded-full bg-gray-100 dark:bg-white/10 px-3 py-1 text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300">
                  {item.duration}
                </time>
              </div>

              <ul className="mt-5 space-y-3 text-sm md:text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`${item.color} text-xs md:text-sm font-medium px-3 py-1 rounded-full`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimeLine;