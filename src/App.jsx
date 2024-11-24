import Header from "./components/Header";
import Button from "./components/Button";
import BackgroundOverlay from "./assets/svg/BackgroundOverlay";
import About from "./components/About";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="min-h-dvh">
        <Header />
        <About />
        {/* <Hero /> */}
      </div>
      <BackgroundOverlay />
    </>
  );
};

export default App;
