import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/common/Button";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import useWindowSize from "@/hooks/useWindowSize";

const Logo = ({ className }) => {
  return (
    <h1 className={`font-medium ${className}`}>
      {"Tech Sol"}
      <span className="text-dark-blue">{"."}</span>
    </h1>
  );
};

const MobileNavBar = ({ isScrolled, currentHash, navLinks, handleScroll }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const size = useWindowSize();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Close menu if the width decreases
  useEffect(() => {
    if (size?.width > 639 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [size, isMenuOpen]);

  // Disable background scroll when menu is opened
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`fixed left-0 right-0 top-0 mx-auto block w-full border border-transparent p-5 backdrop-blur-xl transition-all duration-300 sm:hidden ${
          isScrolled ? "border-b-gray" : ""
        }`}
      >
        <nav className={`flex justify-between`}>
          <Logo className={`rounded bg-primary px-2 text-lg text-white`} />

          <div className="flex gap-3">
            <Button
              text={"Get Started"}
              className={`rounded-xl bg-primary px-3 text-sm text-dark-blue hover:bg-primary/80`}
            />

            <Button icon={MdOutlineMenu} className={`p-1`} iconClassName={"size-5"} onClick={toggleMenu} />
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center backdrop-blur-xl">
          <Button icon={MdClose} className={"fixed right-5 top-5 p-1"} iconClassName={"size-6"} onClick={toggleMenu} />

          <div className="flex flex-col gap-7">
            <Logo className={`rounded bg-primary px-2 text-2xl text-white`} />

            <ul className="flex flex-col gap-3 text-center">
              {navLinks.map((link) => (
                <li
                  key={link.title}
                  className={`text-xl font-medium hover:text-dark-blue ${currentHash === link.path ? "text-dark-blue" : "text-grey-1"}`}
                >
                  <Link
                    to={link.path}
                    onClick={() => {
                      handleScroll(link.ref);
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavBar;
