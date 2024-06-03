"use client";
import React, { useState } from "react";
import Screen from "./Screen";
import * as math from "mathjs";

export default function Buttons() {
  const [input, setInput] = useState("");

  function handleButtonClick(value) {
    setInput(input + value);
  }

  function handleSpecialClick(special) {
    if (special === "C") {
      setInput("");
    } else if (special === "<") {
      setInput(input.slice(0, -1));
    } else if (special === "=") {
      try {
        setInput(math.evaluate(input).toString());
      } catch {
        setInput("Error");
      }
    }
  }

  const buttons = [
    ["%", "C", "<", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  return (
    <div className="flex flex-col items-center bg-gray-900 h-fit py-8 px-6 rounded-3xl justify-center">
      <div className="w-full">
        <Screen value={input} />
        <div className="grid grid-cols-4 gap-3 mt-5">
          {buttons.flat().map((button) => (
            <div key={button} className="flex items-center justify-center">
              <button
                onClick={() =>
                  button === "=" || button === "C" || button === "<"
                    ? handleSpecialClick(button)
                    : handleButtonClick(button)
                }
                className="p-4 font-bold rounded-full text-gray-900 bg-white hover:bg-gray-300 transition-all h-16 w-16 flex items-center justify-center"
              >
                {button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
