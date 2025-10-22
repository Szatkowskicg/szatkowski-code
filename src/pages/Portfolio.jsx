import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import { Project1, Project2, Project3 } from "../components/design/Projects";
import Reveal from "../components/Reveal";

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [threshold, setThreshold] = useState(window.innerWidth * 0.25);

  useEffect(() => {
    let resizeTimeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setThreshold(window.innerWidth * 0.25);
      }, 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -threshold) handleNext();
    else if (info.offset.x > threshold) handlePrev();
  };

  const projects = [
    <Project1 key="p1" />,
    <Project2 key="p2" />,
    <Project3 key="p3" />,
  ];

  const variants = {
    enter: (dir) => ({
      x: dir === 0 ? 0 : dir > 0 ? threshold : -threshold,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: (dir) => ({
      x: dir > 0 ? -threshold : threshold,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeIn" },
    }),
  };

  return (
    <div className="relative w-full h-screen md:h-[100dvh] pt-[5.5rem] md:pt-[7.25rem] overflow-hidden">
      <Reveal className="w-full h-full pb-20 lg:pb-28">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full h-full"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag={"x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.05}
            onDragEnd={handleDragEnd}
          >
            {projects[currentIndex]}
          </motion.div>
        </AnimatePresence>

        {/* Portfolio nav */}
        <div className="absolute bottom-6 lg:bottom-12 w-full flex justify-center gap-8 md:gap-24">
          <BackButton className={"text-lg"} onClick={handlePrev}>
            Prev
          </BackButton>

          <div className="flex items-center gap-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === i ? "bg-neutral-300" : "bg-neutral-600"
                }`}
                animate={{
                  scale: currentIndex === i ? 1.4 : 1,
                  opacity: currentIndex === i ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>

          <NextButton className={"text-lg"} onClick={handleNext}>
            Next
          </NextButton>
        </div>
      </Reveal>
    </div>
  );
};

export default Portfolio;
