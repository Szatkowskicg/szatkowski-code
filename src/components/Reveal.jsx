import { motion, useInView, useAnimation } from "motion/react";
import React, { useEffect, useRef } from "react";

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -90, rotateY: 90 },
          visible: { opacity: 1, x: 0, rotateY: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 }}
        // exit={{ opacity: 0, x: -90 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
