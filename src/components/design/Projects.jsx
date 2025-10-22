import myImage from "../../assets/images/smokins_app_1.png";
import myImage7 from "../../assets/images/blanko_trade_2.png";
import myImage2 from "../../assets/images/smokins_app_2.png";
import myImage3 from "../../assets/images/alfa_rims.webp";
import myImage4 from "../../assets/images/msi_render.webp";
import myImage5 from "../../assets/images/brevky_web.webp";
import myImage6 from "../../assets/images/brevky_logo.webp";
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

  return (
    <div className="relative w-full h-full flex items-center justify-center text-white">
      <div className="container flex flex-row items-center justify-center max-lg:space-y-8 max-lg:flex-col gap-8 w-full">
        <TextSection title={project.title} description={project.description} />

        <div className="lg:flex-[3]">
          <div className="grid grid-cols-8 grid-rows-3 gap-10 -rotate-[30deg]">
            <div className="col-start-3 col-span-2 bg-blue-400 rounded-xl overflow-hidden">
              <img
                src={myImage3}
                alt="Opis zdjęcia"
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="col-span-3 bg-red-300 rounded-xl overflow-hidden">
              <img
                src={myImage4}
                alt="Opis zdjęcia"
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="row-start-2 col-span-3 bg-red-400 rounded-xl overflow-hidden">
              <img
                src={myImage5}
                alt="Opis zdjęcia"
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="row-start-2 col-span-2 bg-red-300 rounded-xl overflow-hidden">
              <img
                src={myImage6}
                alt="Opis zdjęcia"
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="row-start-2 col-span-3 bg-red-400 rounded-xl overflow-hidden">
              <img
                src={myImage4}
                alt="Opis zdjęcia"
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="col-start-2 row-start-3 col-span-3 bg-red-300 rounded-xl overflow-hidden">
              <img
                src={myImage4}
                alt="Opis zdjęcia"
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="row-start-3 col-span-2 bg-red-400 rounded-xl overflow-hidden">
              <img
                src={myImage3}
                alt="Opis zdjęcia"
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
