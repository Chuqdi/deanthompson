"use client";
import { BREAKING_POINT } from "@/app/config";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import useNavbar from "../hooks/useNavbar";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";

function Main () {
  const isMobile = useMediaQuery({ maxWidth: BREAKING_POINT });
  const navbarOptions = useNavbar();
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  return (
    <div className="flex justify-between items-center px-1.25rem md:px-6.25rem h-[7rem] -b-[1px] border-b-[#ffffffb8] ">
      <h4 className="text-white font-bricolageGrotesque text-2xl">
        DEAN .H. THOMPSON
      </h4>
      {isMobile ? (
        <button onClick={()=> setShowMobileNavbar(true)}>
          <Icon color="#fff" className="w-12 h-12" icon="pajamas:hamburger" />
        </button>
      ) : (
        <div className="flex items-center gap-4">
          {navbarOptions.map((option, index) => (
            <Link
              className="text-white font-inter text-base hover:text-appBlue"
              key={`navbar_options_${index}`}
              href={option.link}
            >
              {option.label}
            </Link>
          ))}
        </div>
      )}

     {
      showMobileNavbar &&  <MobileNavbar close={() => setShowMobileNavbar(false)} />
     }
    </div>
  );
}


export default Main;