import { motion, useInView, useAnimation } from "motion/react";
import React, { useEffect, useRef } from "react";

const Reveal = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={`relative ${className || ""}`}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      exit={{
        opacity: 0,
        x: -30,
        transition: { ease: "easeIn", duration: 0.3 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 15,
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
