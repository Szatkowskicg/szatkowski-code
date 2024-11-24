import React from "react";
import Section from "./Section";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col space-y-6 justify-center items-center h-screen -mt-[5rem]">
      <div className="container">
        <h1 className="h1 font-black text-center">
          Cześć, jestem Paweł. <br />
          Front-end developer.
        </h1>
        <h5 className="h5 text-center">
          Projektowanie to dla mnie sztuka łączenia estetyki, funkcjonalności i
          potrzeb użytkownika.
        </h5>
        <div className="flex justify-center pt-4">
          <Button className={"text-xl"}>Przejdź dalej</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
