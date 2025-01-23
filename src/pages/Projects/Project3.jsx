import React from "react";
import { motion } from "framer-motion";

const Project3 = ({ direction, onDragEnd }) => {
  return (
    <motion.div
      className="relative w-full h-full flex flex-col items-center justify-center text-white"
      style={{ backgroundColor: "#FFD93D" }}
      initial={{
        opacity: 0,
        scale: 0.8,
        x: direction === 1 ? 300 : -300,
      }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.05}
      onDragEnd={onDragEnd}
    >
      <h2 className="text-4xl font-bold mb-4">Project 3</h2>
      <p className="text-lg">Description for project 3</p>
    </motion.div>
  );
};

export default Project3;
