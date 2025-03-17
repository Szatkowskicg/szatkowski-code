import React from "react";
import { motion } from "framer-motion";
import myImage from "../../assets/images/smokins_app_1.png";
import myImage2 from "../../assets/images/smokins_app_2.png";
import Reveal from "../../components/Reveal";
import Button from "../../components/Button";
import SequentialAnimations from "../../components/SequentialAnimarions";

const Project1 = ({ direction, onDragEnd }) => {
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
      <Reveal className="container flex flex-row items-center justify-center max-lg:space-y-8 max-lg:flex-col gap-8">
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

        <SequentialAnimations
          delay={0.8}
          className="lg:flex-[3] flex flex-row items-center justify-end gap-2 overflow-hidden"
        >
          <img
            src={myImage}
            alt="Opis zdjęcia"
            className="h-[35rem] lg:h-[40rem] w-auto max-lg:hidden"
          />
          <img
            src={myImage2}
            alt="Opis zdjęcia"
            className="h-[25rem] w-auto max-lg:hidden"
          />
        </SequentialAnimations>
      </Reveal>
    </motion.div>
  );
};

export default Project1;
