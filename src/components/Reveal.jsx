import { motion, useInView, useAnimation } from "motion/react";
import React, { useEffect, useRef } from "react";

const Reveal = ({ children, className, delay = 0.2, onVisible }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const mainControls = useAnimation();

  const classes = `relative ${className || ""}`;

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      if (onVisible) {
        onVisible();
      }
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
      }}
      exit={{
        opacity: 0,
        x: -30,
        transition: { ease: "easeIn", duration: 0.3 },
      }}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const {
          variants = {
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
          },
          transition = {
            type: "spring",
            stiffness: 100,
            duration: 0.3,
            delay: delay + index * 0.2,
          },
          className = "relative",
        } = child.props;

        return (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={transition}
            className={className}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Reveal;
