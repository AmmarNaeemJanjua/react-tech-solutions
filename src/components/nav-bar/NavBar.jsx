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
      className={`fixed left-0 right-0 top-0 mx-auto hidden border backdrop-blur-xl sm:block ${
        isScrolled
          ? "mt-2 max-w-80 rounded-full border-grey py-3"
          : "w-full border-transparent p-5 sm:px-12 md:px-20 lg:px-14 xl:px-44 2xl:px-[11.4%]"
      }`}
    >
      <nav className={`flex ${isScrolled ? "justify-center" : "justify-between"}`}>
        <Logo className={`rounded bg-primary px-2 text-xl text-white ${isScrolled && "hidden"}`} />

        <div className="flex gap-4">
          <ul className="flex items-center gap-3">
            {navLinks.map((link) => (
              <li
                className={`text-base font-medium hover:text-primary ${currentHash === link.path ? "text-primary" : "text-grey-1"}`}
                key={link.title}
                onClick={() => handleScroll(link.ref)}
              >
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>

          <Button
            text={"Get Started"}
            className={`rounded-xl bg-primary px-3 text-sm text-white hover:bg-blue-600 ${isScrolled && "hidden"}`}
          />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
