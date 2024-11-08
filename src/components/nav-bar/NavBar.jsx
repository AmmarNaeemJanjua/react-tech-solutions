import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/common/Button";

const Logo = ({ className }) => {
  return (
    <h1 className={`font-medium ${className}`}>
      {"Tech Sol"}
      <span className="text-dark-blue">{"."}</span>
    </h1>
  );
};

const NavBar = ({ isScrolled, currentHash, navLinks, handleScroll }) => {
  return (
    <div
      className={`fixed left-0 right-0 top-0 mx-auto hidden border p-5 backdrop-blur-xl transition-all duration-300 sm:block ${
        isScrolled ? "mt-2 max-w-80 rounded-full border-gray-300 py-3" : "w-full border-transparent"
      }`}
    >
      <nav className={`flex ${isScrolled ? "justify-center" : "justify-between"}`}>
        <Logo className={`rounded bg-primary px-2 text-xl text-white ${isScrolled && "hidden"}`} />

        <div className="flex gap-4">
          <ul className="flex items-center gap-3">
            {navLinks.map((link) => (
              <li
                className={`text-base font-medium hover:text-dark-blue ${currentHash === link.path ? "text-dark-blue" : "text-grey-1"}`}
                key={link.title}
                onClick={() => handleScroll(link.ref)}
              >
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>

          <Button
            text={"Get Started"}
            className={`rounded-xl bg-primary px-3 text-sm text-dark-blue hover:bg-primary/80 ${isScrolled && "hidden"}`}
          />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
