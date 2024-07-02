import Base64ImageTab from "@/app/component/base64-image/base64-image.component";
import Base64Tab from "@/app/component/base64/base64.component";
import JSONFormatTab from "@/app/component/json-format/json-format.component";
import MD5ConverterTab from "@/app/component/md5-converter/md5-converter.component";
import TabContainer from "@/app/component/tab-container/tab-container.component";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-fiord w-screen min-h-screen py-3">
      <div className="text-center text-2xl text-white font-bold">
        Decode 64 base
      </div>
      <div className="text-center text-xl text-white">
        Decode 64 base - Simplifying Data Encoding and Decoding
      </div>

      <TabContainer />
    </div>
  );
}
