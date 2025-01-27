// export default About

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
// import { OrbitingCircles } from "./OrbitalSkill";
import { FaDocker, FaUbuntu } from "react-icons/fa";
import SparklesText from "../sub/sparkles-text";
import { FlipWords } from "../sub/flip-words";
import SkillTagCloud from "../sub/roatingSkills";
import Magnet from "../sub/Magnet";
import SplashCursor from "../sub/SplashCursor";
import { OrbitingCircles } from "../sub/OrbitalSkill";
import BlurText from "../sub/BlurText";
import TrueFocus from "../sub/TrueFocus";
const words = ["Javascript.", "Node.js", "React.js", "Backend.", "Frontend."];
export const About = () => {
  return (
    <>
      {/* <SplashCursor  /> */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 ml-20 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // outline:"1px solid",
              width: "650px",
              gap:"40px"
            }}
          >
            <motion.div
              variants={bounceVariants}
              exit="exit"
              initial="initial"
              animate="animate"
              style={{
                padding: "12px",
              }}
              className="Welcome-box  py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
            >
              {/* <BlurText
                text="About Me"
                delay={300}
                animateBy="words"
                direction="top"
                // onAnimationComplete={handleAnimationComplete}
                className="text-1xl"
              /> */}
              <h3>About Me</h3>
              {/* <SparklesText className="mx-2 text-white" text="Hey there!👋" /> */}
            </motion.div>
            <motion.div
            variants={slideInFromLeft(1)}
              style={{
                marginRight: "30px",
              }}
            >
              <TrueFocus
                // sentence="Focus-> Hire me"
                manualMode={true}
                blurAmount={10}
                // borderColor="red"
                animationDuration={1}
                pauseBetweenAnimations={1}
              />
            </motion.div>
          </div>
          <motion.p
            className="mt-0  text-white border border-[#7042f88b] p-10 rounded lg:w-4/5"
            style={{
              fontSize: "1.1rem",
              lineHeight: "30px",
            }}
            variants={slideInFromLeft(1)}
            // exit="exit"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              I'm a Software Engineer 
            </span>{" "}
            with a passion for designing and building innovative, user-focused
            solutions. I specialize in developing dynamic, responsive, and
            scalable web applications, seamlessly combining my expertise in both
            front-end and back-end technologies. Proficient in data structures
            and algorithms, I enjoy tackling complex problems and transforming
            them into practical, efficient solutions. <br />
            <br />
            Beyond web development, I have a strong interest in emerging
            technologies such as Machine Learning, and I thrive on experimenting
            with new ideas to create impactful projects. My curiosity for
            technology began early, fueling a lifelong commitment to learning
            and growing as a developer. <br />
            <br /> When I’m not coding, I enjoy diving into creative pursuits
            and exploring how technology intersects with everyday life. With a
            strong foundation in software engineering and a drive to innovate,
            I’m dedicated to crafting solutions that make a meaningful
            difference.
          </motion.p>
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
              Hobbies
            </span>

            <OrbitingCircles iconSize={70} radius={190}>
              <img
                src="/hobbies/h1.png"
                alt="Fitness"
                className="lg:w-32 w-8"
              />
              <img src="/hobbies/h2.png" alt="Cookin" className="lg:w-32 w-8" />
              <img src="/hobbies/h3.png" alt="Games" className="lg:w-32 w-8" />
              <img src="/hobbies/h4.png" alt="Coding" className="lg:w-32 w-8" />
              <img
                src="/hobbies/h5.png"
                alt="Learning"
                className="lg:w-32 w-8"
              />
              <img
                src="/hobbies/h6.png"
                alt="Reading"
                className="lg:w-32 w-8"
              />
              <img
                src="/hobbies/h9.png"
                alt="Disscusion"
                className="lg:w-32 w-8"
              />
            </OrbitingCircles>

            {/* <OrbitingCircles iconSize={40} radius={190} reverse>
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
            {/* <SkillTagCloud /> */}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
