import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

const SocialsHero = () => {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        <Facebook className="w-5 h-5" />
      </a>

      <span>|</span>

      <span>PL</span>

      <div className="flex justify-center items-center bg-n-1/10 px-4 py-2 rounded-full">
        <p>PL</p>
        <span className="px-2"> | </span>
        <p>EN</p>
      </div>
      <img src="" />
    </div>
  );
};

export default SocialsHero;
