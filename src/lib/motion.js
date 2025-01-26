export function slideInFromLeft(delay) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
    exit: exitAnimation,
  };
}

const exitAnimation = {
  y: "100vh",
  opacity: 0,
  transition: { duration: 0.5 },
};

export function slideInFromRight(delay) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
    exit: exitAnimation,
  };
}
export function slideInFromTopWithDelay(delay) {
  return {
    hidden: { y: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.7,
      },
    },
    exit: exitAnimation,
  };
}
export const bounceVariants = {
    initial: {
      y: "-100vh", // Start above the screen
      opacity: 0,
    },
    animate: {
      y: 0, // Drop into place
      opacity: 1,
      transition: {
        type: "spring", // Use a spring animation
        stiffness: 120, // Control the bounce effect
        damping: 20, // Smooth out the bounce
      },
    },
    exit: {
      y: "100vh", // Drop out of the bottom of the screen
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};
