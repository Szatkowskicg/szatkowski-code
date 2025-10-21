import { Link, useLocation } from "react-router-dom";
import { logo } from "../assets";
import { navigation } from "../constants";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import MenuSvg from "../assets/svg/MenuSvg";
import { motion, useSpring, useScroll, useTransform } from "motion/react";

const Header = () => {
  const { pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const { scrollY } = useScroll();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 200,
    damping: 25,
    mass: 0.5,
  });

  // Animations for desktop
  const width = useTransform(smoothScrollY, [0, 250], ["100%", "70%"]);
  const width2xl = useTransform(smoothScrollY, [0, 250], ["100%", "60%"]);
  const getWidth = () => {
    if (!isDesktop) return "100%";
    if (window.innerWidth >= 1536) return width2xl;
    return width;
  };
  const backgroundColor = useTransform(
    scrollY,
    isDesktop ? [250, 300] : [50, 100],
    isDesktop
      ? ["rgba(255,255,255,0)", "rgba(255,255,255,0.04)"]
      : ["rgba(13, 17, 23, 0)", "rgba(13, 17, 23, 1)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 200],
    isDesktop ? ["blur(0px)", "blur(20px)"] : ["blur(0px)", "blur(0px)"]
  );

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
    <motion.div
      style={{
        width: getWidth(),
        backgroundColor: backgroundColor,
        backdropFilter: isDesktop ? backdropFilter : "none",
      }}
      className="fixed left-1/2 -translate-x-1/2 lg:top-10 z-[999] flex items-center justify-between px-6 lg:px-10 xl:px-16 h-[4.75rem] lg:rounded-full max-w-full"
    >
      {/* Logo */}
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

      {/* Navigation */}
      <nav
        className={`${
          openNavigation ? "flex" : "hidden"
        } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:ml-auto lg:bg-transparent`}
      >
        <div className="relative z-[998] flex flex-col items-center justify-center m-auto lg:flex-row lg:space-x-20 xl:space-x-20 2xl:space-x-32 px-8">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              onClick={handleClick}
              className={`block group relative text-2xl text-n-1 transition-colors py-6 md:py-8 lg:py-2 lg:px-1 lg:text-sm lg:font-semibold lg:leading-5 uppercase`}
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

      {/* Hamburger */}
      <button className="ml-auto lg:hidden px-3" onClick={toggleNav}>
        <MenuSvg openNavigation={openNavigation} />
      </button>
    </motion.div>
  );
};

export default Header;
