import { motion } from "motion/react";
import heroImage from "../assets/images/hero_pic.png";
import Button from "./Button";
import PortfolioPrev from "./PortfolioPrev";
import InterfacesBlock from "./PortfolioInterfaces";

const Hero = () => {
  const gradient =
    "linear-gradient(to bottom right, rgba(168, 85, 247, 0.1) 0%, rgba(255,255,255,0) 80%)";

  return (
    <section className="relative w-full h-screen md:h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: gradient }} />

      {/* Background Blob */}
      {/* <div className="absolute w-[400px] h-[400px] bg-purple-700/30 rounded-full -right-32 -top-32 blur-3xl animate-blob"></div> */}

      {/* Text Content */}
      <div className="relative container mx-auto px-6 items-center justify-between z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">I'M PAWEL</h1>
          <p className="text-lg md:text-2xl mb-6">Full-stack developer</p>
          <Button className={"text-xl"}>See More</Button>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, translateX: 50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0"
      >
        <img
          src={heroImage}
          alt="Hero"
          className="w-full md:w-[200px] lg:w-[250px] xl:w-[300px]"
        />
      </motion.div>

      {/* Portfolio preview */}
      <div className="absolute right-32 bottom-32 space-y-10">
        <PortfolioPrev />
        <InterfacesBlock />
      </div>
    </section>
  );
};

export default Hero;
