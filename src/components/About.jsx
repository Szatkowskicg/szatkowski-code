import React from "react";

const About = () => {
  return (
    <div className="container">
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
      <div class="grid grid-cols-4 gap-4">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div class="grid grid-cols-subgrid gap-4 col-span-3 border-red-600 border-2">
          <div class="col-start-1">06</div>
        </div>
      </div>
    </div>
  );
};

export default About;
