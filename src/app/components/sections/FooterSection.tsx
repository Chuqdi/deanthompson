import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

function FooterSection() {

  return (
    <div>
      <div className="bg-black flex justify-between items-center px-1.25rem md:px-6.25rem py-1.5">
        <h3 className="text-white font-bricolageGrotesque text-2xl">Dean Hurst Thompson</h3>

        <p className="text-sm text-gray-300  font-inter">@copyright 2024</p>
      </div>
    </div>
  );
}

export default FooterSection;
