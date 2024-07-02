"use client";

import { useState } from "react";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { BsCheckAll } from "react-icons/bs";

interface CopyButtonProps {
  value?: string;
}

const CopyButton = (props?: CopyButtonProps) => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div
      onClick={() => {
        setIsCheck(true);
        navigator.clipboard.writeText(props?.value || "");
      }}
      className="w-10 h-10 rounded-full bg-fuchsia-600 flex justify-center items-center text-xl font-semibold hover:bg-fuchsia-800 cursor-pointer text-white"
    >
      {isCheck ? <BsCheckAll /> : <HiOutlineClipboardDocument />}
    </div>
  );
};

export default CopyButton;
