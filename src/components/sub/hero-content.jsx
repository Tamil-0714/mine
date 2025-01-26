// import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaNode,
  FaReact,
  FaPython,
  FaJava,
} from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import {
  SiThreedotjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostman,
  SiApollographql,
} from "react-icons/si";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  bounceVariants,
} from "@/lib/motion";
import { OrbitingCircles } from "./OrbitalSkill";
import { FaDocker, FaUbuntu } from "react-icons/fa";
import SparklesText from "./sparkles-text";
import { FlipWords } from "./flip-words";
import SkillTagCloud from "./roatingSkills";
import Magnet from "./Magnet";
const words = ["Javascript.", "Node.js", "React.js", "Backend.", "Frontend."];
export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 ml-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={bounceVariants}
          exit="exit"
          initial="initial"
          animate="animate"
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesText className="mx-2 text-white" text="Hey there!👋" />
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          // exit="exit"
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Tamilarasan
            </span>{" "}
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          // exit="exit"
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          <h2 className="mt-0 font-bold lg:text-2xl md:text-xl sm:text-lg flex flex-row items-center">
            <span className="text-white">I am a Web App Developer in</span>
            <div className="text-slate-900">
              <FlipWords words={words} />
            </div>
          </h2>
        </motion.div>
        <motion.p
          className="mt-0  text-white font-medium lg:w-4/5"
          variants={slideInFromLeft(1)}
          // exit="exit"
        >
          Welcome to my portfolio! I hope you enjoy your visit. I specialize in
          Back-End development with Node.js and Front-End development with
          React.js. I have worked on various projects, including a{" "}
          <span
            className="text-indigo-600 cursor-pointer"
            onClick={() =>
              window.open(
                "https://github.com/tamil-0714/college-project",
                "_blank"
              )
            }
          >
            SaaS LMS Platform with Code Execution and Collaboration Tools
          </span>
          ,React-based Web App.
          <br />
          <br />I am passionate about learning new technologies and building
          solutions that make a difference. Thank you for visiting my portfolio!
          I hope you like my work.{" "}
          <span className="text-yellow-500">Happy coding!</span> 🧑🏻‍💻
          <div className="flex gap-5 mt-5 border-white border-collapse rounded">
            <a href="https://github.com/tamil-0714" target="_blank">
              <FaGithub className="h-7 w-7" />
            </a>
            <a href="https://www.linkedin.com/in/tamil0714/" target="_blank">
              <FaLinkedin className="h-7 w-7" />
            </a>
          </div>
        </motion.p>
        <motion.div
          variants={slideInFromTop}
          // exit="exit"
          style={{
            display: "flex",
            // outline: "1px solid red",
            gap: "20px",
          }}
        >
          <motion.div
            style={{
              width: "200px",
            }}
            variants={slideInFromLeft(0.5)}
            // exit="exit"
          >
            <Magnet magnetStrength={7}>
              <motion.a
                style={{
                  width: "200px",
                  display: "block",
                }}
                className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                href="https://drive.google.com/file/d/1Ig1VzgaVHBqu8BsyB5IRotf6S0Irec-Q/view?usp=sharing"
                target="_blank"
              >
                Resume
              </motion.a>
            </Magnet>
          </motion.div>
          <motion.a
            style={{
              width: "200px",
            }}
            variants={slideInFromLeft(0.5)}
            // exit="exit"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            href="https://drive.google.com/file/d/1Ig1VzgaVHBqu8BsyB5IRotf6S0Irec-Q/view?usp=sharing"
            target="_blank"
          >
            My Works
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        // exit="exit"
        className="w-full h-full flex justify-center items-center"
      >
        {/* <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        /> */}
        <div className="relative flex px-20 lg:h-[500px] h-[330px] w-full  flex-col items-center justify-center overflow-hidden ">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center lg:text-5xl text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
            Skills
          </span>

          {/* <OrbitingCircles iconSize={40} radius={120}>
            <FaNode className="text-green-500 lg:text-8xl text-3xl" />
            <DiMongodb className="text-lime-500 lg:text-8xl text-3xl" />
            <SiExpress className="dark:text-slate-50 text-slate-900 lg:text-8xl text-3xl" />
            <FaReact className="text-sky-500 lg:text-8xl text-3xl" />
            <SiTailwindcss className="text-cyan-500 lg:text-8xl text-3xl" />
            <SiThreedotjs className="dark:text-slate-50 text-slate-900 lg:text-8xl text-3xl" />
            <RiJavascriptFill className="text-yellow-500 lg:text-8xl text-3xl" />
          </OrbitingCircles>

          <OrbitingCircles iconSize={40} radius={190} reverse>
            <SiMysql
              color="white"
              className="text-sky-500 lg:text-8xl text-3xl"
            />
            <GrGraphQl className="text-lime-500 lg:text-8xl text-3xl" />
            <FaPython className="text-blue-400 lg:text-8xl text-3xl" />
            <SiPostman className="text-orange-500 lg:text-8xl text-3xl" />
            <FaGithub className="dark:text-slate-50 text-slate-900 lg:text-8xl text-3xl" />
            <FaJava className="text-orange-500  lg:text-8xl text-3xl" />
            <SiApollographql className="text-blue-300 lg:text-8xl text-3xl" />
            <FaDocker className="text-cyan-500 lg:text-8xl text-3xl" />
            <FaUbuntu className="text-orange-500 lg:text-8xl text-3xl" />
          </OrbitingCircles> */}
          <SkillTagCloud />
        </div>
      </motion.div>
    </motion.div>
  );
};
