"use client";

import InputArea from "@/app/ui/input-area/input-area.component";
import { useState } from "react";

const Base64ImageTab = () => {
  const [inputBase64, setInputTxt] = useState("");

  const changeInput = (e?: string) => {
    e !== undefined && setInputTxt(e);
  };

  const handleOutput = () => {
    try {
      return `url(${inputBase64})`;
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center my-5 gap-10">
      <div className="flex gap-5 justify-center">
        <InputArea
          value={inputBase64}
          onChange={(e) => changeInput(e)}
          hasCopyButton
        />

        <div
          className="w-[500px] h-[280px] bg-contain bg-no-repeat bg-center bg-white rounded"
          style={{
            backgroundImage: handleOutput(),
          }}
        />
      </div>
    </div>
  );
};

export default Base64ImageTab;
