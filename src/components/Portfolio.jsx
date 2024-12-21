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

  // Obsługa zmiany projektu
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      handleNext(); // Przeciągnięcie w lewo
    } else if (info.offset.x > 50) {
      handlePrev(); // Przeciągnięcie w prawo
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-neutral-900 overflow-hidden -mt-[5rem]">
      {/* Sekcja Projektów */}
      <div className="relative w-full h-3/4 flex items-center justify-center">
        {projects.map(
          (project, index) =>
            index === currentIndex && (
              <motion.div
                key={project.id}
                className="absolute w-3/4 h-full rounded-lg shadow-lg flex flex-col items-center justify-center text-white"
                style={{ backgroundColor: project.color }}
                initial={{ opacity: 0, scale: 0.9, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -100 }}
                transition={{ duration: 0.5 }}
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

      {/* Przycisk nawigacji */}
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
