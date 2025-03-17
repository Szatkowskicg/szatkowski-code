import { motion } from "framer-motion";
import React from "react";

const SequentialAnimations = ({ children, className, delay = 0.2 }) => {
  const classes = `relative ${className || ""}`;

  return (
    <motion.div className={classes}>
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
        } = child.props;

        return (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={transition}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default SequentialAnimations;
