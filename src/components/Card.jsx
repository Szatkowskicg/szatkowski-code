import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Card = ({ title, subtitle, icon: Icon }) => {
  // Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 25,
  });

  // Stretch
  const yScale = useMotionValue(1);
  const yScaleSpring = useSpring(yScale, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
    // tilt
    x.set(offsetX);
    y.set(offsetY);
    // stretch:
    const scaleY = 0.9 + 0.1 * (offsetY + 0.5);
    yScale.set(scaleY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    yScale.set(1);
  };

  return (
    <div className="perspective-[1000px]">
      <motion.div
        className="group relative w-[17rem] h-80 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col items-center justify-center p-6 overflow-hidden transition-all duration-300 hover:border-[#C94FA3]/50"
        style={{ rotateX, rotateY, scaleY: yScaleSpring, originY: 1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover="hover"
      >
        {/* Icon */}
        <motion.div
          className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full"
          variants={{
            hover: { scale: 1.2 },
          }}
        >
          <Icon
            size={48}
            className="text-white group-hover:text-[#C94FA3] group-hover:drop-shadow-[0_0_12px_#C94FA3]"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center mt-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-white/70 mt-2">{subtitle}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
