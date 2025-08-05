import React from "react";
import { motion } from "framer-motion";
import myImage1 from "../../assets/images/eter_web.png";
import myImage2 from "../../assets/images/rec_book.webp";
import myImage3 from "../../assets/images/alfa_rims.webp";
import myImage4 from "../../assets/images/msi_render.webp";
import myImage5 from "../../assets/images/brevky_web.webp";
import myImage6 from "../../assets/images/brevky_logo.webp";

import Reveal from "../../components/Reveal";
import Button from "../../components/Button";
import SequentialAnimations from "../../components/SequentialAnimarions";

const Project3 = ({ direction, onDragEnd }) => {
  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center text-white"
      initial={{
        opacity: 0,
        scale: 0.8,
        x: direction === 1 ? 300 : -300,
      }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{
        opacity: 0,
        x: -30,
        transition: { ease: "easeIn", duration: 0.3 },
      }}
      transition={{ duration: 0.3 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.05}
      onDragEnd={onDragEnd}
    >
      <Reveal className="container flex flex-row items-center justify-center max-lg:space-y-8 max-lg:flex-col gap-8 w-full">
        <SequentialAnimations className="flex flex-col lg:flex-[2] items-end justify-center">
          <h1 className="h1 font-bold mb-4">Smokin’s Loyalty App</h1>
          <p className="pl-8 text-lg pb-4">
            Is a simple and efficient loyalty program application that allows
            users to earn points by scanning QR codes and redeem them for
            rewards. With separate accounts for users and admins, the app
            ensures seamless management: users collect points, while admins scan
            and add them directly in-store. Everything is handled effortlessly
            using just a smartphone.
          </p>
          <Button
            className="text-xl"
            onClick={(e) => {
              console.log("Button clicked!");
            }}
          >
            Check more
          </Button>
        </SequentialAnimations>

        <SequentialAnimations delay={0.8} className="lg:flex-[3]">
          <div className="grid grid-cols-8 grid-rows-3 gap-10 -rotate-[30deg]">
            <div className="col-start-3 col-span-2 bg-blue-400 rounded-xl overflow-hidden">
              <img
                src={myImage3}
                alt="Opis zdjęcia"
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="col-span-3 bg-red-300 rounded-xl overflow-hidden">
              <img
                src={myImage4}
                alt="Opis zdjęcia"
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="row-start-2 col-span-3 bg-red-400 rounded-xl overflow-hidden">
              <img
                src={myImage5}
                alt="Opis zdjęcia"
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="row-start-2 col-span-2 bg-red-300 rounded-xl overflow-hidden">
              <img
                src={myImage6}
                alt="Opis zdjęcia"
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="row-start-2 col-span-3 bg-red-400 rounded-xl overflow-hidden">
              <img
                src={myImage4}
                alt="Opis zdjęcia"
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="col-start-2 row-start-3 col-span-3 bg-red-300 rounded-xl overflow-hidden">
              <img
                src={myImage4}
                alt="Opis zdjęcia"
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="row-start-3 col-span-2 bg-red-400 rounded-xl overflow-hidden">
              <img
                src={myImage3}
                alt="Opis zdjęcia"
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </SequentialAnimations>
      </Reveal>
    </motion.div>
  );
};

export default Project3;
