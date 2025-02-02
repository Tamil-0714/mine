import React from "react";
import SpotlightCard from "../sub/SpotlightCard";
// import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Card, CardContent } from "../ui/card";
// import { Github } from "lucide-react";
import { DiGithub } from "react-icons/di";

import "./projectCSS.css";

const projects = [
  {
    title: "LMS SaaS Web App",
    thumbnailURL: "/projects/eLearning.png",
    description: ` This innovative project showcases the latest in web development
                technologies. Utilizing React and Next.js, it demonstrates
                responsive design, efficient state management, and seamless user
                interactions. The project incorporates modern UI/UX principles,
                ensuring an engaging and intuitive user experience across all
                devices.`,
    gitLink: "https://github.com/yourusername/your-project",
  },
  {
    title: "LMS SaaS Web App",
    thumbnailURL: "/projects/eLearning.png",
    description: ` This innovative project showcases the latest in web development
                technologies. Utilizing React and Next.js, it demonstrates
                responsive design, efficient state management, and seamless user
                interactions. The project incorporates modern UI/UX principles,
                ensuring an engaging and intuitive user experience across all
                devices.`,
    gitLink: "https://github.com/yourusername/your-project",
  },
  {
    title: "LMS SaaS Web App",
    thumbnailURL: "/projects/eLearning.png",
    description: ` This innovative project showcases the latest in web development
                technologies. Utilizing React and Next.js, it demonstrates
                responsive design, efficient state management, and seamless user
                interactions. The project incorporates modern UI/UX principles,
                ensuring an engaging and intuitive user experience across all
                devices.`,
    gitLink: "https://github.com/yourusername/your-project",
  },
  {
    title: "LMS SaaS Web App",
    thumbnailURL: "/projects/eLearning.png",
    description: ` This innovative project showcases the latest in web development
                technologies. Utilizing React and Next.js, it demonstrates
                responsive design, efficient state management, and seamless user
                interactions. The project incorporates modern UI/UX principles,
                ensuring an engaging and intuitive user experience across all
                devices.`,
    gitLink: "https://github.com/yourusername/your-project",
  },
  {
    title: "LMS SaaS Web App",
    thumbnailURL: "/projects/eLearning.png",
    description: ` This innovative project showcases the latest in web development
                technologies. Utilizing React and Next.js, it demonstrates
                responsive design, efficient state management, and seamless user
                interactions. The project incorporates modern UI/UX principles,
                ensuring an engaging and intuitive user experience across all
                devices.`,
    gitLink: "https://github.com/yourusername/your-project",
  },
  {
    title: "LMS SaaS Web App",
    thumbnailURL: "/projects/eLearning.png",
    description: ` This innovative project showcases the latest in web development
                technologies. Utilizing React and Next.js, it demonstrates
                responsive design, efficient state management, and seamless user
                interactions. The project incorporates modern UI/UX principles,
                ensuring an engaging and intuitive user experience across all
                devices.`,
    gitLink: "https://github.com/yourusername/your-project",
  },
  {
    title: "LMS SaaS Web App",
    thumbnailURL: "/projects/eLearning.png",
    description: ` This innovative project showcases the latest in web development
                technologies. Utilizing React and Next.js, it demonstrates
                responsive design, efficient state management, and seamless user
                interactions. The project incorporates modern UI/UX principles,
                ensuring an engaging and intuitive user experience across all
                devices.`,
    gitLink: "https://github.com/yourusername/your-project",
  },
  {
    title: "LMS SaaS Web App",
    thumbnailURL: "/projects/eLearning.png",
    description: ` This innovative project showcases the latest in web development
                technologies. Utilizing React and Next.js, it demonstrates
                responsive design, efficient state management, and seamless user
                interactions. The project incorporates modern UI/UX principles,
                ensuring an engaging and intuitive user experience across all
                devices.`,
    gitLink: "https://github.com/yourusername/your-project",
  },
  {
    title: "LMS SaaS Web App",
    thumbnailURL: "/projects/eLearning.png",
    description: ` This innovative project showcases the latest in web development
                technologies. Utilizing React and Next.js, it demonstrates
                responsive design, efficient state management, and seamless user
                interactions. The project incorporates modern UI/UX principles,
                ensuring an engaging and intuitive user experience across all
                devices.`,
    gitLink: "https://github.com/yourusername/your-project",
  },
  {
    title: "LMS SaaS Web App",
    thumbnailURL: "/projects/eLearning.png",
    description: ` This innovative project showcases the latest in web development
                technologies. Utilizing React and Next.js, it demonstrates
                responsive design, efficient state management, and seamless user
                interactions. The project incorporates modern UI/UX principles,
                ensuring an engaging and intuitive user experience across all
                devices.`,
    gitLink: "https://github.com/yourusername/your-project",
  },
];

const Project = () => {
  return (
    <div
      style={{
        marginLeft: "40px",
        overflow: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
        gap: "20px",
        padding: "20px",
        height: "80vh",
        marginTop: "30px",
      }}
      className="project-wrapper"
    >
      {projects.map((ele) => (
        <div
          className="single-card"
          style={{
            width: "350px",
          }}
        >
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(80 ,70 ,54 ,0.2)"
          >
            <Card
              style={{
                cursor: "pointer",
              }}
            >
              <CardContent className="p-6 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4">{ele.title}</h2>

                <img
                  src={ele.thumbnailURL}
                  alt="Project Image"
                  width={300}
                  height={200}
                  style={{
                    outline: "1px solid white",
                  }}
                  className="rounded-md mb-4"
                />

                <p className="text-sm mb-4">{ele.description}</p>

                <a
                  href={ele.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <DiGithub className="w-5 h-5 mr-2" />
                  Visit Project
                </a>
              </CardContent>
            </Card>
          </SpotlightCard>
        </div>
      ))}
    </div>
  );
};

export default Project;
