import Reveal from "./Reveal";
import Footer from "./Footer";
import Button from "./Button";
import { CircleCheckBig } from "lucide-react";
import { aboutMe, buildModernWeb, skills, portfolioCTA } from "../constants";
import Card from "./Card";
import GradientDiv from "./design/GradientDiv";

const About = () => {
  return (
    <div className="relative h-full pt-[18rem] overflow-y-auto box-border">
      <div className="container space-y-[6rem]">
        {/* First section - About Me */}
        <Reveal className="flex flex-col lg:flex-row max-lg:space-y-8">
          <div>
            <h1 className="h1 font-black whitespace-pre-line">
              {aboutMe.name}
            </h1>
            <h5 className="h5 font-medium">{aboutMe.role}</h5>
          </div>

          <div className="lg:pl-[8rem] space-y-2 lg:space-y-8">
            <h2 className="h6 lg:h2">{aboutMe.intro}</h2>
            {aboutMe.paragraphs.map((p, i) => (
              <p key={i} className="h6">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Second section - Build modern web */}
        <Reveal>
          <GradientDiv fade="bottom" gradient="br">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full space-y-4 lg:w-2/3 lg:space-y-8">
                <h2 className="h2 pb-2 lg:pb-8">{buildModernWeb.title}</h2>
                <div className="space-y-4 lg:px-8 lg:space-y-8 body-1">
                  {buildModernWeb.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-4 lg:space-x-8"
                    >
                      <CircleCheckBig className="w-4 h-4 lg:w-6 lg:h-6 text-color-2 shrink-0" />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/3"></div>
            </div>
          </GradientDiv>
        </Reveal>

        {/* Third section - Skills */}
        <Reveal className="flex flex-wrap justify-between items-center">
          {skills.map((skill) => (
            <Card
              key={skill.title}
              title={skill.title}
              subtitle={skill.subtitle}
              icon={skill.icon}
            />
          ))}
        </Reveal>

        {/* Fourth section - Portfolio call to action */}
        <Reveal>
          <GradientDiv fade="top" gradient="tl">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h3 className="h5 font-normal text-color-2">
                {portfolioCTA.tagline}
              </h3>
              <h2 className="h2 text-center pb-2">{portfolioCTA.title}</h2>
              <Button className="text-xl">{portfolioCTA.button}</Button>
            </div>
          </GradientDiv>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
};

export default About;
