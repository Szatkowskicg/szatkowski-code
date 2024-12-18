import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Projekt 1",
    description: "Opis pierwszego projektu.",
    color: "bg-red-500",
  },
  {
    id: 2,
    title: "Projekt 2",
    description: "Opis drugiego projektu.",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Projekt 3",
    description: "Opis trzeciego projektu.",
    color: "bg-green-500",
  },
];

const Portfolio = () => {
  return (
    <div className="relative h-[calc(100vh-5rem)] overflow-hidden">
      {/* Kontener poziomego scrollowania */}
      <motion.div
        className="absolute top-0 left-0 flex h-full cursor-grab active:cursor-grabbing snap-x snap-mandatory scroll-smooth"
        drag="x"
        dragConstraints={{ left: -((projects.length - 1) * 1720), right: 0 }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative flex-shrink-0 w-screen h-full flex items-center justify-center p-8 snap-start"
          >
            {/* Efekt Paralaksy */}
            <motion.div
              className={`w-full h-full shadow-lg rounded-xl overflow-hidden flex flex-col items-center justify-center text-white ${project.color}`}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
              <p className="text-lg">{project.description}</p>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
