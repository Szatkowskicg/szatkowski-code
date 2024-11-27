import { Link, useLocation } from "react-router-dom";
import { logo } from "../assets";
import { navigation } from "../constants";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import MenuSvg from "../assets/svg/MenuSvg";
import { motion } from "motion/react";

const Header = () => {
  const { pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNav = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className={`relative top-0 left-0 w-full z-50`}>
      <div className="flex items-center px-5 py-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.75 }}
          className="block w-[10rem] xl:mr-8"
        >
          <Link to="/" className="block">
            <img src={logo} width={150} height={40} alt="Szatkowski Code" />
          </Link>
        </motion.div>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:ml-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:space-x-20 xl:space-x-32 px-16">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`block group relative text-2xl text-n-1 transition-colors py-6 md:py-8 lg:py-2 lg:px-1 lg:text-sm lg:font-semibold lg:leading-5 lg:hover:text-n-1/60`}
              >
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.75 }}
                >
                  {item.title}
                  <span
                    className={`hidden lg:block absolute bottom-0 left-0 w-full h-[3px] transition-transform ml-3 origin-left rounded-sm 
                  ${item.class}
                  ${
                    item.url === pathname ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100`}
                  ></span>
                </motion.div>
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <button className="ml-auto lg:hidden px-3" onClick={toggleNav}>
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </div>
  );
};

export default Header;
