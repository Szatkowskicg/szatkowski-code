import { motion } from "motion/react";

export const PortfolioPrev = () => {
  return (
    <div className="flex justify-start items-center w-80 bg-color-1 h-80">
      <div className="flex just">
        <div className="rotate-[-90deg] ">
          <h2 className="text-white text-3xl font-bold tracking-wider">
            Let’s See
          </h2>
          <p className="text-gray-300 text-lg">My Portfolio</p>
        </div>
      </div>
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-2xl shadow-2xl overflow-hidden max-w-3xl"
      >
        <img
          //   src="/your-image.png"
          alt="Portfolio preview"
          className="w-full h-auto object-cover"
        />

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-left"
        >
          <h2 className="text-white text-3xl font-bold tracking-wider">
            Let’s See
          </h2>
          <p className="text-gray-300 text-lg">My Portfolio</p>
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default PortfolioPrev;
