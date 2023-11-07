import React from "react";

export default function ColorGrading() {
  return (
    <div className="h-[1200px] w-full p-6 border-2 ">
      <h1 className="text-5xl mb-6">COLOR GRADING (DI) </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
        <div className="flex justify-center items-center h-96 w-full md:bg-blue-500 bg-red-100"> </div>
        <div className="flex justify-center items-center h-96 w-full md:bg-blue-500 bg-red-100"> color </div>
        <div className="flex justify-center items-center h-96 w-full md:bg-blue-500 bg-red-100"> color </div>
        <div className="flex justify-center items-center h-96 w-full md:bg-blue-500 bg-red-100"> color </div>
      </div>
    </div>
  );
}
