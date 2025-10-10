import { motion, useDragControls } from "motion/react";

const TerminalWindow = ({ title, children, delay = 0, className }) => {
  const classes = `flex flex-col rounded-xl mx-auto select-none overflow-hidden ${
    className || ""
  }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      exit={{
        opacity: 0,
        scale: 0.8,
        transition: { ease: "easeIn", duration: 0.3 },
      }}
      drag
      dragElastic={0.15}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragMomentum={false}
      dragTransition={{
        bounceStiffness: 300,
        bounceDamping: 25,
      }}
      className={classes}
    >
      {/* Header / Drag handle */}
      <div
        className="flex flex-row bg-[#101317] space-x-2 px-2 justify-start items-center py-2"
        onPointerDown={(e) => {
          onActivate?.();
          dragControls.start(e);
        }}
      >
        <div className="bg-color-3/60 rounded-full h-3 w-3"></div>

        <div className="bg-color-2/60 rounded-full h-3 w-3"></div>

        <div className="bg-color-1/60 rounded-full h-3 w-3"></div>

        <div className="flex-1 text-center items-center justify-center">
          <p className="text-xs text-white/70">root@{title}</p>
        </div>
      </div>

      {children}
    </motion.div>
  );
};

export default TerminalWindow;
