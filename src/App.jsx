import BackgroundOverlay from "./assets/svg/BackgroundOverlay";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Hero from "./pages/Hero";
import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <div className="min-h-dvh overscroll-none">
      <Header />
      <AnimatedRoutes />
      {/* <BackgroundOverlay /> */}
    </div>
  );
};

export default App;
