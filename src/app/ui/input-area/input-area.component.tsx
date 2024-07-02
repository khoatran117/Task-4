"use client";

import CopyButton from "@/app/ui/copy-button/copy-button.componenent";
import { Input } from "antd";
const { TextArea } = Input;

interface TextAreaProps {
  value?: string;
  onChange?: (e?: string) => void;
  disabled?: boolean;
  hasCopyButton?: boolean;
  placeHolder?: string;
}

const InputArea = (props?: TextAreaProps) => {
  return (
    <div className="relative">
      <div
        className={`relative w-[500px] ${
          props?.disabled && "pointer-events-none"
        }`}
      >
        <TextArea
          value={props?.value}
          onChange={(e) => props?.onChange && props?.onChange(e?.target?.value)}
          placeholder={props?.placeHolder || "Nhập dữ liệu"}
          size="middle"
          style={{
            height: 280,
            resize: "none",
          }}
        />
      </div>

      {props?.hasCopyButton && (
        <div className="absolute bottom-3 right-3">
          <CopyButton value={props?.value} />
        </div>
      )}
    </div>
  );
};

export default InputArea;
