"use client";

import CopyButton from "@/app/ui/copy-button/copy-button.componenent";
import InputArea from "@/app/ui/input-area/input-area.component";
import { useState } from "react";

const JSONFormatTab = () => {
  const [inputJSON, setInputJSON] = useState("");

  const changeInput = (e?: string) => {
    e !== undefined && setInputJSON(e);
  };

  const handleOutput = () => {
    try {
      return JSON.stringify(JSON.parse(inputJSON), null, "\t");
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center my-5 gap-10">
      <div className="flex gap-5 justify-center">
        <InputArea
          value={inputJSON}
          onChange={(e) => changeInput(e)}
          hasCopyButton
        />

        <div className="relative w-[500px] h-[280px] bg-contain bg-no-repeat bg-center bg-white rounded text-black whitespace-pre p-2 overflow-y-auto">
          {handleOutput()}

          <div className="absolute bottom-3 right-3">
            <CopyButton value={handleOutput()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSONFormatTab;
