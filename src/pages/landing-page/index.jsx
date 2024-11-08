import React, { useRef } from "react";
import Header from "@/layouts/Header";

const index = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
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
    </>
  );
};

export default index;
