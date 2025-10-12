import PlIcon from "../assets/images/polish_icon.png";
import EngIcon from "../assets/images/english_icon.png";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { CodeXml, Server, Bot, ShieldCheck } from "lucide-react";

export const navigation = [
  {
    id: "0",
    title: "O mnie",
    url: "/about",
    class: "bg-color-1",
  },
  {
    id: "1",
    title: "Portfolio",
    url: "/portfolio",
    class: "bg-color-2",
  },
  {
    id: "2",
    title: "Kontakt",
    url: "/contact",
    class: "bg-color-3",
  },
];

export const socials = [
  { href: "https://github.com", icon: Github },
  { href: "https://linkedin.com", icon: Linkedin },
  { href: "https://instagram.com", icon: Instagram },
  { href: "https://facebook.com", icon: Facebook },
];

export const languages = [
  { code: "pl", label: "PL", icon: PlIcon },
  { code: "en", label: "EN", icon: EngIcon },
];

export const aboutMe = {
  name: "Paweł Szatkowski",
  role: "Full-Stack Developer",
  intro:
    "Driven to create refined, inclusive digital experiences that are both visually precise and user-centered.",
  paragraphs: [
    "I have gained valuable experience working on freelance projects, where each assignment allows me to blend creativity with technology to deliver intuitive and user-friendly solutions.",
    "Currently, I also work as a data analyst, which lets me combine analytical thinking with my development skills. This background enables me to create projects that are not only visually appealing but also functional and user-centered.",
  ],
};

export const buildModernWeb = {
  title: "Building modern web experiences powered by AI.",
  points: [
    "I specialize in crafting clean, scalable applications with React, JavaScript, and Tailwind CSS, supported by Python on the backend.",
    "My workflow is enhanced by AI tools that speed up coding, testing, and problem-solving, letting me focus on what matters most: building great user experiences.",
    "Always learning, always experimenting, always creating.",
  ],
};

export const skills = [
  {
    title: "Frontend",
    subtitle: `React.js • HTML • CSS
    Tailwind`,
    icon: CodeXml,
  },
  {
    title: "Backend",
    subtitle: `Python • Node.js
    APIs • Automation`,
    icon: Server,
  },
  {
    title: "AI-Driven",
    subtitle: `Code assist • Prototyping
    Optimization`,
    icon: Bot,
  },
  {
    title: "Security",
    subtitle: `Secure code • Privacy-first
    Reliable apps`,
    icon: ShieldCheck,
  },
];

export const portfolioCTA = {
  tagline: "Code smarter. Build faster. Stay creative.",
  title: `Ideas are cool. Execution is better.
   Here’s mine.`,
  button: "Portfolio",
};

export const asciiArt = `

                     _   _                     _    _      
                    | | | |                   | |  (_)     
        ___ ______ _| |_| | _______      _____| | ___      
       / __|_  / _\` | __| |/ / _ \\ \\ /\\ / / __| |/ / |     
       \\__ \\/ / (_| | |_|   < (_) \\ V  V /\\__ \\   <| |     
       |___/___\\__,_|\\__|_|\\_\\___/ \\_/\\_/ |___/_|\\_\\_|     
         / /  | (_)     (_) |      | |   / /\\ \\            
        / / __| |_  __ _ _| |_ __ _| |  / /  \\ \\           
       < < / _\` | |/ _\` | | __/ _\` | | / /    > >          
        \\ \\ (_| | | (_| | | || (_| | |/ /    / /           
         \\_\\__,_|_|\\__, |_|\\__\\__,_|_/_/    /_/            
                    __/ |                                  
                   |___/                                   
                   

`;
