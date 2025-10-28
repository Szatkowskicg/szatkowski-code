import myImage from "../../assets/images/smokins_app_1.png";
import myImage7 from "../../assets/images/blanko_trade_2.png";
import myImage2 from "../../assets/images/smokins_app_2.png";

import designImg1 from "../../assets/images/design_p_1.webp";
import designImg2 from "../../assets/images/design_p_2.webp";
import designImg3 from "../../assets/images/design_p_3.webp";
import designImg4 from "../../assets/images/design_p_4.webp";
import designImg5 from "../../assets/images/design_p_5.webp";
import designImg6 from "../../assets/images/design_p_6.webp";
import designImg7 from "../../assets/images/design_p_7.webp";
import designImg8 from "../../assets/images/design_p_8.webp";

import Button from "../../components/Button";
import { projectsData } from "../../constants/projects";

const TextSection = ({ title, description }) => {
  return (
    <div className="flex flex-col lg:flex-[2] items-end justify-center">
      <h1 className="h1 font-bold mb-8">{title}</h1>
      <p className="pl-12 text-lg pb-8">{description}</p>
      <Button
        className="text-xl"
        onClick={(e) => {
          console.log("Button clicked!");
        }}
      >
        Check more
      </Button>
    </div>
  );
};

const ImageTile = ({ src, rounded = "rounded-3xl" }) => {
  return (
    <div
      className={`w-24 h-24 md:w-32 md:h-32 lg:h-36 lg:w-36 xl:h-40 xl:w-40 2xl:h-44 2xl:w-44 bg-n-4 ${rounded} overflow-hidden`}
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    >
      <img
        src={src}
        alt=""
        draggable={false}
        className="w-full h-full object-cover select-none pointer-events-none"
      />
    </div>
  );
};

export const Project1 = () => {
  const project = projectsData.smokins;

  return (
    <div className="relative w-full h-full flex items-center justify-center text-white">
      <div className="container flex flex-row items-center justify-center max-lg:space-y-8 max-lg:flex-col gap-8">
        <TextSection title={project.title} description={project.description} />

        <div className="lg:flex-[3] flex flex-row items-center justify-end gap-2 overflow-hidden">
          <img
            src={myImage}
            alt="Opis zdjęcia"
            className="h-[35rem] lg:h-[40rem] w-auto max-lg:hidden"
          />
          <img
            src={myImage2}
            alt="Opis zdjęcia"
            className="h-[25rem] w-auto max-lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export const Project2 = () => {
  const project = projectsData.blancoTrade;

  return (
    <div className="relative w-full h-full flex items-center justify-center text-white">
      <div className="container flex flex-row items-center justify-center max-lg:space-y-8 max-lg:flex-col gap-8">
        <div className="lg:flex-[3] flex flex-row items-center justify-center gap-2 overflow-hidden">
          <img
            src={myImage7}
            alt="Opis zdjęcia"
            className="h-max w-auto max-lg:hidden"
          />
        </div>

        <TextSection title={project.title} description={project.description} />
      </div>
    </div>
  );
};

export const Project3 = () => {
  const project = projectsData.other;
  const images = [
    { src: designImg1, rounded: "rounded-full" },
    { src: designImg2 },
    { src: designImg3 },
    { src: designImg4 },
    { src: designImg5 },
    { src: designImg6 },
    { src: designImg7 },
    { src: designImg8, rounded: "rounded-full" },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center text-white">
      <div className="container flex flex-row items-center justify-center max-lg:space-y-8 max-lg:flex-col gap-8 w-full">
        <TextSection title={project.title} description={project.description} />

        <div className="lg:flex-[3] flex flex-row items-center justify-end gap-2 overflow-hidden">
          <div className="grid grid-cols-3 grid-rows-3 gap-6 py-10">
            {images.map((img, i) =>
              img.src ? (
                <ImageTile key={i} src={img.src} rounded={img.rounded} />
              ) : (
                <div
                  key={i}
                  className={`xl:h-44 xl:w-44 bg-n-4 ${
                    img.rounded || "rounded-3xl"
                  } overflow-hidden`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
