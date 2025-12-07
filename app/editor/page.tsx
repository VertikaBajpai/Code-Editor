"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { WrenchIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import estree from "prettier/plugins/estree";
import HelpPanel from "@/components/HelpPanel";




export default function EditorPage() {
  const [code, setCode] = useState<string>("console.log('Hello');");
  const [output, setOutput] = useState<string>("");
  const [helpOpen, setHelpOpen] = useState(false);



const autoFix = async () => {

  try {
    const formatted = prettier.format(code, {
      parser: "babel",
      plugins: [parserBabel, estree],
      semi: true,    
      singleQuote: true, 
      useTabs:false,
      tabWidth: 2
    });
     
    setCode(await formatted);
   
    setOutput("");  
   
  } catch (err) {
    console.error(err);
    setOutput("Auto-Fix Error: " + (err instanceof Error ? err.message : String(err)));
  }
};



const runCode = () => {
  try {
    let logs: any[] = [];
    const originalLog = console.log;

    console.log = (...args) => {
      logs.push(args.join(" "));
      originalLog(...args);
    };

    let result;
    try {
      
      result = eval(code);
    } finally {
      console.log = originalLog;
    }

    let finalOutput = "";

    if (logs.length > 0) finalOutput += logs.join("\n");
    if (result !== undefined) finalOutput += "\n" + String(result);
    if (!finalOutput.trim()) finalOutput = "Code executed successfully.";

    setOutput(finalOutput);
  } catch (err: any) {
    setOutput("Error: " + err.message);
  }
};
  return (
    <div className="p-6">
   <div className="flex justify-between items-center mb-4">
  <h1 className="text-2xl font-bold">Code Editor</h1>

  <button
    onClick={() => setHelpOpen(true)}
    className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-3 rounded-md text-sm flex items-center"
  >
    Help
  </button>
</div>


     <div className="mb-6">
      <Editor
        height="300px"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value || "")}
        theme="vs-dark"
      />
</div>
<div className="flex justify-end gap-3">
     <button
    onClick={autoFix}
    className="mt-2 bg-yellow-500 text-black px-4 py-2 rounded flex items-center gap-2"
  >
    <WrenchIcon className="w-5 h-5" />
    Auto-Fix
  </button>
      <button
        onClick={runCode}
        className="mt-2 bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"
      >
        <PlayIcon className="w-5 h-5 text-white" />
        Run
      </button>
</div>
     <div className="mt-4 p-4 bg-black text-green-400 rounded min-h-[120px] overflow-auto max-w-full">
  <pre className="whitespace-pre-wrap break-all">
    {output}
  </pre>
</div>
<HelpPanel open={helpOpen} onClose={() => setHelpOpen(false)} />

    </div>
    
  );
}
