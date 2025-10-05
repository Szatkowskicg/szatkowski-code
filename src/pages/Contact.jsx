import { useState } from "react";
import ContactTerminal from "../components/ContactTerminal";
import TerminalWindow from "../components/TerminalWindow";

const Contact = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const openContactForm = () => setShowContactForm(true);
  const closeContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="relative w-full h-screen md:h-[100dvh] pt-[5.5rem] md:pt-[7.25rem] overflow-hidden">
      <div className="h-full w-full flex flex-row gap-10 px-24 py-12">
        <TerminalWindow
          title={"contact"}
          className={"w-2/3 h-full"}
          delay={0.2}
        >
          <ContactTerminal
            onOpenContact={openContactForm}
            formActive={showContactForm}
          />
        </TerminalWindow>

        <div className="flex flex-col w-1/3 h-full gap-10">
          <TerminalWindow
            title={"scScan"}
            className={"w-full h-1/2"}
            delay={0.3}
          >
            <div className="h-full w-full bg-[#161B22]/90"></div>
          </TerminalWindow>

          <TerminalWindow
            title={"zshrc"}
            className={"w-full h-1/2"}
            delay={0.4}
          >
            <div className="h-full w-full bg-[#161B22]/90"></div>
          </TerminalWindow>
        </div>
      </div>

      {showContactForm && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
          <TerminalWindow
            title={"Contact Form"}
            className={"w-3/4 h-3/4"}
            delay={0.1}
          >
            <div className="w-full h-full bg-black text-white flex flex-col items-center justify-center">
              <p className="text-lg mb-6">
                [ tu wstawisz swój formularz kontaktowy ]
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => closeContactForm()}
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  Send
                </button>
                <button
                  onClick={() => closeContactForm()}
                  className="px-4 py-2 bg-red-600 text-white rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </TerminalWindow>
        </div>
      )}
    </div>
  );
};

export default Contact;
