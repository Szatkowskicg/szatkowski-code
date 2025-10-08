import { motion, useDragControls } from "motion/react";

const TerminalWindow = ({
  id,
  title,
  children,
  delay = 0,
  className,
  isActive,
  onActivate,
  dragContainer,
}) => {
  const dragControls = useDragControls();

  const classes = `flex flex-col rounded-xl mx-auto select-none overflow-hidden ${
    isActive
      ? "border-color-2 shadow-color-2/50 z-10"
      : "border-transparent z-0"
  } ${className || ""}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay: delay }}
      exit={{
        opacity: 0,
        scale: 0.8,
        transition: { ease: "easeIn", duration: 0.3 },
      }}
      drag
      dragListener={false}
      dragControls={dragControls}
      dragConstraints={dragContainer}
      dragElastic={0}
      dragTransition={{ power: 0, timeConstant: 0 }}
      dragMomentum={false}
      className={classes}
      onPointerDown={onActivate}
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
