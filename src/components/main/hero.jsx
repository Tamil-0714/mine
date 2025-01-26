import SplashCursor from "@/components/sub/SplashCursor";
import { AnimatePresence } from "framer-motion";
import { HeroContent } from "../sub/hero-content";
import { FloatingDockDemo } from "../sub/floatingDemo";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
     
      <HeroContent  />
    </div>
  );
};
