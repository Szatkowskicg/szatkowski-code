import Header from "./components/Header";
import Button from "./components/Button";
import BackgroundOverlay from "./assets/svg/BackgroundOverlay";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden flex h-dvh justify-center items-center">
        <Header />
        <div className="container space-y-6 justify-center">
          <h1 className="h1 font-black text-center">
            Cześć, jestem Paweł. <br />
            Front-end developer.
          </h1>
          <h5 className="h5 text-center">
            Projektowanie to dla mnie sztuka łączenia estetyki, funkcjonalności
            i potrzeb użytkownika.
          </h5>
          <div className="flex justify-center pt-4">
            <Button className={"text-xl"}>Przejdź dalej</Button>
          </div>
        </div>
      </div>
      <BackgroundOverlay />
    </>
  );
};

export default App;
