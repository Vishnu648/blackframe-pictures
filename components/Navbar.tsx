import Image from "next/image";

export default function Navbar() {
  return (
    <nav style={{fontFamily:'MyCustomFont'}} className="h-[80px] mt-4 w-full flex justify-between items-center pr-10 text-4xl bg-white text-[#2a2a2a]">
         <img
              src="/onlyLogo.png"
              alt="Logo"
              width={100}
              className="w-[120px] flex items-center justify-center mt-[20px] text-left"
            />

            <h2 style={{letterSpacing:'4px'}} className="text-5xl">BLACKFRAME PICTURES</h2>
            

    </nav>
  )
}
