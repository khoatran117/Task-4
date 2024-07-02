"use client";

import { Base64Mode, Base64ModeList } from "@/app/assets/constants/constant";
import InputArea from "@/app/ui/input-area/input-area.component";
import nextBase64 from "next-base64";
import { useState } from "react";

const Base64Tab = () => {
  const [inputTxt, setInputTxt] = useState("");
  const [mode, setMode] = useState(Base64Mode.Decode.value);

  const changeInput = (e?: string) => {
    e !== undefined && setInputTxt(e);
  };

  const encodeTxt = (inputString?: string) => {
    return inputString ? nextBase64.encode(inputString) : "";
  };

  const decodeTxt = (inputString?: string) => {
    return inputString ? nextBase64.decode(inputTxt) : "";
  };

  const handleOutput = (inputString?: string) => {
    try {
      switch (mode) {
        case Base64Mode.Decode.value:
          return decodeTxt(inputString);
        case Base64Mode.Encode.value:
          return encodeTxt(inputString);
        default:
          return "";
      }
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center my-5 gap-10">
      <div className="flex font-semibold cursor-pointer">
        {Base64ModeList?.map((e) => (
          <div
            className={`px-3 py-1 ${
              mode === e.value ? "bg-mauve" : "bg-ebony"
            } rounded`}
            onClick={() => setMode(e.value)}
          >
            {e.name}
          </div>
        ))}
      </div>

      <div className="flex gap-5 justify-center">
        <InputArea
          value={inputTxt}
          onChange={(e) => changeInput(e)}
          hasCopyButton
        />
        <InputArea
          value={handleOutput(inputTxt)}
          disabled
          hasCopyButton
          placeHolder="Kết quả"
        />
      </div>
    </div>
  );
};

export default Base64Tab;
