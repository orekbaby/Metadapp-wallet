import React from "react";
import "./globals.css";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import Table from "./Table";
import {TimesIcon,CopyIcon} from "./IconsFile";

export default function Home() {
  return (
    <main className="" style={{ marginLeft: 0, padding: 0 }}>
      {/* navigation top */}
    <Navigation /> 

      {/* sidebar */}
      <div className="flex max-w-7-xl mx-auto ">
     <Sidebar />

        {/* main section for contents */}
        <div style={{ flex: 1, padding: "15" }}>
          <section>
            <h1 className="text-[27] leading-[35.1px] font-bold mb-5 ">
              My Wallet
            </h1>

            {/* Wallet section */}
            <div className="w-[500px] h-[150px] p-[10px] rounded-[8px] border-[1px] border-[#212E40]">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-span bg-[#063172] gap-6">
                  <span className="Weight 600 Size 14px Line height 23.8px  ">
                    Wallet
                  </span>
                  <div>
                    <TimesIcon />
                  </div>
                </div>
                <p className="button2 rounded text-[14px] leading-[23.8px]">Create Wallet</p>
               </div>
              <div>
                <h2
                  className="text-1xl font-bold font-family: Instrument Sans;
font-size: 14px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
"
                >
                  Wallet Balance: $576.77
                </h2>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p
                    className="//styleName: Paragraph & Body/Body Normal;
font-family: Instrument Sans;
font-size: 16px;
font-weight: 400;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
"
                  >
                    0xyrefghhfdsssdfghnnnnbvc21ftgygttyuhu
                  </p>
                  <CopyIcon />
                </div>
                <div className="flex items-center gap-3">
                  <p className="sec-btn">Send</p>
                  <p className="sec-btn">Settings</p>
                </div>
              </div>
            </div>
            {/* Headings h3 */}
            <div className="h3-styles flex bg-[#161F2C]  text-[#E7E7E7] gap-28 px-3 py-2 w-[1276px] h-[53] rounded-8 mt-12 mb-5">
              <div className="bg-[#084298] px-1 py-1">
                <h3 className="text[16px] font-bold leading-[21px] text-center">
                  TOKEN HOLDINGS
                </h3>
              </div>

              <div>
                <h3>WALLET PERFORMANCE</h3>
              </div>
              <div>
                <h3>TX HISTORY</h3>
              </div>
            </div>
            {/* Paragraph styles heading and table */}
          <Table />
          </section>
        </div>
      </div>
    </main>
  );
}
