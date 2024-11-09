import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedin size={24} /> },
  { name: "Twitter", url: "https://twitter.com", icon: <FaTwitter size={24} /> },
];

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-5 text-white">
      <div className="flex flex-col items-center justify-between">
        <div className="mb-4 flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="text-sm">© 2024 Tech Solution. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
