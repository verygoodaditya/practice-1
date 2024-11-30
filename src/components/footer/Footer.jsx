import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[50px] flex text-[14px] items-center justify-between">
      <div>@2024 JC. All rights reserved</div>
      <div className="flex items-center gap-[10px]">
        <div className="w-[15px] h-[15px] relative">
          <Image
            className="opacity-[0.6]"
            src="/1.png"
            fill={true}
            alt="lan day"
          />
        </div>
        <div className="w-[15px] h-[15px] relative">
          <Image
            className="opacity-[0.6]"
            src="/2.png"
            fill={true}
            alt="lan day"
          />
        </div>
        <div className="w-[15px] h-[15px] relative">
          <Image
            className="opacity-[0.6]"
            src="/3.png"
            fill={true}
            alt="lan day"
          />
        </div>
        <div className="w-[15px] h-[15px] relative">
          <Image
            className="opacity-[0.6]"
            src="/4.png"
            fill={true}
            alt="lan day"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
