import { useState } from "react";
import ContactTerminal from "../components/ContactTerminal";
import TerminalWindow from "../components/TerminalWindow";
import {
  TerminalBoot,
  TerminalContactFrom,
  TerminalLogo,
} from "../components/design/Terminals";
import { SkullBackground } from "../components/design/Skull";

const Contact = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const openContactForm = () => setShowContactForm(true);
  const closeContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="relative w-full h-screen md:h-[100dvh] pt-[5.5rem] md:pt-[7.25rem] overflow-hidden">
      {/* --- Desktop view --- */}
      <div className="h-full w-full flex flex-row gap-10 px-24 py-12 max-lg:hidden">
        <TerminalWindow
          id="contact"
          title="contact"
          className={"w-full xl:w-2/3 h-full"}
          delay={0.2}
        >
          <ContactTerminal
            onOpenContact={openContactForm}
            formActive={showContactForm}
          />
        </TerminalWindow>

        <div className="flex flex-col w-1/3 h-full gap-10 max-xl:hidden">
          <TerminalWindow
            id="takeover"
            title="takeover"
            className={"w-full h-1/2 relative"}
            delay={0.3}
          >
            <TerminalLogo />
          </TerminalWindow>

          <TerminalWindow
            id="boot"
            title="boot"
            className={"w-full h-1/2"}
            delay={0.4}
          >
            <TerminalBoot />
          </TerminalWindow>
        </div>

        {/* Modal with contact form */}
        {showContactForm && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20">
            <TerminalWindow
              title={"contact-form"}
              className={"w-3/4 h-3/4"}
              delay={0.1}
            >
              <div className="relative w-full h-full bg-black text-white flex flex-col items-center justify-center">
                <SkullBackground />
                <TerminalContactFrom />
              </div>
            </TerminalWindow>
          </div>
        )}
      </div>

      {/* --- Mobile view --- */}
      <div className="h-full w-full px-5 py-4 lg:hidden">
        <TerminalWindow
          title={"contact-form"}
          className={"w-full h-full"}
          delay={0.1}
        >
          <div className="relative w-full h-full bg-black text-white flex flex-col items-center justify-center">
            <SkullBackground rows={8} columns={3} />
            <TerminalContactFrom />
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};

export default Contact;
