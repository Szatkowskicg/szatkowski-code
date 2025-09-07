import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

const SocialsHero = () => {
  return (
    <div className="flex flex-col space-y-4">
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

      <span>ENG</span>
      <span>PLN</span>
      <img src="" />
    </div>
  );
};

export default SocialsHero;
