import { motion } from "motion/react";

export const InterfacesBlock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      exit={{
        opacity: 0,
        x: 30,
        transition: { ease: "easeIn", duration: 0.3 },
      }}
      className="flex items-start space-x-4 max-w-lg"
    >
      <div className="h4 font-normal mt-1">›</div>

      <div>
        <h3 className="h5 font-orbitron font-normal">
          Build the interfaces <br /> of tomorrow
        </h3>
        <p className="font-orbitron mt-3 text-sm font-normal">
          Clean code. Bold design. Real impact. <br />
          I craft seamless digital experiences <br />
          using React — for web, mobile, and <br />
          whatever comes next. <br />
          Let’s shape the future, one interface <br />
          at a time.
        </p>
      </div>
    </motion.div>
  );
};

export default InterfacesBlock;
