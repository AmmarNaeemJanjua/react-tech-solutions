import React, { useRef } from "react";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

const index = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="bg-background">
      <Header homeRef={homeRef} aboutRef={aboutRef} servicesRef={servicesRef} contactRef={contactRef} />

      <div ref={homeRef} className="h-screen bg-slate-500">
        <h2>Home</h2>
      </div>

      <div ref={aboutRef} className="h-screen bg-amber-200">
        <h2>About Us</h2>
      </div>

      <div ref={servicesRef} className="h-screen bg-zinc-400">
        <h2>Services</h2>
      </div>

      <div ref={contactRef} className="h-screen">
        <h2>Contact</h2>
      </div>

      <Footer />
    </div>
  );
};

export default index;
