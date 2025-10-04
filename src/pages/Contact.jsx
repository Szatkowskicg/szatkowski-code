import ContactTerminal from "../components/ContactTerminal";
import TerminalWindow from "../components/TerminalWindow";

const Contact = () => {
  return (
    <div className="relative w-full h-screen md:h-[100dvh] flex items-center justify-center overflow-hidden">
      <TerminalWindow title={"scScan"}>
        <div className="h-[250px] w-[400px] bg-black"></div>
      </TerminalWindow>

      <ContactTerminal />

      <TerminalWindow title={"zshrc"}>
        <div className="h-[250px] w-[400px] bg-black"></div>
      </TerminalWindow>
    </div>
  );
};

export default Contact;
