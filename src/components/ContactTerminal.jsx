import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import TerminalWindow from "./TerminalWindow";

export default function ContactTerminal() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [introDone, setIntroDone] = useState(false);
  const inputRef = useRef(null);
  const introLines = [
    "##############################################",
    "#                                            #",
    "#            example digital ASCII           #",
    "#                                            #",
    "##############################################",
    "Welcome to my contact terminal",
    "If you want to write to me just press enter",
  ];

  useEffect(() => {
    if (currentLineIndex < introLines.length) {
      if (charIndex < introLines[currentLineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText(
            (prev) => prev + introLines[currentLineIndex][charIndex]
          );
          setCharIndex((prev) => prev + 1);
        }, 5);
        return () => clearTimeout(timeout);
      } else {
        setLines((prev) => [...prev, { type: "output", text: currentText }]);
        setCurrentText("");
        setCharIndex(0);
        setCurrentLineIndex((prev) => prev + 1);
      }
    } else if (!introDone) {
      setIntroDone(true);
    }
  }, [charIndex, currentLineIndex]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && introDone) {
      const trimmed = input.trim();
      const mainCmd = trimmed.split(" ")[0].toLowerCase();

      if (trimmed === "") {
        setLines((prev) => [
          ...prev,
          { type: "input", text: input },
          { type: "output", text: "Type 'contact' to get in touch." },
        ]);
      } else if (mainCmd === "clear") {
        setLines([]);
      } else if (mainCmd === "contact") {
        setLines((prev) => [
          ...prev,
          { type: "input", text: input },
          { type: "output", text: "Opening contact form..." },
        ]);
      } else if (mainCmd === "whoami") {
        setLines((prev) => [
          ...prev,
          { type: "input", text: input },
          { type: "output", text: "Wonderfull person <3" },
        ]);
      } else if (mainCmd === "help") {
        setLines((prev) => [
          ...prev,
          { type: "input", text: input },
          { type: "output", text: "help info" },
        ]);
      } else if (mainCmd === "cd") {
        setLines((prev) => [
          ...prev,
          { type: "input", text: input },
          { type: "output", text: "Directory secured can't move" },
        ]);
      } else {
        setLines((prev) => [
          ...prev,
          { type: "input", text: input },
          { type: "output", text: `command not found: ${mainCmd}` },
        ]);
      }
      setInput("");
    }
  };

  return (
    <TerminalWindow title={"contact"}>
      {/* Terminal Body */}
      <div
        className="bg-[#161B22] text-white font-mono p-4 rounded-b-xl shadow-lg w-[800px] max-w-3xl mx-auto h-[600px] overflow-y-auto select-text"
        onClick={() => inputRef.current && inputRef.current.focus()}
      >
        {lines.map((line, i) => (
          <div key={i}>
            {line.type === "input" ? (
              <div>
                <span className="text-color-2">szatkowski-digital</span>:
                <span className="text-color-1">~$</span> {line.text}
              </div>
            ) : (
              <div>{line.text}</div>
            )}
          </div>
        ))}

        {currentText && <div>{currentText}</div>}

        {/* Input line – pokazuj dopiero po intro */}
        {introDone && (
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
    </TerminalWindow>
  );
}
