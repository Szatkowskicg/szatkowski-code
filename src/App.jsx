import Header from "./components/Header";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden flex h-dvh justify-center items-center">
        <Header />
        <Button>Button</Button>
      </div>
    </>
  );
};

export default App;
