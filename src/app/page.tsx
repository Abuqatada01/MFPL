import HeroSlider from "@/components/Hero";
import OurServicesSection from "@/components/Services";
import Support from "@/components/Support";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSlider />
      <Support />
      <OurServicesSection />
    </div>
  );
}
