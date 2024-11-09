import React from "react";

const InputField = ({ field }) => {
  const { type, name, value, onChange, placeholder, label, rows, required } = field;

  // Render different input types based on the "type" passed
  if (type === "textarea") {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block font-medium text-gray-700">
          {label}
        </label>
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows || 4} // Default rows to 4 if not provided
          required={required}
          className="mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};

export default InputField;
