import React from "react";

const Button = ({ icon: Icon, text, className, iconClassName, onClick }) => {
  return (
    <button className={`inline-flex items-center justify-center ${className}`} onClick={onClick}>
      {/* Render the icon if provided */}
      {Icon && <Icon className={`${iconClassName}`} />}
      {text}
    </button>
  );
};

export default Button;
