import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BackgroundGradient() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, 80]); // zmień 80 na więcej jeśli chcesz mocniejszy efekt

  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden">
      {/* Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/30 via-fuchsia-500/20 to-purple-800/20 blur-[140px]" />
      </motion.div>

      {/* Dotted pattern z parallax */}
      <motion.svg
        style={{ y }}
        className="absolute left-0 top-0 w-[500px] h-[500px] opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </motion.svg>
    </div>
  );
}
