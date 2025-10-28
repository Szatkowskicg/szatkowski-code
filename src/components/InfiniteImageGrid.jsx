import { animate, motion, useMotionValue } from "framer-motion";
import myImage1 from "../assets/images/brevky_logo.webp";
import myImage2 from "../assets/images/msi_render.webp";
import myImage3 from "../assets/images/alfa_rims.webp";
import myImage4 from "../assets/images/msi_render.webp";
import myImage5 from "../assets/images/brevky_web.webp";
import myImage6 from "../assets/images/brevky_logo.webp";
import myImage7 from "../assets/images/brevky_logo.webp";
import myImage8 from "../assets/images/brevky_logo.webp";
import myImage9 from "../assets/images/brevky_logo.webp";
import { useEffect, useRef, useState } from "react";

const images = [
  [myImage1, myImage2, myImage3],
  [myImage4, myImage5, myImage6],
  [myImage7, myImage8, myImage9],
];

const InfiniteRow = ({ images }) => {
  const xTranslation = useMotionValue(0);
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      if (ref.current) setWidth(ref.current.scrollWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    let finalPosition = -width / 2 - 12;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => controls.stop;
  }, [xTranslation, width]);

  return (
    <div className="relative w-full h-64 overflow-hidden flex items-center">
      <motion.div
        className="flex gap-6"
        ref={ref}
        style={{ x: xTranslation, translateZ: 0 }}
      >
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            loading="eager"
            className="w-64 h-64 object-cover rounded-2xl flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
};

const InfiniteImageGrid = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-10 md:py-20 w-full">
      <InfiniteRow images={images[0]} />
    </div>
  );
};

export default InfiniteImageGrid;
