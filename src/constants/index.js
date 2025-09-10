import PlIcon from "../assets/images/polish_icon.png";
import EngIcon from "../assets/images/english_icon.png";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import {
  CircleCheckBig,
  CodeXml,
  Server,
  Bot,
  ShieldCheck,
} from "lucide-react";

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

// export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

// export const notificationImages = [notification4, notification3, notification2];

// export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

// export const brainwaveServices = [
//   "Photo generating",
//   "Photo enhance",
//   "Seamless Integration",
// ];

// export const brainwaveServicesIcons = [
//   recording03,
//   recording01,
//   disc02,
//   chromecast,
//   sliders04,
// ];

// export const roadmap = [
//   {
//     id: "0",
//     title: "Voice recognition",
//     text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
//     date: "May 2023",
//     status: "done",
//     imageUrl: roadmap1,
//     colorful: true,
//   },
//   {
//     id: "1",
//     title: "Gamification",
//     text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
//     date: "May 2023",
//     status: "progress",
//     imageUrl: roadmap2,
//   },
//   {
//     id: "2",
//     title: "Chatbot customization",
//     text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
//     date: "May 2023",
//     status: "done",
//     imageUrl: roadmap3,
//   },
//   {
//     id: "3",
//     title: "Integration with APIs",
//     text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
//     date: "May 2023",
//     status: "progress",
//     imageUrl: roadmap4,
//   },
// ];

// export const collabText =
//   "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

// export const collabContent = [
//   {
//     id: "0",
//     title: "Seamless Integration",
//     text: collabText,
//   },
//   {
//     id: "1",
//     title: "Smart Automation",
//   },
//   {
//     id: "2",
//     title: "Top-notch Security",
//   },
// ];

// export const collabApps = [
//   {
//     id: "0",
//     title: "Figma",
//     icon: figma,
//     width: 26,
//     height: 36,
//   },
//   {
//     id: "1",
//     title: "Notion",
//     icon: notion,
//     width: 34,
//     height: 36,
//   },
//   {
//     id: "2",
//     title: "Discord",
//     icon: discord,
//     width: 36,
//     height: 28,
//   },
//   {
//     id: "3",
//     title: "Slack",
//     icon: slack,
//     width: 34,
//     height: 35,
//   },
//   {
//     id: "4",
//     title: "Photoshop",
//     icon: photoshop,
//     width: 34,
//     height: 34,
//   },
//   {
//     id: "5",
//     title: "Protopie",
//     icon: protopie,
//     width: 34,
//     height: 34,
//   },
//   {
//     id: "6",
//     title: "Framer",
//     icon: framer,
//     width: 26,
//     height: 34,
//   },
//   {
//     id: "7",
//     title: "Raindrop",
//     icon: raindrop,
//     width: 38,
//     height: 32,
//   },
// ];

// export const pricing = [
//   {
//     id: "0",
//     title: "Basic",
//     description: "AI chatbot, personalized recommendations",
//     price: "0",
//     features: [
//       "An AI chatbot that can understand your queries",
//       "Personalized recommendations based on your preferences",
//       "Ability to explore the app and its features without any cost",
//     ],
//   },
//   {
//     id: "1",
//     title: "Premium",
//     description: "Advanced AI chatbot, priority support, analytics dashboard",
//     price: "9.99",
//     features: [
//       "An advanced AI chatbot that can understand complex queries",
//       "An analytics dashboard to track your conversations",
//       "Priority support to solve issues quickly",
//     ],
//   },
//   {
//     id: "2",
//     title: "Enterprise",
//     description: "Custom AI chatbot, advanced analytics, dedicated account",
//     price: null,
//     features: [
//       "An AI chatbot that can understand your queries",
//       "Personalized recommendations based on your preferences",
//       "Ability to explore the app and its features without any cost",
//     ],
//   },
// ];

// export const benefits = [
//   {
//     id: "0",
//     title: "Ask anything",
//     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     backgroundUrl: "assets/benefits/card-1.svg",
//     iconUrl: benefitIcon1,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "1",
//     title: "Improve everyday",
//     text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
//     backgroundUrl: "assets/benefits/card-2.svg",
//     iconUrl: benefitIcon2,
//     imageUrl: benefitImage2,
//     light: true,
//   },
//   {
//     id: "2",
//     title: "Connect everywhere",
//     text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
//     backgroundUrl: "assets/benefits/card-3.svg",
//     iconUrl: benefitIcon3,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "3",
//     title: "Fast responding",
//     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     backgroundUrl: "assets/benefits/card-4.svg",
//     iconUrl: benefitIcon4,
//     imageUrl: benefitImage2,
//     light: true,
//   },
//   {
//     id: "4",
//     title: "Ask anything",
//     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     backgroundUrl: "assets/benefits/card-5.svg",
//     iconUrl: benefitIcon1,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "5",
//     title: "Improve everyday",
//     text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
//     backgroundUrl: "assets/benefits/card-6.svg",
//     iconUrl: benefitIcon2,
//     imageUrl: benefitImage2,
//   },
// ];

// export const socials = [
//   {
//     id: "0",
//     title: "Discord",
//     iconUrl: discordBlack,
//     url: "#",
//   },
//   {
//     id: "1",
//     title: "Twitter",
//     iconUrl: twitter,
//     url: "#",
//   },
//   {
//     id: "2",
//     title: "Instagram",
//     iconUrl: instagram,
//     url: "#",
//   },
//   {
//     id: "3",
//     title: "Telegram",
//     iconUrl: telegram,
//     url: "#",
//   },
//   {
//     id: "4",
//     title: "Facebook",
//     iconUrl: facebook,
//     url: "#",
//   },
// ];
