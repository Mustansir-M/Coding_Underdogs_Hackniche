import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

const DashboardStackgroupsix = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="!w-[216px] absolute h-[216px] inset-[0] justify-center m-auto overflow-visible">
          <svg style={{ height: 0, width: 0 }}>
            <defs>
              <linearGradient id="linear-gradient-69_123_1149_406_216_216">
                <stop key="0" offset="0" stopColor="#347ae2" />
                <stop key="1" offset="1" stopColor="#e6eeff" />
              </linearGradient>
            </defs>
          </svg>
          <CircularProgressbar
            className="!w-[216px] absolute h-[216px] inset-[0] justify-center m-auto overflow-visible"
            value={78}
            strokeWidth={6}
            styles={{
              trail: { strokeWidth: 6, stroke: "#e6edff" },
              path: {
                strokeLinecap: "square",
                height: "100%",
                transformOrigin: "center",
                transform: "rotate(90deg)",
                stroke: "url(#linear-gradient-69_123_1149_406_216_216)",
              },
            }}
          ></CircularProgressbar>
        </div>
        <div className="!w-[172px] absolute h-[172px] inset-[0] justify-center m-auto overflow-visible">
          <svg style={{ height: 0, width: 0 }}>
            <defs>
              <linearGradient id="linear-gradient-69_123_1170_427_172_172">
                <stop key="0" offset="0" stopColor="#ff9500" />
                <stop key="1" offset="0.98" stopColor="#e6eeff" />
              </linearGradient>
            </defs>
          </svg>
          <CircularProgressbar
            className="!w-[172px] absolute h-[172px] inset-[0] justify-center m-auto overflow-visible"
            value={72}
            strokeWidth={6}
            styles={{
              trail: { strokeWidth: 6, stroke: "#e6edff" },
              path: {
                strokeLinecap: "square",
                height: "100%",
                transformOrigin: "center",
                transform: "rotate(90deg)",
                stroke: "url(#linear-gradient-69_123_1170_427_172_172)",
              },
            }}
          ></CircularProgressbar>
        </div>
        <div className="!w-[127px] absolute h-[127px] inset-[0] justify-center m-auto overflow-visible">
          <svg style={{ height: 0, width: 0 }}>
            <defs>
              <linearGradient id="linear-gradient-69_123_1193_450_127_127">
                <stop key="0" offset="0.02" stopColor="#34c759" />
                <stop key="1" offset="1" stopColor="#e6eeff" />
              </linearGradient>
            </defs>
          </svg>
          <CircularProgressbar
            className="!w-[127px] absolute h-[127px] inset-[0] justify-center m-auto overflow-visible"
            value={64}
            strokeWidth={6}
            styles={{
              trail: { strokeWidth: 6, stroke: "#e6edff" },
              path: {
                strokeLinecap: "square",
                height: "100%",
                transformOrigin: "center",
                transform: "rotate(90deg)",
                stroke: "url(#linear-gradient-69_123_1193_450_127_127)",
              },
            }}
          ></CircularProgressbar>
        </div>
      </div>
    </>
  );
};

DashboardStackgroupsix.defaultProps = {};

export default DashboardStackgroupsix;
