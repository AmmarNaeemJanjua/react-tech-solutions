import React, { useEffect, useState } from "react";
import NavBar from "@/components/nav-bar/NavBar";
import MobileNavBar from "@/components/nav-bar/MobileNavBar";

const Header = ({ homeRef, aboutRef, servicesRef, contactRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [currentHash, setCurrentHash] = useState("#home");

  const navLinks = [
    { title: "Home", path: "#home", ref: homeRef },
    { title: "About Us", path: "#about", ref: aboutRef },
    { title: "Sevices", path: "#sevices", ref: servicesRef },
    { title: "Contact", path: "#contact", ref: contactRef },
  ];

  // Scroll to section
  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to update the path when a section is scrolled into view
  const updatePath = (currentSection) => {
    const sectionLink = navLinks.find((link) => link.ref === currentSection);
    if (sectionLink) {
      setCurrentHash(sectionLink.path);
      window.location.hash = sectionLink.path;
    }
  };

  // Scroll to the section based on URL hash on page load
  useEffect(() => {
    const hash = window.location.hash;
    const targetLink = navLinks.find((link) => link.path === hash);
    if (targetLink && targetLink.ref.current) {
      setCurrentHash(targetLink.path);
      handleScroll(targetLink.ref);
    }
  }, []);

  // Effect to detect scrolling and change URL path accordingly
  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Check which section is in view
      navLinks.forEach((link) => {
        const section = link.ref.current;
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            updatePath(link.ref);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <header>
      <NavBar isScrolled={isScrolled} currentHash={currentHash} navLinks={navLinks} handleScroll={handleScroll} />
      <MobileNavBar isScrolled={isScrolled} currentHash={currentHash} navLinks={navLinks} handleScroll={handleScroll} />
    </header>
  );
};

export default Header;
