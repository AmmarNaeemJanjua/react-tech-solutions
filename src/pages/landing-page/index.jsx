import React, { useRef } from "react";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import HomeSection from "@/components/landing-page/home-section";
import AboutSection from "@/components/landing-page/about-section";
import ServicesSection from "@/components/landing-page/services-section";
import ContactSection from "@/components/landing-page/contact-section";

const index = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header homeRef={homeRef} aboutRef={aboutRef} servicesRef={servicesRef} contactRef={contactRef} />

      <div ref={homeRef} className="h-screen bg-hero-img bg-cover sm:bg-center">
        <HomeSection />
      </div>

      <div ref={aboutRef} className="bg-gray-100">
        <AboutSection />
      </div>

      <div ref={servicesRef} className="bg-white">
        <ServicesSection />
      </div>

      <div ref={contactRef} className="bg-contact-img bg-cover sm:bg-center">
        <ContactSection />
      </div>

      <Footer />
    </>
  );
};

export default index;
