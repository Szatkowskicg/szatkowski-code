import { motion } from "motion/react";
import PortfolioStripes from "../assets/portfolio_prev_stripes.svg";
import AnyfabPic from "../assets/images/Anyfab.png";

export const PortfolioPrev = () => {
  return (
    <div className="flex w-full relative pb-12">
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
          className="pl-6 md:w-[175px] lg:w-[275px] xl:w-[350px] 2xl:w-[375px] h-auto relative z-10"
        />
      </div>
    </div>
  );
};

export default PortfolioPrev;
