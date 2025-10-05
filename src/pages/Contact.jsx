import ContactTerminal from "../components/ContactTerminal";
import TerminalWindow from "../components/TerminalWindow";

const Contact = () => {
  return (
    <div className="relative w-full h-screen md:h-[100dvh] pt-[5.5rem] md:pt-[7.25rem] overflow-hidden">
      <div className="h-full w-full flex flex-row gap-10 px-24 py-12">
        <TerminalWindow
          title={"contact"}
          className={"w-2/3 h-full"}
          delay={0.2}
        >
          <ContactTerminal />
        </TerminalWindow>

        <div className="flex flex-col w-1/3 h-full gap-10">
          <TerminalWindow
            title={"scScan"}
            className={"w-full h-1/2"}
            delay={0.3}
          >
            <div className="h-full w-full bg-black"></div>
          </TerminalWindow>

          <TerminalWindow
            title={"zshrc"}
            className={"w-full h-1/2"}
            delay={0.4}
          >
            <div className="h-full w-full bg-black"></div>
          </TerminalWindow>
        </div>
      </div>
    </div>
  );
};

export default Contact;
