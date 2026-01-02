import HeroSlider from "@/components/Hero";
import OurBlogs from "@/components/OurBlogs";
import ConsultationSection from "@/components/Request";
import OurServicesSection from "@/components/Services";
import StatsTestimonialSection from "@/components/Stats";
import Support from "@/components/Support";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSlider />
      <Support />
      <OurServicesSection />
      <ConsultationSection />
      <StatsTestimonialSection />
      <OurBlogs />
    </div>
  );
}
