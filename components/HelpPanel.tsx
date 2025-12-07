"use client";

import React, { useState } from "react";

interface HelpPanelProps {
  open: boolean;
  onClose: () => void;
}

export default function HelpPanel({ open, onClose }: HelpPanelProps) {
  const [helpInput, setHelpInput] = useState("");
  const [helpReply, setHelpReply] = useState("");

  const handleHelpRequest = () => {
    const text = helpInput.toLowerCase();

    if (text.includes("run")) {
      setHelpReply("The Run button executes your JavaScript code.");
    } else if (text.includes("fix") || text.includes("autofix")) {
      setHelpReply("Auto-Fix formats your code using Prettier.");
    } else if (text.includes("error")) {
      setHelpReply("Errors occur due to syntax issues or undefined variables.");
    } else if (text.includes("editor")) {
      setHelpReply("The editor supports JavaScript and syntax highlighting.");
    } else {
      setHelpReply("Try keywords like: run, fix, error, editor.");
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-black shadow-xl p-5 transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Help Center</h2>

        <button
          onClick={onClose}
          className="text-white-500 font-bold text-xl"
        >
          ✕
        </button>
      </div>

   
      <textarea
        className="w-full border p-2 rounded mb-3 h-10"
        placeholder="Ask something…"
        value={helpInput}
        onChange={(e) => setHelpInput(e.target.value)}
      />
    <div className="py-3"></div>
      <button
        onClick={handleHelpRequest}
        className="bg-purple-600 text-white px-3 py-2 rounded w-full"
      >
        Submit
      </button>

    
      {helpReply && (
        <div className="mt-4 p-3 bg-gray-500 rounded border">
          <strong>Response:</strong>
          <p className="mt-2">{helpReply}</p>
        </div>
      )}
    </div>
  );
}
