import Image from "next/image";
import Link from "next/link";
import MenuButton from "./MenuButton";


export default function Navbar() {
  return (
    <nav
      style={{ fontFamily: "MyCustomFont" }}
      className="h-[80px] mt-4 w-full flex justify-between items-center pr-6 text-4xl bg-white text-[#2a2a2a]"
    >
      <img
        src="/onlyLogo.png"
        alt="Logo"
        width={100}
        className="w-[120px] flex items-center justify-center mt-[20px] text-left"
      />

      <div
        style={{ fontFamily: "ariel", fontSize: "30px" }}
        className="lg:flex lg:w-[50%] hidden lg:justify-around"
      >
        <Link href="#">What we Do</Link>
        <Link href="#">Price</Link>
        <Link href="#">Preset</Link>
        <Link href="#">contact</Link>
      </div>

      <h2 style={{ letterSpacing: "4px" }} className="text-3xl md:text-5xl">
        BLACKFRAME PICTURES
      </h2>

      <MenuButton/>      
    </nav>
  );
}
