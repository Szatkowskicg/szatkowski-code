import { useState, useEffect, useRef } from "react";
import { asciiArt } from "../constants";

export default function ContactTerminal({ onOpenContact, formActive }) {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [introDone, setIntroDone] = useState(false);
  const [contactMode, setContactMode] = useState(false);
  const inputRef = useRef(null);

  const asciiArtLines = asciiArt
    .split("\n")
    .map((t) => ({ type: "ascii", text: t }));
  const introLines = [
    { type: "intro", text: "Welcome to my contact terminal" },
    {
      type: "intro",
      text: "If you want to write to me just type 'contact' press enter",
    },
  ];
  const contactOpening = [
    { type: "output", text: "Loading contact module..." },
    { type: "output", text: "Initializing secure channel" },
    { type: "output", text: "Connecting to szatkowski-digital" },
    { type: "output", text: "Success! Contact form is ready." },
    { type: "output", text: "..." },
  ];
  const startupLines = [...asciiArtLines, ...introLines];

  useEffect(() => {
    if (currentLineIndex < startupLines.length) {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, startupLines[currentLineIndex]]);
        setCurrentLineIndex((i) => i + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else if (!introDone) {
      setIntroDone(true);
    }
  }, [currentLineIndex, introDone, startupLines]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && introDone && !formActive && !contactMode) {
      const cmd = input.trim().toLowerCase().split(" ")[0];
      const add = (out) =>
        setLines((prev) =>
          [...prev, { type: "input", text: input }, out].filter(Boolean)
        );

      if (!cmd)
        add({ type: "output", text: "Type 'contact' to get in touch." });
      else if (cmd === "clear") setLines([]);
      else if (cmd === "contact") {
        setContactMode(true);
        add({ type: "output", text: "Opening contact form..." });

        contactOpening.forEach((l, i) =>
          setTimeout(() => setLines((p) => [...p, l]), 400 * (i + 1))
        );

        setTimeout(() => {
          onOpenContact?.();
          setContactMode(false);
        }, contactOpening.length * 400 + 300);
      } else if (cmd === "whoami")
        add({ type: "output", text: "Wonderful person <3" });
      else if (cmd === "help") add({ type: "output", text: "help info" });
      else if (cmd === "cd")
        add({ type: "output", text: "Directory secured, can't move" });
      else add({ type: "output", text: `command not found: ${cmd}` });

      setInput("");
    }
  };

  return (
    <div
      className="bg-[#161B22]/90 text-white font-mono p-4 mx-auto w-full h-full overflow-y-auto select-text"
      onClick={() => inputRef.current?.focus()}
    >
      {lines.map((line, i) => (
        <div
          key={i}
          className={
            line.type === "ascii"
              ? "whitespace-pre leading-none"
              : "whitespace-pre-wrap leading-normal"
          }
        >
          {line.type === "input" ? (
            <>
              <span className="text-color-2">szatkowski-digital</span>:
              <span className="text-color-1">~$</span> {line.text}
            </>
          ) : (
            line.text
          )}
        </div>
      ))}

      {introDone && !formActive && !contactMode && (
        <div className="flex">
          <span className="text-color-2">szatkowski-digital</span>:
          <span className="text-color-1">~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent outline-none border-none text-white ml-2 flex-1"
            autoFocus
          />
        </div>
      )}
    </div>
  );
}
