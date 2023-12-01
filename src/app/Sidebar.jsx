import React from 'react'
import hoverText from "../../public/Images/Hovering Text 01.png";
import accountBalance from "../../public/Images/account-balance.png";
import vector from "../../public/Images/vector.png";
import payments from "../../public/Images/payments.png";
import message from "../../public/Images/message.png";
import settings from "../../public/Images/settings.png";
import { TimesIcon, HomeIcon, } from "./IconsFile";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "80px",
        height: "100vh",
        backgroundColor: "#0B0F16",
        padding: "5px",
        margin: "0",
        flexShrink: "0",
      }}
    >
      <div className="flex flex-col gap-10 items-center justify-center mb-10">
        <div>
          <HomeIcon />
        </div>
        <div className="flex flex-col items-center py-6 border-y-2 border-[#212E40] w-full">
          <div className="mb-10">
            <Image src={hoverText} width={12} height={8} />
          </div>
          <div>
            <Image src={hoverText} width={12} height={8} />
          </div>
        </div>
        <div className=" pb-2">
          <Image src={accountBalance} width={12} height={8} />
        </div>
        <div className=" pb-2">
          <Image src={payments} width={12} height={8} />
        </div>
        <div className=" pb-2">
          <Image src={vector} width={12} height={8} />
        </div>
        <div className=" pb-2">
          <Image src={settings} width={12} height={8} />
        </div>
        <div className=" pb-2">
          <TimesIcon className="w-[12 h-[8]" />
        </div>
        <div className=" pb-2">
          <Image src={message} width={12} height={8} />
        </div>
      </div>
    </div>
  );
}
export {Sidebar};