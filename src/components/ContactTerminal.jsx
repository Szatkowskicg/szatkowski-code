import { useState, useEffect, useRef } from "react";
import { motion, useDragControls } from "motion/react";

export default function ContactTerminal() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const inputRef = useRef(null);
  const dragControls = useDragControls();

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
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setLines((prev) => [...prev, { type: "output", text: currentText }]);
        setCurrentText("");
        setCharIndex(0);
        setCurrentLineIndex((prev) => prev + 1);
      }
    }
  }, [charIndex, currentLineIndex]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (input.trim() === "") {
        setLines((prev) => [
          ...prev,
          { type: "output", text: "Type 'contact' to get in touch." },
        ]);
      } else if (input.trim().toLowerCase() === "contact") {
        setLines((prev) => [
          ...prev,
          { type: "output", text: "Opening contact form..." },
        ]);
      } else if (input.trim().toLowerCase() === "whoami") {
        setLines((prev) => [
          ...prev,
          { type: "output", text: "Wonderfull person <3" },
        ]);
      } else if (input.trim().toLowerCase() === "help") {
        setLines((prev) => [...prev, { type: "output", text: "help info" }]);
      } else if (input.trim().toLowerCase() === "cd") {
        setLines((prev) => [
          ...prev,
          { type: "output", text: "Directory secured can't move" },
        ]);
      } else {
        setLines((prev) => [
          ...prev,
          { type: "output", text: `command not found: ${input}` },
        ]);
      }
      setInput("");
    }
  };

  return (
    <motion.div
      drag
      dragListener={false}
      dragControls={dragControls}
      dragMomentum={false}
      className="bg-[#101317]/30 rounded-xl w-full max-w-3xl mx-auto"
    >
      {/* Header / Drag handle */}
      <div
        className="flex flex-row space-x-2 px-2 justify-start items-center py-2"
        onPointerDown={(e) => dragControls.start(e)}
      >
        <div className="bg-color-3/70 rounded-full h-3 w-3"></div>
        <div className="bg-color-2/70 rounded-full h-3 w-3"></div>
        <div className="bg-color-1/70 rounded-full h-3 w-3"></div>
        <div className="flex-1 text-center items-center justify-center">
          <p className="text-xs text-white/70">root@contact</p>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        className="bg-[#161B22] text-white font-mono p-4 rounded-b-xl shadow-lg w-full max-w-3xl mx-auto h-[600px] overflow-y-auto"
        onClick={() => inputRef.current.focus()}
      >
        {lines.map((line, i) => (
          <div key={i}>
            <span className="text-color-2">szatkowski-digital</span>:
            <span className="text-color-1">~$</span> {line.text}
          </div>
        ))}

        {currentText && <div>{currentText}</div>}

        {/* Input line */}
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
      </div>
    </motion.div>
  );
}
