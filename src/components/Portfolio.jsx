import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for project 1",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for project 2",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description for project 3",
    color: "#FFD93D",
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      handleNext(); // Drag left
    } else if (info.offset.x > 50) {
      handlePrev(); // Drag right
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-neutral-900 overflow-hidden -mt-[5rem] pt-[5rem]">
      <div className="relative w-full h-3/4 flex items-center justify-center">
 
          {projects.map(
            (project, index) =>
              index === currentIndex && (
                <motion.div
                  key={project.id}
                  className="absolute w-3/4 h-full rounded-lg shadow-lg flex flex-col items-center justify-center text-white"
                  style={{ backgroundColor: project.color }}
                  initial={{ opacity: 0, scale: 0.9, x: direction === 1 ? 300 : -300 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.5, x: direction === 1 ? -300 : 300 }}
                  transition={{ duration: 0.3 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                >
                  <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
                  <p className="text-lg">{project.description}</p>
                </motion.div>
              )
          )}
     
      </div>
      <div className="absolute bottom-10 flex gap-4">
        <button
          onClick={handlePrev}
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Portfolio;