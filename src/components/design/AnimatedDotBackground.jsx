import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

/* ================== PARAMETRY ================== */

const DOT_SIZE = 16; // małe kropki
const GAP = 32; // odstęp pionowy
const COL_WIDTH = 32; // odstęp poziomy

/* ================== KOMPONENT ================== */

export default function AnimatedDotBackground() {
  const containerRef = useRef(null);

  const time = useMotionValue(0);
  const mouseX = useMotionValue(null);

  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);

  /* --- resize --- */
  useEffect(() => {
    const resize = () => {
      setCols(Math.floor(window.innerWidth / COL_WIDTH));
      setRows(Math.floor(window.innerHeight / GAP));
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* --- wolny time loop --- */
  useEffect(() => {
    let raf;
    const loop = () => {
      time.set(time.get() + 0.02); // wolno
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);

  /* --- mysz (X) --- */
  useEffect(() => {
    const move = (e) => mouseX.set(e.clientX);
    const leave = () => mouseX.set(null);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className="absolute bottom-0 left-0 flex">
        {Array.from({ length: cols }).map((_, x) => (
          <Column key={x} x={x} rows={rows} time={time} mouseX={mouseX} />
        ))}
      </div>
    </div>
  );
}

/* ================== COLUMN ================== */

function Column({ x, rows, time, mouseX }) {
  return (
    <div
      className="relative flex flex-col justify-end"
      style={{ width: COL_WIDTH }}
    >
      {Array.from({ length: rows }).map((_, y) => (
        <Dot key={y} x={x} y={y} rows={rows} time={time} mouseX={mouseX} />
      ))}
    </div>
  );
}

/* ================== DOT ================== */

function Dot({ x, y, rows, time, mouseX }) {
  const opacity = useTransform([time, mouseX], ([t, mx]) => {
    /* --- 3 globalne fale --- */
    const waveA = Math.sin(x * 0.04 + t * 0.25);
    const waveB = Math.sin(x * 0.015 + t * 0.18 + 10);
    const waveC = Math.sin(x * 0.08 + t * 0.12 + 25);

    /* --- idle amplitude --- */
    let amplitude = rows * 0.12;

    /* --- mysz wzmacnia jedną falę --- */
    if (mx !== null) {
      const dist = Math.abs(x * COL_WIDTH - mx);
      const influence = Math.exp(-dist / 220);

      amplitude = rows * (0.08 + influence * 0.85);
    }

    const height = (waveA * 0.5 + waveB * 0.3 + waveC * 0.2) * amplitude;

    return rows - y < height ? 1 : 0.2;
  });

  return (
    <motion.div
      className="rounded-sm bg-purple-500/10"
      style={{
        width: DOT_SIZE,
        height: DOT_SIZE,
        marginBottom: GAP - DOT_SIZE,
        opacity,
      }}
    />
  );
}
