import { motion, useDragControls } from "motion/react";
import { useState } from "react";

const TerminalWindow = ({ title, children, delay = 0, className }) => {
  const dragControls = useDragControls();
  const [isDragging, setIsDragging] = useState(false);

  const classes = `flex flex-col rounded-xl mx-auto select-none overflow-hidden ${
    isDragging ? "z-10" : "z-0"
  } ${className || ""}`;

  return (
    <motion.div
      initial={{
        opacity: delay ? 0 : 1,
        y: delay ? 50 : 0,
        scale: delay ? 0.8 : 1,
      }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay: delay }}
      drag
      dragListener={false}
      dragControls={dragControls}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.2}
      dragTransition={{
        bounceStiffness: 300,
        bounceDamping: 25,
      }}
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      className={classes}
    >
      {/* Header / Drag handle */}
      <div
        className="flex flex-row bg-[#101317] space-x-2 px-2 justify-start items-center py-2"
        onPointerDown={(e) => {
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
