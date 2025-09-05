import { motion } from "motion/react";
import PortfolioStripes from "../assets/portfolio_prev_stripes.svg";
import AnyfabPic from "../assets/images/Anyfab.png";

export const PortfolioPrev = () => {
  return (
    <div className="flex w-full relative pb-12">
      {/* Lewa sekcja */}
      <div className="flex flex-col justify-center items-center w-[25%] relative">
        <div className="rotate-[-90deg] absolute -left-12 bottom-6">
          <h4 className="text-3xl font-bold tracking-wider font-orbitron whitespace-nowrap">
            Let’s See
          </h4>
          <p className="font-orbitron text-2xl whitespace-nowrap">
            My Portfolio
          </p>
        </div>
      </div>

      {/* Prawa sekcja */}
      <div className="flex justify-center items-center w-[75%] relative">
        {/* stripes za obrazkiem */}
        <img
          src={PortfolioStripes}
          alt="Portfolio stripes"
          className="absolute -bottom-12 -left-4 w-[8rem] -z-10"
        />

        <img
          src={AnyfabPic}
          alt="Portfolio preview"
          className="pl-6 w-[375px] h-auto relative z-10"
        />
      </div>
    </div>
  );
};

export default PortfolioPrev;
