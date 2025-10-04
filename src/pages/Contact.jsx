import ContactTerminal from "../components/ContactTerminal";
import TerminalWindow from "../components/TerminalWindow";

const Contact = () => {
  return (
    <div className="relative w-full h-screen md:h-[100dvh] overflow-hidden border-2 border-white">
      <ContactTerminal />

      <TerminalWindow
        title={"scScan"}
        className={"top-[5%] right-0 w-[40%] h-[42%]"}
      >
        <div className="h-full w-full bg-black"></div>
      </TerminalWindow>

      <TerminalWindow
        title={"zshrc"}
        className={"bottom-[5%] right-0 w-[40%] h-[42%]"}
      >
        <div className="h-full w-full bg-black"></div>
      </TerminalWindow>
    </div>
  );
};

export default Contact;
