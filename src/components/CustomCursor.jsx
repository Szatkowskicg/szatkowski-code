import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

export default function CustomCursor() {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const circleX = useSpring(dotX, { stiffness: 1500, damping: 90, mass: 0.5 });
  const circleY = useSpring(dotY, { stiffness: 1500, damping: 90, mass: 0.5 });

  // Disable cursor on touch devices
  function useIsTouchDevice() {
    const [isTouch, setIsTouch] = useState(() =>
      typeof window !== "undefined"
        ? window.matchMedia("(pointer: coarse)").matches
        : false
    );

    useEffect(() => {
      const mediaQuery = window.matchMedia("(pointer: coarse)");
      const update = (e) => setIsTouch(e.matches);
      mediaQuery.addEventListener("change", update);
      return () => mediaQuery.removeEventListener("change", update);
    }, []);

    return isTouch;
  }

  useEffect(() => {
    const move = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      setVisible(true);
    };

    const leave = () => setVisible(false);
    const down = () => setClicked(true);
    const up = () => setClicked(false);

    const handleOver = (e) => {
      if (e.target.closest(".cursor-hover, button, a, input")) setHovered(true);
    };

    const handleOut = (e) => {
      if (e.target.closest(".cursor-hover, button, a, input"))
        setHovered(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseup", up);
    document.body.addEventListener("mouseup", up);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseup", up);
      document.body.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, [dotX, dotY]);

  const isTouchDevice = useIsTouchDevice();
  if (isTouchDevice) return null;

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* White dot */}
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999]"
            style={{
              x: dotX,
              y: dotY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 0 : 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Circle */}
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9998]"
            style={{
              x: circleX,
              y: circleY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              scale: clicked ? 1.75 : hovered ? 1.5 : 1,
              opacity: visible ? 1 : 0,
              backgroundColor: hovered
                ? "rgba(0, 0, 0, 0.4)"
                : "rgba(0, 0, 0, 0)",
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 25,
            }}
          />

          {/* Pulse after click */}
          {clicked && (
            <motion.div
              className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white pointer-events-none z-[9997]"
              style={{
                x: dotX,
                y: dotY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </>
      )}
    </AnimatePresence>
  );
}
