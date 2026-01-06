import CertificatesMarquee from "@/components/Certificates";
import HeroSlider from "@/components/Hero";
import OrderSteps from "@/components/OrderSteps";
import OurProducts from "@/components/OurProducts";

import ConsultationSection from "@/components/Form";
import OurServicesSection from "@/components/Services";
import StatsTestimonialSection from "@/components/Stats";
import AboutUs from "@/components/About-Us";

import Image from "next/image";
import OurProcess from "../components/Process";

export default function Home() {
  return (
    <div className="">
      <HeroSlider />
      <AboutUs />
      <OurServicesSection />
      <CertificatesMarquee />
      <OurProducts />
      <OurProcess />
      <OrderSteps />
      <StatsTestimonialSection />
      <ConsultationSection />
      {/* <OurBlogs /> */}
    </div>
  );
}
