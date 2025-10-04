import Button from "../components/Button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="flex flex-col space-y-6 justify-center items-center h-screen -mt-[5rem]">
      <div className="container">
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              scale: 1,
              y: -70,
            },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
            },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            ease: "easeOut",
            duration: 0.25,
            delay: 0.25,
          }}
          exit={{
            opacity: 0,
            x: -30,
            transition: { ease: "easeIn", duration: 0.3 },
          }}
        >
          <h1 className="h1 font-black text-center">
            Cześć, jestem Paweł. <br />
            Front-end developer.
          </h1>
          <h5 className="h5 text-center">
            Projektowanie to dla mnie sztuka łączenia estetyki, funkcjonalności
            i potrzeb użytkownika.
          </h5>
        </motion.div>

        <motion.div
          className="flex justify-center pt-10"
          variants={{
            hidden: {
              opacity: 0,
              scale: 1,
              y: -70,
            },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
            },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            ease: "easeOut",
            duration: 0.25,
            delay: 0.75,
          }}
          exit={{
            opacity: 0,
            x: -30,
            transition: { ease: "easeIn", duration: 0.3 },
          }}
        >
          <Link to={{ pathname: "/about" }}>
            <Button className={"text-xl"}>Przejdź dalej</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
