"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    title: "FORESIDE FUND SERVICES, LLC (CRD#46106)",
    description1: "BROKER & INVESTMENT ADVISER",
    description2: "",
    date: "2023 - PRESENT",
  },
  {
    title: "ALPS DISTRIBUTORS, INC. (CRD# 16853)",
    description1: "DISTRBUTTS CRD# 44464)",
    description2: "BROKER & INVESTMENT ADVISER",
    date: "2015 - 2023",
  },
  {
    title: "HARTFORD SECURITIES DISTRIBUTION (CRD# 37819)",
    description2: "BROKER & INVESTMENT ADVISER",
    date: "2002 - 2015",
  },
  {
    title: "J.P. MORGAN SECURITIES LLC (CRD#:79)IRVINE, CA",
  },
  {
    title: "BARCLAYS CAPITAL INC. (CRD#:19714) LOS ANGELES, CA",
  },
  {
    title: "UBS FINANCIAL SERVICES INC. (CRD#:8174)LOS ANGELES, CA",
  },
  {
    title: "UBS FINANCIAL SERVICES INC. (CRD#:8174)LOS ANGELES, CA",
  },
  {
    title: "LEHMAN BROTHERS INC. (CRD#:7506) LOS ANGELES, CA",
  },
  {
    title: "MORGAN STANLEY (CRD#:7556) SALT LK CITY, UT",
  },
];

function ExperienceSection() {
  return (
    <div
      id="experience"
      className="flex flex-col py-1.25rem px-1.25rem md:px-6.25rem"
    >
      <h3 className="text-white text-center font-bold font-bricolageGrotesque text-5xl uppercase">
        EXPERIENCE
      </h3>
      <p className="text-white text-center text-xl">
        21 years experience working as a financial consultant and firms.
      </p>

      <div className="flex flex-col gap-8 mt-8">
        {experiences.map((ex, index) => (
          <Experience ex={ex} key={`experience_${index}`} />
        ))}
      </div>
    </div>
  );
}

function Experience({ ex }: { ex: (typeof experiences)[0] }) {
  const [showing, setShowing] = useState(false);
  return (
    <div>
      <div
        // onClick={() => setShowing(!showing)}
        className="bg-appBlue cursor-pointer h-auto md:h-[3rem] flex justify-between items-center text-xl p-3 text-white font-bricolageGrotesque rounded-md"
      >
        <h4>{ex.title}</h4>
        {showing ? (
          <Icon color="#fff" className="w-6 h-6" icon="gravity-ui:minus" />
        ) : (
          <Icon color="#fff" className="w-6 h-6" icon="akar-icons:plus" />
        )}
      </div>

      <AnimatePresence>
        {showing && (
          <motion.div
            initial={{
              y: -10,
            }}
            exit={{
              y: -10,
            }}
            animate={{
              y: 0,
              transition: { duration: 0.3 },
            }}
            className="bg-white rounded-md mt-2  p-3 text-white"
          >
            <h4 className="text-black font-inter text-lg">{ex.description1}</h4>
            <p className=" font-inter text-gray-500 text-sm">
              {ex.description2}
            </p>
            <p className="text-sm font-inter text-appBlue">{ex.date}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default ExperienceSection;
