import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

const useMouseParallax = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mx.set(x);
      my.set(y);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return { mx, my };
};

export default function GlitchLayers() {
  const { mx, my } = useMouseParallax();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <GlitchLayer color="#00FFD4" density="dense" depth={40} mx={mx} my={my} />
      <GlitchLayer
        color="#AA6DFF"
        density="medium"
        depth={25}
        mx={mx}
        my={my}
      />
      <GlitchLayer
        color="#FF2BD8"
        density="sparse"
        depth={15}
        mx={mx}
        my={my}
      />
    </div>
  );
}

function GlitchLayer({ color, density, depth, mx, my }) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth * 1.4); // vertical bias (mobile-friendly)

  const patterns = {
    dense: `
      repeating-linear-gradient(
        90deg,
        ${color} 0px,
        ${color} 10px,
        transparent 10px,
        transparent 18px
      ),
      repeating-linear-gradient(
        0deg,
        ${color} 0px,
        ${color} 12px,
        transparent 12px,
        transparent 20px
      )
    `,
    medium: `
      repeating-linear-gradient(
        90deg,
        ${color} 0px,
        ${color} 18px,
        transparent 18px,
        transparent 34px
      ),
      repeating-linear-gradient(
        0deg,
        ${color} 0px,
        ${color} 22px,
        transparent 22px,
        transparent 40px
      )
    `,
    sparse: `
      repeating-linear-gradient(
        90deg,
        ${color} 0px,
        ${color} 28px,
        transparent 28px,
        transparent 60px
      ),
      repeating-linear-gradient(
        0deg,
        ${color} 0px,
        ${color} 36px,
        transparent 36px,
        transparent 72px
      )
    `,
  };

  return (
    <motion.div
      className="absolute inset-[-10%] mix-blend-screen opacity-40"
      style={{
        backgroundImage: patterns[density],
        x,
        y,
      }}
      animate={{
        x: [0, 6, -6, 0],
        y: [0, -4, 4, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
