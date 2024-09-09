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
        EXPERIENCE AND FIRMS
      </h3>
      <p className="text-white text-center text-base">
        I{"'"}m Dean Hurst Thompson, a financial advisor With over 24 years of
        experience in financial consulting, digital assets management, and
        stockbroking for some of the most prestigious firms on Wall Street, I
        bring a wealth of expertise to help clients achieve financial success.
        My extensive research and carefully crafted strategies have consistently
        delivered exceptional results across all market conditions. In 2016, I
        pioneered a tailored investment program for private investors, focusing
        on emerging markets and innovative financial solutions. This program has
        been a cornerstone in my clients' portfolios, boasting a remarkable 99%
        success rate. My commitment to transparency, ethical practices, and
        personalized service has enabled me to help over 1,000 individuals build
        and safeguard their financial futures, transforming their dreams into
        reality. Whether you're looking to grow your wealth, diversify your
        portfolio, or secure a more prosperous future, I offer a proven track
        record of delivering results. My passion for financial success goes
        beyond numbers—it's about empowering my clients with the knowledge and
        confidence to thrive in an ever-changing financial landscape.
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
