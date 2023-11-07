import Image from "next/image";
import React from "react";

export default function ManipulationWorks() {
  return (
    <div style={{fontFamily:'MyCustomFont',letterSpacing:'2px'}} className=" w-full p-6 ">
      <h1 className="text-5xl">Manipulation Works </h1>

      <div
        className="border border-black h-[400px] w-full overflow-x-scroll rounded-xl flex items-center justify-around mt-6"
        style={{ flex: "0 0 auto" }}
      >
        <div
          className="h-[380px] w-[300px] rounded-xl flex justify-around gap-2 border border-black"
          style={{ flex: "0 0 auto" }}
        >
          <img
            src="/dr-strange-momdns.png"
            alt="ds"
            height={"100%"}
            width={"100%"}
            style={{ flex: "0 0 auto" }}
            className="rounded-xl object-cover"
          />
          <img
            src="/dr-strange-momdns.png"
            alt="ds"
            height={"100%"}
            width={"100%"}
            style={{ flex: "0 0 auto" }}
            className="rounded-xl object-cover"
          />
          <img
            src="/dr-strange-momdns.png"
            alt="ds"
            height={"100%"}
            width={"100%"}
            style={{ flex: "0 0 auto" }}
            className="rounded-xl object-cover"
          />
          <img
            src="/dr-strange-momdns.png"
            alt="ds"
            height={"100%"}
            width={"100%"}
            style={{ flex: "0 0 auto" }}
            className="rounded-xl object-cover"
          />
          <img
            src="/dr-strange-momdns.png"
            alt="ds"
            height={"100%"}
            width={"100%"}
            style={{ flex: "0 0 auto" }}
            className="rounded-xl object-cover"
          />
          <img
            src="/dr-strange-momdns.png"
            alt="ds"
            height={"100%"}
            width={"100%"}
            style={{ flex: "0 0 auto" }}
            className="rounded-xl object-cover"
          />
          <img
            src="/dr-strange-momdns.png"
            alt="ds"
            height={"100%"}
            width={"100%"}
            style={{ flex: "0 0 auto" }}
            className="rounded-xl object-cover"
          />
          <img
            src="/dr-strange-momdns.png"
            alt="ds"
            height={"100%"}
            width={"100%"}
            style={{ flex: "0 0 auto" }}
            className="rounded-xl object-cover"
          />
          <img
            src="/dr-strange-momdns.png"
            alt="ds"
            height={"100%"}
            width={"100%"}
            style={{ flex: "0 0 auto" }}
            className="rounded-xl object-cover"
          />
          <img
            src="/dr-strange-momdns.png"
            alt="ds"
            height={"100%"}
            width={"100%"}
            style={{ flex: "0 0 auto" }}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
      <div className=" object-cover border border-green-400  rounded-xl mt-1">
        <img
          src="/mcuCinematicUniverse.jpg"
          alt="mcu"
          className="rounded-xl"
          height={'100%'}
          width={'100%'}
          style={{border:'2px solid red'}}
        ></img>
      </div>
    </div>
  );
}
