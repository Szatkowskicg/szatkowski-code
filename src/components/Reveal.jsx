import { motion, useInView, useAnimation } from "motion/react";
import React, { useEffect, useRef } from "react";

const Reveal = ({ children, className, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const classes = `relative w-full ${className || ""}`;

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={classes}
      variants={{
        hidden: {
          opacity: 0,
          x: -30,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 0.3,
        delay: delay || 0.25,
      }}
      exit={{
        opacity: 0,
        x: -30,
        transition: { ease: "easeIn", duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
