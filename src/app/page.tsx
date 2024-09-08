import Image from "next/image";
import BannerSection from "./components/sections/BannerSection";
import ResumeSection from "./components/sections/ResumeSection";
import ContactMeSection from "./components/sections/ContactMeSection";
import TestmoniesSection from "./components/sections/TestmoniesSection";
import FooterSection from "./components/sections/FooterSection";
import ExperienceSection from "./components/sections/ExperienceSection";

export default function Home() {
  return (
    <main className=" bg-black">
      <BannerSection />
      <ResumeSection />
      <ExperienceSection />
      <TestmoniesSection />
      <ContactMeSection />
      <FooterSection />
    </main>
  );
}
