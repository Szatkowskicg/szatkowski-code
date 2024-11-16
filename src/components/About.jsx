import React from "react";

const TimelineItem = ({ className, title, position, time }) => {
  return (
    <div
      className={`bg-n-3 rounded-[2.5rem] h-[5rem] px-7 flex justify-between items-center ${className}`}
    >
      <div>
        <p className="font-bold text-lg">{title}</p>
        <p>{position}</p>
      </div>
      <div>
        <p className="font-bold text-lg">{time}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="container h-full py-12">
      <div className="flex flex-col lg:flex-row">
        <div>
          <h2 className="h1 font-black">
            Paweł <br />
            Szatkowski
          </h2>
          <h5 className="h5 font-medium">Front-End Developer</h5>
        </div>
        <span></span>
        <div className="lg:pl-[8rem] space-y-9">
          <h4 className="h2">
            Driven to create refined, inclusive digital experiences that are
            both visually precise and user-centered.
          </h4>
          <div className="h6 space-y-8">
            <p>
              I have gained valuable experience working on freelance projects,
              where each assignment allows me to blend creativity with
              technology to deliver intuitive and user-friendly solutions.
            </p>
            <p>
              Currently, I also work as a data analyst, which lets me combine
              analytical thinking with my development skills. This background
              enables me to create projects that are not only visually appealing
              but also functional and user-centered.
            </p>
          </div>
        </div>
      </div>
      <div class="space-y-6 md:space-y-0 md:grid grid-cols-6 gap-y-6 py-[8rem]">
        <TimelineItem
          title={"Epiq"}
          position={"Operations Analyst"}
          time={"2021 - Present"}
          className={"col-start-4 col-span-3"}
        />
        <TimelineItem
          title={"Freelance"}
          position={"Graphic Designer / Web and App Developer"}
          time={"2019 - Present"}
          className={"row-start-2 col-start-3 col-span-4"}
        />
        <TimelineItem
          title={"Project Insediamento"}
          position={"Graphic Designer"}
          time={"2017 - 2019"}
          className={"row-start-3 col-span-2"}
        />
      </div>
      <div className="grid gap-8">
        <div className="col-span-2 grid py-8 px-12 bg-n-7 rounded-[2.5rem] content-center">
          <div className="col-span-2">
            <h4 className="h4">Tech and Framework</h4>
          </div>
          <div className="h-[6rem] justify-items-center content-center">
            Web
          </div>
          <div className="row-span-2 justify-items-center content-center">
            Other
          </div>
          <div className="h-[6rem] justify-items-center content-center">
            Mobile
          </div>
        </div>
        <div className="py-8 px-12 bg-n-7 rounded-[2.5rem] content-center">
          2
        </div>
        <div className="py-8 px-12 bg-n-7 rounded-[2.5rem] content-center">
          3
        </div>
      </div>
    </div>
  );
};

export default About;
