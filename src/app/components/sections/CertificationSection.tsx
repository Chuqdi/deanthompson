import React from "react";

function CertificationSection() {
  return (
    <div
      id="certification"
      className="px-1.25rem md:px-6.25rem pb-6.25rem gap-12 flex flex-col py-6.25rem"
    >
      <div>
        <h5 className="text-white text-center font-bold font-bricolageGrotesque text-5xl uppercase">
          Certifications
        </h5>
        <h3 className="text-center text-white font-inter w-full md:w-2/5 mx-auto">The certifications below represent my training and verified knowledge in financial markets, trading strategies, risk management, and market analysis.</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        <img
          src="/images/certifications/first.jpeg"
          className="flex-1 h-auto"
        />
        <img
          src="/images/certifications/second.jpeg"
          className="flex-1 h-auto"
        />
      </div>
    </div>
  );
}

export default CertificationSection;
