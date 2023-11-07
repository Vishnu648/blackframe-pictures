import Image from "next/image";
import {
  Navbar,
  Hero,
  ManipulationWorks,
  ColorGrading,
  CopyRight
} from "../components/index";

export default function Home() {
  return (
    <main style={{fontFamily:'MyCustomFont',letterSpacing:'3px'}} className="flex min-h-screen flex-col justify-center items-center gap-6">
      <Navbar />
      <Hero />
      <ManipulationWorks />
      <ColorGrading />
      <CopyRight/>
    </main>
  );
}
