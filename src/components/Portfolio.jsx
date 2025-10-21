import React, { useState } from "react";
import Project1 from "../pages/Projects/Project1";
import { motion } from "framer-motion";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import Project2 from "../pages/Projects/Project2";
import Project3 from "../pages/Projects/Project3";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -300) {
      handleNext(); // Drag left
    } else if (info.offset.x > 300) {
      handlePrev(); // Drag right
    }
  };

  const renderProject = () => {
    switch (currentIndex) {
      case 0:
        return <Project1 direction={direction} onDragEnd={handleDragEnd} />;
      case 1:
        return <Project2 direction={direction} onDragEnd={handleDragEnd} />;
      case 2:
        return <Project3 direction={direction} onDragEnd={handleDragEnd} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-screen md:h-[100dvh] pt-[5.5rem] md:pt-[7.25rem] overflow-hidden">
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden -mt-[5rem]">
        <div className="relative w-full h-full flex items-center justify-center">
          {renderProject()}
        </div>

        <div className="absolute bottom-10 flex gap-8 md:gap-24">
          <BackButton className={"text-lg"} onClick={handlePrev}>
            Prev
          </BackButton>

          <div className="flex items-center gap-4">
            {[0, 1, 2].map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-neutral-300" : "bg-neutral-500"
                }`}
                animate={{
                  scale: currentIndex === index ? 1.5 : 1,
                  opacity: currentIndex === index ? 1 : 0.5,
                }}
                transition={{
                  duration: 0.3,
                }}
              />
            ))}
          </div>

          <NextButton className={"text-lg"} onClick={handleNext}>
            Next
          </NextButton>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
