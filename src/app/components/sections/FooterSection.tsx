import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

function FooterSection() {
  const socials = [
    {
      icon: "logos:facebook",
      link: "",
    },
    {
      icon: "skill-icons:instagram",
      link: "",
    },
    {
        icon:"prime:twitter",
        link:""
    }
  ];
  return (
    <div className="w-full">
      <div className="bg-black w-full flex justify-center items-center gap-8 h-[7rem] border-b-[1px] border-b-[#5f5f5f]">
        {socials.map((social, index) => (
          <Link key={`social_link_${index}`} href={social.link}>
            <Icon color="#fff" icon={social.icon} className="w-12 h-12 hover:scale-110 transition-all" />
          </Link>
        ))}
      </div>
      <div className="bg-black flex justify-between items-center px-1.25rem md:px-6.25rem py-1.5">
        <h3 className="text-white font-bricolageGrotesque text-2xl">Dean Hurst Thompson</h3>

        <p className="text-sm text-gray-300  font-inter">@copyright 2024</p>
      </div>
    </div>
  );
}

export default FooterSection;
