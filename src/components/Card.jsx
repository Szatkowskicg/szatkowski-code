import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Card = ({ title, subtitle, icon: Icon }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  const springConfig = { stiffness: 300, damping: 20, mass: 0.5 };
  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-[1200px]">
      <motion.div
        className="group relative w-[17rem] h-80 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col items-center justify-center p-6 overflow-hidden transition-all duration-200 hover:border-white/20"
        style={{
          rotateX: springX,
          rotateY: springY,
          transformPerspective: 1200,
          scale: 1.02,
          transformOrigin: "center",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full transition-transform duration-200 group-hover:scale-110">
          <Icon
            size={48}
            className="text-white group-hover:text-color-1 group-hover:drop-shadow-[0_0_12px_#C94FA3] transition-colors duration-200"
          />
        </div>

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
