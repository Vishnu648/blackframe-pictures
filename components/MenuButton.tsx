"use client";
import Link from "next/link";

import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

export default function MenuButton() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState(true);

  return (
    <div
      onClick={(prev) => setMenu(!prev)}
      className="cursor-pointer lg:hidden"
    >
      

      {menuOpen ?(
         <AiOutlineClose 
         onClick={() => {
             setMenuOpen((prev)=>(!prev));
             console.log(menuOpen);
             setMenu((prev)=>(!prev));
            console.log(menu)
           }}
         />
      ): (
        <RxHamburgerMenu
        onClick={() => {
            setMenuOpen((prev)=>(!prev));
            console.log(menuOpen);
            setMenu((prev)=>(!prev));
            console.log(menu)
          }}
        />
      )}

      {
        menu ? (
            <div className="h-10 w-10 flex flex-col">
                <p className="text-2xl">one</p>
                <p className="text-2xl">one</p>
                <p className="text-2xl">one</p>
                <p className="text-2xl">one</p>
            </div>
        )
        :null
      }
    </div>
  );
}
