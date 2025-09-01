import {
  react,
  nodeJs,
  viteJs,
  expo,
  tailwind,
  figma,
  illustrator,
  git,
  appwrite,
  firebase,
  html,
  css,
  javascript,
} from "../assets";
import Reveal from "./Reveal";
import SequentialAnimations from "./SequentialAnimarions";
import Footer from "./Footer";
import Button from "./Button";
import {
  CircleCheckBig,
  CodeXml,
  Server,
  Bot,
  ShieldCheck,
} from "lucide-react";
import Card from "./Card";
import GradientDiv from "./design/GradientDiv";

const TimelineItem = ({ className, title, position, time }) => {
  return (
    <Reveal
      className={`bg-n-3 rounded-[2.5rem] h-[5rem] px-7 flex justify-between items-center ${className}`}
    >
      <div>
        <p className="font-bold text-lg min-w-0">{title}</p>
        <p>{position}</p>
      </div>
      <div>
        <p className="font-bold text-lg min-w-0">{time}</p>
      </div>
    </Reveal>
  );
};

const SkillProgressItem = ({ title, icon, progress }) => {
  const progressWidth = `calc(${(progress / 10) * 100}% - ${6}px)`;

  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex space-x-4 items-center">
        <div className="bg-n-3 p-2 rounded-xl shadow-md shadow-n-8/80">
          <img src={icon} className="w-6 h-6 object-contain" alt={title} />
        </div>
        <p>{title}</p>
      </div>
      <div className="my-[.5rem] bg-n-3 w-32 md:w-40 lg:w-48 h-4 relative rounded-xl shadow-md shadow-n-8/80">
        <span
          className="rounded-xl absolute top-[3px] left-[3px] bottom-[3px] bg-color-2"
          style={{ width: progressWidth }}
        ></span>
      </div>
    </div>
  );
};

const SkillIconItem = ({ icon, title }) => {
  return (
    <div className="group flex flex-col p-4 bg-n-3 shadow-md shadow-n-8/80 rounded-2xl aspect-square justify-center items-center transform transition-transform ease-out hover:translate-y-[-5px] hover:scale-105">
      <img
        src={icon}
        className="w-8 h-8 md:w-12 md:h-12 object-contain"
        alt={title}
      />
      {/* <p className="">{title}</p> */}
    </div>
  );
};

const About = () => {
  return (
    <div className="relative h-full pt-[10rem] overflow-y-auto box-border">
      <div className="container space-y-[8rem]">
        {/* First section - Pawel */}
        <Reveal className="flex flex-col lg:flex-row max-lg:space-y-8">
          <SequentialAnimations>
            <h1 className="h1 font-black">
              Paweł <br />
              Szatkowski
            </h1>
            <h5 className="h5 font-medium">Full-Stack Developer</h5>
          </SequentialAnimations>

          <SequentialAnimations className="lg:pl-[8rem] space-y-8" delay={0.8}>
            <h2 className="h2">
              Driven to create refined, inclusive digital experiences that are
              both visually precise and user-centered.
            </h2>

            <p className="h6">
              I have gained valuable experience working on freelance projects,
              where each assignment allows me to blend creativity with
              technology to deliver intuitive and user-friendly solutions.
            </p>

            <p className="h6">
              Currently, I also work as a data analyst, which lets me combine
              analytical thinking with my development skills. This background
              enables me to create projects that are not only visually appealing
              but also functional and user-centered.
            </p>
          </SequentialAnimations>
        </Reveal>

        {/* Second section - Build modern web */}
        <GradientDiv fade="bottom" gradient="br">
          <div className="flex">
            <div className="w-2/3 space-y-8">
              <h2 className="h2 pb-8">
                Building modern web experiences powered by AI.
              </h2>

              <div className="px-8 space-y-8 body-1">
                <div className="flex items-center space-x-8">
                  <CircleCheckBig className="w-6 h-6 text-color-2 shrink-0" />
                  <p>
                    I specialize in crafting clean, scalable applications with
                    React, JavaScript, and Tailwind CSS, supported by Python on
                    the backend.
                  </p>
                </div>

                <div className="flex items-center space-x-8">
                  <CircleCheckBig className="w-6 h-6 text-color-2 shrink-0" />

                  <p>
                    My workflow is enhanced by AI tools that speed up coding,
                    testing, and problem-solving, letting me focus on what
                    matters most: building great user experiences.
                  </p>
                </div>

                <div className="flex items-center space-x-8">
                  <CircleCheckBig className="w-6 h-6 text-color-2 shrink-0" />

                  <p>Always learning, always experimenting, always creating.</p>
                </div>
              </div>
            </div>
            <div className="w-1/3"></div>
          </div>
        </GradientDiv>

        {/* Third section - Tiles */}
        <div className="flex justify-between">
          <Card
            title={"Frontend"}
            subtitle={
              <>
                React.js • HTML • CSS <br /> Tailwind
              </>
            }
            icon={CodeXml}
          />

          <Card
            title={"Backend"}
            subtitle={
              <>
                Python • Node.js <br /> APIs • Automation
              </>
            }
            icon={Server}
          />

          <Card
            title={"AI-Driven"}
            subtitle={
              <>
                Code assist • Prototyping <br /> Optimization
              </>
            }
            icon={Bot}
          />

          <Card
            title={"Security"}
            subtitle={
              <>
                Secure code • Privacy-first <br /> Reliable apps
              </>
            }
            icon={ShieldCheck}
          />
        </div>

        {/* Fourth section - Portfolio call to action  */}
        <GradientDiv fade="top" gradient="tl">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="h5 font-normal text-color-2">
              Code smarter. Build faster. Stay creative.
            </h3>
            <h2 className="h2 text-center pb-2">
              Ideas are cool. Execution is better.
              <br /> Here’s mine.
            </h2>
            <Button className={"text-xl"}>Portfolio</Button>
          </div>
        </GradientDiv>
      </div>
      <Footer />
    </div>
  );
};

export default About;
