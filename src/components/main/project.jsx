import React from "react";
import SpotlightCard from "../sub/SpotlightCard";
// import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Card, CardContent } from "../ui/card";
// import { Github } from "lucide-react";
import { DiGithub } from "react-icons/di";

import "./projectCSS.css";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "LMS SaaS Web App",
    thumbnailURL: "/projects/eLearning.png",
    description: `A feature-rich learning platform where users can join multiple courses with a simple Google login. It offers a hands-on learning experience with powerful tools like web code execution, real-time chat with multiple chat rooms, and integrated note-taking. Designed for seamless collaboration and interactive learning. And can handle multiple concurrent users easily 🚀 `,
    gitLink: "https://github.com/Tamil-0714/LMS-SaaS-Platform",
  },
  {
    title: "C HTTP Audio Server",
    thumbnailURL: "/projects/chttp.png",
    description: `Developed an efficient server for delivering audio files in Base64 format with custom JSON.stringify and Base64 encoding. Achieved 1,461.95 requests/sec with 0.684 ms response time for 50 concurrent connections. Designed robust socket communication to handle 1,000+ concurrent requests with 99% uptime. Optimized memory-efficient data serialization for minimal overhead, ensuring low-latency, high-throughput audio streaming. 🚀`,
    gitLink: "https://github.com/Tamil-0714/C-HTTP-Audio-Server",
  },
  {
    title: "College ERP System",
    thumbnailURL: "/projects/clgeERP.png",
    description: `Developed a comprehensive Enterprise Resource Planning (ERP) system for colleges using Node.js, EJS, and MySQL. Designed a robust database structure to efficiently manage multiple departments, courses, and staff assignments. Implemented student-course mapping, faculty management, and an automated attendance system for seamless academic operations. Optimized for scalability and efficient data handling. 🚀`,
    gitLink: "https://github.com/tamil-0714/ERP_system/",
  },
  {
    title: "File Handling System",
    thumbnailURL: "/projects/FileHandler.png",
    description: ` Built a React & Node.js application for secure file handling, supporting PDF, PPT, DOCX, and TXT formats. Used Multer to manage file uploads in different directories and MySQL to store file metadata and user data. Only admins can upload files to assigned users, ensuring controlled access. Users can view, download, and work on files, then request permission to re-upload their modified versions. Designed for secure and efficient document management with role-based access control. 🚀`,
    gitLink: "https://github.com/Tamil-0714/Intern-Project",
  },
  {
    title: "Flipcart Review Analyser",
    thumbnailURL: "/projects/flipcarReview.png",
    description: ` Developed a Node.js & EJS application that fetches product reviews from Flipkart using the Flipkart API, implementing pagination to retrieve all review pages efficiently. Integrated the Gemini API to analyze and detect fake reviews based on patterns and inconsistencies. Leveraged Chart.js to visually represent reviews through bar charts and track fake review trends over time using a line graph. Designed to provide insightful analytics for users to distinguish between genuine and misleading reviews, enhancing transparency in online shopping. 🚀`,
    gitLink: "https://github.com/Tamil-0714/FlipCart_review_analyser",
  },
  {
    title: "SmartTrack: IoT-Enabled Attendance System",
    thumbnailURL: "/projects/iotAttend.png",
    description: ` Developed an RFID and IoT-based attendance management system to automate student attendance tracking. RFID tags assigned to students are scanned automatically upon entry, with data securely stored in a MySQL database. Integrated Node.js encryption algorithms to enhance security and prevent unauthorized access. The system ensures real-time attendance logging, reduces manual errors, and prevents proxy attendance. With IoT integration, attendance data is accessible remotely, enabling efficient monitoring and reporting. Designed to improve accuracy, efficiency, and security in educational institutions. 🚀`,
    gitLink: "https://github.com/Tamil-0714/RFIDAttend",
  },

  {
    title: "IoT-Based Automatic Traffic Management System",
    thumbnailURL: "/projects/IotTrafic.png",
    description: `Developed a smart traffic control system using LiDAR sensors, Arduino, and OpenCV for real-time traffic monitoring. The system automatically adjusts traffic signals based on vehicle density, ensuring smoother traffic flow. LiDAR sensors detect vehicle count on each road side, while OpenCV-powered camera processing verifies vehicle numbers for accurate decision-making. Implemented as a small-scale demo, this project showcases the potential of IoT and computer vision in optimizing urban traffic management. 🚦🚀`,
    gitLink: "https://github.com/Tamil-0714/Electronic-Project",
  },
  {
    title: "MCQ Exam App (Local Hosting)",
    thumbnailURL: "/projects/MCQProj.png",
    description: `Developed a full-stack web application for conducting MCQ-based exams in a local network without requiring an internet connection. Built with React (frontend), Node.js & Express.js (backend), and MySQL (database) for secure exam management. Features session handling with a secret key, automatic answer saving, and seamless answer retrieval on refresh or relogin. Designed for offline reliability, ensuring smooth performance without network issues. 🚀`,
    gitLink: "https://github.com/Tamil-0714/ReactJs/tree/main/Question%20Project",
  },
  {
    title: "Fusic Flayer",
    thumbnailURL: "/projects/FusicFlayer.png",
    description: ` Developed a custom audio player with HTML, CSS, and JavaScript for seamless music playback. Built a Node.js-based audio server that streams songs in Base64-encoded format, ensuring smooth and efficient delivery. The player features synchronized lyrics display, random song playback, and a clean, responsive UI for an immersive listening experience. Designed for fast and reliable audio streaming with a seamless frontend experience. 🎵🚀`,
    gitLink: "https://github.com/yourusername/your-project",
  },
  {
    title: "",
    thumbnailURL: "/projects/",
    description: ` `,
    gitLink: "#",
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
            spotlightColor="rgba(230 ,200 ,154 ,0.2)"
          >
            <Card
              style={
                {
                  // cursor: "pointer",
                }
              }
            >
              <CardContent className="p-6 flex flex-col h-[500px] items-center">
                <h2 className="text-2xl font-bold mb-4">{ele.title}</h2>

                <div
                  className="w-[300px] h-[200px] flex items-center justify-center overflow-hidden"
                  style={{
                    borderBottom: "2px solid white",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src={ele.thumbnailURL}
                    alt="Project Image"
                    className="rounded-md mb-4"
                  />
                </div>
                <p
                  className="text-sm mb-4 decs-scroll"
                  style={{
                    height: "160px",
                    overflow: "auto",
                  }}
                >
                  {ele.description}
                </p>

                <a
                  href={ele.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <FaGithub className="w-5 h-5 mr-2" />
                  Visit Repository
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
