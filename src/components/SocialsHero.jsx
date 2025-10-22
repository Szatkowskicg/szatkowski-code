import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { socials, languages } from "../constants";

const SocialsHero = () => {
  const [lang, setLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      exit={{
        opacity: 0,
        y: 30,
        transition: { ease: "easeIn", duration: 0.3 },
      }}
      className="flex flex-col items-start justify-center"
    >
      {/* Social links */}
      <div className="flex flex-col space-y-4 pb-4 items-center">
        {socials.map(({ href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Icon className="w-5 h-5 m-1" />
          </a>
        ))}
        <div className="w-px h-7 bg-n-1/10" />
      </div>

      {/* Language switcher */}
      <div
        className="relative flex items-center"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Active language icon */}
        <div className="w-7 h-7 rounded-full overflow-hidden relative z-10">
          <img
            src={languages.find((l) => l.code === lang)?.icon}
            alt={lang.toUpperCase()}
            className="w-full h-full"
          />
        </div>

        {/* Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <div className="absolute left-0 overflow-hidden rounded-l-full">
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="flex items-center bg-n-1/10 shadow-md rounded-full pl-9 pr-2 py-1"
              >
                {languages.map((l, i) => (
                  <div key={l.code} className="flex items-center">
                    <button
                      onClick={() => setLang(l.code)}
                      className="px-2 text-sm cursor-pointer hover:scale-105 transition"
                    >
                      {l.label}
                    </button>
                    {i < languages.length - 1 && (
                      <div className="w-px h-5 bg-n-1/10 mx-1" />
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SocialsHero;
