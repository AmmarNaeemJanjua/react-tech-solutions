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
    <div className="bg-background">
      <Header homeRef={homeRef} aboutRef={aboutRef} servicesRef={servicesRef} contactRef={contactRef} />

      <div ref={homeRef} className="h-screen">
        <HomeSection />
      </div>

      <div ref={aboutRef} className="h-screen">
        <AboutSection />
      </div>

      <div ref={servicesRef} className="h-screen">
        <ServicesSection />
      </div>

      <div ref={contactRef} className="h-screen">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default index;
