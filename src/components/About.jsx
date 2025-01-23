import React from "react";
import {
  logo,
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
    <div className="relative h-full pt-[10rem] pb-[5rem] overflow-y-auto box-border">
      <div className="container">
        <Reveal className="flex flex-col lg:flex-row max-lg:space-y-8">
          <SequentialAnimations>
            <h2 className="h1 font-black">
              Paweł <br />
              Szatkowski
            </h2>
            <h5 className="h5 font-medium">Front-End Developer</h5>
          </SequentialAnimations>

          <SequentialAnimations className="lg:pl-[8rem] space-y-8" delay={0.8}>
            <h4 className="h2">
              Driven to create refined, inclusive digital experiences that are
              both visually precise and user-centered.
            </h4>

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

        <div class="space-y-4 md:space-y-0 md:grid grid-cols-6 gap-y-6 py-[8rem]">
          <TimelineItem
            title={"Epiq"}
            position={"Operations Analyst"}
            time={"2021~"}
            className={"col-start-4 col-span-3"}
          />
          <TimelineItem
            title={"Freelance"}
            position={"Graphic Designer / Web and App Developer"}
            time={"2019~"}
            className={"row-start-2 col-start-3 col-span-4"}
          />
          <TimelineItem
            title={"Project Insediamento"}
            position={"Graphic Designer"}
            time={"2017 - 2019"}
            className={"row-start-3 col-span-2"}
          />
        </div>

        <div className="grid gap-8 grid-cols-2">
          <Reveal className="col-span-2 max-md:space-y-6 md:grid md:grid-cols-2 gap-6 py-8 px-6 lg:px-12 bg-n-7 rounded-[1.5rem] content-center">
            <div className="col-span-2">
              <h4 className="h4">Technology and Frameworks</h4>
            </div>
            <div className="">
              <p className="text-n-3 font-semibold">Web</p>
              <div className="space-y-4 py-4 lg:px-8 xl:px-16">
                <SkillProgressItem
                  title={"React.js"}
                  icon={react}
                  progress={6}
                />
                <SkillProgressItem
                  title={"Node.js"}
                  icon={nodeJs}
                  progress={2}
                />
              </div>
            </div>
            <div className="">
              <p className="text-n-3 font-semibold">Mobile</p>
              <div className="space-y-4 py-4 lg:px-8 xl:px-16">
                <SkillProgressItem
                  title={"React Native"}
                  icon={react}
                  progress={5}
                />
              </div>
            </div>
            <div className="md:col-start-2 md:row-start-2 md:row-span-2 space-y-4">
              <p className="text-n-3 font-semibold">Other</p>
              <div className="flex justify-center items-center">
                <div className="grid grid-cols-4 gap-2 lg:gap-4">
                  <SkillIconItem icon={viteJs} title="Vite.js" />
                  <SkillIconItem icon={tailwind} title="Expo" />
                  <SkillIconItem icon={appwrite} title="React" />
                  <SkillIconItem icon={firebase} title="React" />
                  <SkillIconItem icon={expo} title="React" />
                  <SkillIconItem icon={git} title="React" />
                  <SkillIconItem icon={illustrator} title="React" />
                  <SkillIconItem icon={figma} title="React" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="col-span-2 lg:col-span-1 space-y-6 py-8 px-6 lg:px-12 bg-n-7 rounded-[1.5rem] content-center">
            <h4 className="h4">Languages</h4>
            <div className="space-y-4 lg:px-8">
              <SkillProgressItem title={"JS"} icon={javascript} progress={5} />
              <SkillProgressItem title={"HTML"} icon={html} progress={8} />
              <SkillProgressItem title={"CSS"} icon={css} progress={8} />
            </div>
          </Reveal>

          <Reveal className="col-span-2 lg:col-span-1 space-y-6 py-8 px-6 lg:px-12 bg-n-7 rounded-[1.5rem] content-center ">
            <h4 className="h4">Portfolio</h4>
            <div></div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default About;
