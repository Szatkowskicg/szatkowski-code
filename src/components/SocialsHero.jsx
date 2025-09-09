import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import PlIcon from "../assets/images/polish_icon.png";
import EngIcon from "../assets/images/english_icon.png";

const SocialsHero = () => {
  const [lang, setLang] = useState("pl");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-start justify-center">
      <div className="flex flex-col space-y-4 pb-4 items-center justify-center">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <Github className="w-5 h-5 m-1" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <Linkedin className="w-5 h-5 m-1" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <Instagram className="w-5 h-5 m-1" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <Facebook className="w-5 h-5 m-1" />
        </a>

        <div className="w-px h-7 bg-n-1/10" />
      </div>

      <div
        className="relative flex items-center"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Main lang icon */}
        <div className="w-7 h-7 rounded-full overflow-hidden">
          <img
            src={lang === "pl" ? PlIcon : EngIcon}
            alt="Language"
            className="w-full h-full"
          />
        </div>

        {/* Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 8 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center bg-n-1/10 shadow-md rounded-full"
            >
              {/* Polish */}
              <div
                onClick={() => setLang("pl")}
                className="flex items-center gap-1 px-3 py-1 cursor-pointer hover:scale-105 transition"
              >
                {/* <img src={PlIcon} className="w-4 h-4 rounded-full" alt="PL" /> */}
                <p className="text-sm">PL</p>
              </div>

              {/* Separator */}
              <div className="w-px h-7 bg-n-1/10" />

              {/* English */}
              <div
                onClick={() => setLang("en")}
                className="flex items-center gap-1 px-3 py-1 cursor-pointer hover:scale-105 transition"
              >
                {/* <img src={EngIcon} className="w-4 h-4 rounded-full" alt="EN" /> */}
                <p className="text-sm">EN</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SocialsHero;
