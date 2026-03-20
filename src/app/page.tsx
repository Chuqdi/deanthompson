import Image from "next/image";
import BannerSection from "./components/sections/BannerSection";
import ResumeSection from "./components/sections/ResumeSection";
import ContactMeSection from "./components/sections/ContactMeSection";
import TestmoniesSection from "./components/sections/TestmoniesSection";
import FooterSection from "./components/sections/FooterSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import CertificationSection from "./components/sections/CertificationSection";

export default function Home() {
  return (
    <main className=" bg-black">
      <BannerSection />
      <ResumeSection />
      <ExperienceSection />
      <TestmoniesSection />
      <CertificationSection />
      <ContactMeSection />
      <FooterSection />
    </main>
  );
}
