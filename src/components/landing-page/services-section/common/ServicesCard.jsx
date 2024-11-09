import React from "react";

const ServicesCard = ({ service }) => {
  return (
    <div className="rounded-lg bg-gray-100 p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <div className="mb-4 flex justify-center">{service?.icon}</div>
      <h3 className="mb-2 text-xl font-bold text-gray-800">{service?.title}</h3>
      <p className="text-gray-600">{service?.description}</p>
    </div>
  );
};

export default ServicesCard;
