import { motion } from "motion/react";
import PortfolioStripes from "../assets/portfolio_prev_stripes.svg";
import AnyfabPic from "../assets/images/Anyfab.png";
import { useNavigate } from "react-router-dom";

export const PortfolioPrev = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      exit={{
        opacity: 0,
        x: 30,
        transition: { ease: "easeIn", duration: 0.3 },
      }}
      className="flex w-full relative pb-12"
    >
      {/* Left section */}
      <div className="flex flex-col justify-center items-center w-[25%] relative">
        <div className="rotate-[-90deg] absolute -left-8 bottom-5 xl:-left-12 xl:bottom-6">
          <h4 className="lg:text-2xl xl:text-3xl font-bold tracking-wider font-orbitron whitespace-nowrap">
            Let’s See
          </h4>
          <p className="font-orbitron ls:text-xl xl:text-2xl whitespace-nowrap">
            My Portfolio
          </p>
        </div>
      </div>

      {/* Right section */}
      <div className="flex justify-center items-center w-[75%] relative">
        <img
          src={PortfolioStripes}
          alt="Portfolio stripes"
          className="absolute -bottom-10 xl:-bottom-12 lg:-left-2 xl:-left-4 lg:w-[6rem] xl:w-[8rem] -z-10"
        />

        <img
          src={AnyfabPic}
          alt="Portfolio preview"
          onClick={() => navigate("/portfolio")}
          className="pl-6 md:w-[175px] lg:w-[275px] xl:w-[350px] 2xl:w-[375px] h-auto relative z-10 pointer-events-auto transition-transform duration-300 ease-in-out hover:scale-110 cursor-hover"
        />
      </div>
    </motion.div>
  );
};

export default PortfolioPrev;
