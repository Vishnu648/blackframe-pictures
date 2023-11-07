"use client"
import React from "react";
import { ImgComparisonSlider } from "@acf-comparison-slider/react";

export default function CompareImg() {
  return (
    <div style={{height:'100%',width:'100%',objectFit:'cover',border:'2px solid red'}}>
      <ImgComparisonSlider  style={{height:'100%',width:'100%',objectFit:'cover',outline:'none'}}>
        <img
          slot="first"
          src="https://img-comparison-slider.sneas.io/demo/images/before.webp"
        />
        <img
          slot="second"
          src="https://img-comparison-slider.sneas.io/demo/images/after.webp"
        />
      </ImgComparisonSlider>
    </div>
  );
}
