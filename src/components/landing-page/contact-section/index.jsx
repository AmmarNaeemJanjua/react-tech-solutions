import React, { useState } from "react";
import InputField from "@/components/common/InputField";

const index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Form Submitted: ${JSON.stringify(formData)}`);

    // Clear the form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const fields = [
    {
      type: "text",
      name: "name",
      value: formData.name,
      placeholder: "Your name",
      label: "Name",
      required: true,
    },
    {
      type: "email",
      name: "email",
      value: formData.email,
      placeholder: "Your email",
      label: "Email",
      required: true,
    },
    {
      type: "textarea",
      name: "message",
      value: formData.message,
      placeholder: "Your message",
      label: "Message",
      rows: 4,
      required: true,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-semibold text-gray-800">Contact Us</h2>

        <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Loop through fields array */}
            {fields.map((field) => (
              <InputField
                key={field.name}
                field={{
                  ...field,
                  onChange: handleChange,
                }}
              />
            ))}

            <div>
              <button type="submit" className="w-full rounded-lg bg-primary px-4 py-2 text-white hover:bg-blue-600">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="font-medium text-gray-600">
            Address:{" "}
            <a href="#" className="text-primary hover:underline">
              123 Main Street, City, Country
            </a>
          </p>
          <p className="font-medium text-gray-600">
            Phone:{" "}
            <a href="#" className="text-primary hover:underline">
              +1 234 567 890
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default index;
