import React from 'react'
import metadappLogo from "../../public/Images/metadapplogo.png";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {NotificationIcon} from "./IconsFile";

export default function Navigation() {
  return (
    <div
      style={{
        display: "flex",
        height: "82px",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#0B0F16",
        alignItems: "center", // Center items vertically
      }}
    >
      <div className=" pl-2 mb-5">
        <Image
          className="items-center justify-center"
          src={metadappLogo}
          width={44}
          height={64}
        />
      </div>
      <div className="flex gap-6 items-center">
        <div className="" style={{ marginRight: "26" }}>
          <NotificationIcon />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar>
            <AvatarImage src="images/avatar.png" width={32} height={32}  />
          </Avatar>
        </div>
      </div>
    </div>
  );
}
export {Navigation};