import React from "react";
import { FaLaptopCode, FaMobileAlt, FaBullhorn } from "react-icons/fa";
import ServicesCard from "./common/ServicesCard";

const services = [
  {
    title: "Web Development",
    description: "We build responsive, high-quality websites tailored to your business needs.",
    icon: <FaLaptopCode size={40} className="text-primary" />,
  },
  {
    title: "Mobile App Development",
    description: "Create intuitive, user-friendly mobile apps for iOS and Android platforms.",
    icon: <FaMobileAlt size={40} className="text-primary" />,
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence with our expert digital marketing strategies.",
    icon: <FaBullhorn size={40} className="text-primary" />,
  },
];

const index = () => {
  return (
    <section className="px-5 py-16 sm:px-12 md:px-20 lg:px-14 xl:px-44 2xl:px-[11.4%]">
      <div className="text-center">
        <h2 className="mb-8 text-3xl font-semibold text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServicesCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
