"use client";

import { Tab, TabList } from "@/app/assets/constants/constant";
import Base64ImageTab from "@/app/component/base64-image/base64-image.component";
import Base64Tab from "@/app/component/base64/base64.component";
import JSONFormatTab from "@/app/component/json-format/json-format.component";
import MD5ConverterTab from "@/app/component/md5-converter/md5-converter.component";
import { useState } from "react";

const TabContainer = () => {
  const [currentTab, setCurrentTab] = useState(Tab.Base64.value);

  const handleTab = (tab: string) => {
    switch (tab) {
      case Tab.Base64.value:
        return <Base64Tab />;
      case Tab.Base64Image.value:
        return <Base64ImageTab />;
      case Tab.JsonFormat.value:
        return <JSONFormatTab />;
      case Tab.Md5Converter.value:
        return <MD5ConverterTab />;

      default:
        return "";
    }
  };

  const onChangeTab = (newTab: string) => {
    setCurrentTab(newTab);
  };

  return (
    <div className="flex flex-col gap-6 my-8">
      <div className="flex gap-6 justify-center text-lg">
        {TabList.map((tab) => (
          <div
            className={`cursor-pointer ${
              tab.value === currentTab && "border-b-[1px] border-b-fuchsia-400"
            }`}
            onClick={() => onChangeTab(tab.value)}
          >
            {tab.name}
          </div>
        ))}
      </div>

      <div className="">{handleTab(currentTab)}</div>
    </div>
  );
};

export default TabContainer;
