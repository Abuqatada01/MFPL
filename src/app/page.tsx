import CertificatesMarquee from "@/components/Certificates";
import HeroSlider from "@/components/Hero";
import OrderSteps from "@/components/OrderSteps";
import OurProducts from "@/components/OurProducts";
// import OurBlogs from "@/components/OurBlogs";
import WhyChooseWater from "@/components/Process";
import ConsultationSection from "@/components/Request";
import OurServicesSection from "@/components/Services";
import StatsTestimonialSection from "@/components/Stats";
import AboutUs from "@/components/About-Us";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSlider />
      <AboutUs />
      <OurServicesSection />
      <CertificatesMarquee />
      <OurProducts />
      <WhyChooseWater />
      <OrderSteps />
      <StatsTestimonialSection />
      <ConsultationSection />
      {/* <OurBlogs /> */}
    </div>
  );
}
