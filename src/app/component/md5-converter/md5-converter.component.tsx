"use client";

import InputArea from "@/app/ui/input-area/input-area.component";
import { useState } from "react";
import md5 from "md5";

const MD5ConverterTab = () => {
  const [inputMD5, setInputMD5] = useState("");

  const changeInput = (e?: string) => {
    e !== undefined && setInputMD5(e);
  };

  const handleOutput = () => {
    try {
      return inputMD5 ? md5(inputMD5) : "";
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center my-5 gap-10">
      <div className="flex gap-5 justify-center">
        <InputArea
          value={inputMD5}
          onChange={(e) => changeInput(e)}
          hasCopyButton
        />

        <InputArea
          value={handleOutput()}
          disabled
          hasCopyButton
          placeHolder="Kết quả"
        />
      </div>
    </div>
  );
};

export default MD5ConverterTab;
