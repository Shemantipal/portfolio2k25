import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Databricks vs Snowflake: A Comprehensive Comparison for Data Analysts and Data Scientists",
      date: "March 20, 2025",
      description: "This article provides a detailed comparison of Databricks and Snowflake based on key features, performance, scalability, cost, and integration capabilities.",
      link: "https://www.prepverse.xyz/blog/databricks-vs-snowflake-a-comprehensive-comparison-for-data-analysts-and-data-scientists",
    },
    {
      id: 2,
      title: "DevPod in Action",
      date: "April 10, 2024",
      description: "Found out about DevPod-an open-source development environment . Our entire development journey took place within DevPod that proved incredibly beneficial. Its lightning-fast performance ensured seamless application development, whether solo or in collaborative mode.",
      link: "https://dev.to/shemanti/devpod-in-action-5g1f",
    },
    {
      id: 3,
      title: "Crafting An AI-Powered Code Critic",
      date: "April 25, 2024",
      description: "Developer's favourite Code Reviewer application that releases you from the boundaries of opening multiple tabs to debug and just switch to a single application to analyse not just errors but also your code quality. Apart from Devs, the application is build for escalating interview rounds at organisations rather than spending hours to review candidate's code cleanliness & robustness.",
      link: "https://dev.to/shemanti/crafting-an-ai-powered-code-critic-223o",
    },
    {
        id: 4,
        title: "Why Engineering Is a Scam? A Developer's Perspective",
        date: "March 07, 2025",
        description: "Not because engineering isn’t valuable or the work isn’t real, but because of what they don’t tell you when you sign up for this career path.",
        link: "https://www.prepverse.xyz/blog/why-engineering-is-a-scam-a-developers-perspective",
      },
      {
        id: 5,
        title: "Open Source vs. Proprietary Software: The Ultimate Showdown",
        date: "March 04, 2025",
        description: "what actually matters when choosing between open-source and proprietary software—because trust me, the real answer isn't what most tech articles will tell you.",
        link: "https://www.prepverse.xyz/blog/open-source-vs-proprietary-software-the-ultimate-showdown",
      },
      {
        id: 6,
        title: "Top 15 Best Open Source Projects on GitHub 2025",
        date: "March 11, 2025",
        description: "This article highlights the top 15 fastest-growing open-source GitHub projects in 2025, covering AI, automation, data analytics, development tools, and real-time communication solutions. Whether you're preparing for technical interviews, enhancing your coding skills, or looking for the best open-source alternatives, this list will help you discover cutting-edge technologies shaping the future.",
        link: "https://www.prepverse.xyz/blog/top-15-best-open-source-projects-on-github-2025",
      },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Latest Blogs</h1>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
            <p className="text-gray-700 mb-4">{blog.description}</p>
            <a
              href={blog.link}
              className="text-blue-500 hover:underline font-medium"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
