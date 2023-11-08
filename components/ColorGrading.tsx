import React from "react";
import CompareImg from "./CompareImg";

export default function ColorGrading() {
  return (
    <div className="w-full p-6 border-2 ">
      <h1 className="text-5xl mb-6">COLOR GRADING (DI) </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 content-between p-6">

      <div className="bg-gray-600 rounded-md" style={{aspectRatio:'16/9'}}>
          <CompareImg/>
        </div>
        <div className="bg-gray-600 rounded-md" style={{aspectRatio:'16/9'}}>
          <CompareImg/>
        </div>
        <div className="bg-gray-600 rounded-md" style={{aspectRatio:'16/9'}}>
          <CompareImg/>
        </div>
        <div className="bg-gray-600 rounded-md" style={{aspectRatio:'16/9'}}>
          <CompareImg/>
        </div>
               
      </div>
    </div>
  );
}