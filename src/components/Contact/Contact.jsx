import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(120);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "message") {
      setCharCount(120 - value.length);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    alert("Thank you for contacting us!");
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r   flex items-center justify-center p-6"
    >
      <div className="relative bg-white rounded-lg shadow-lg flex flex-col overflow-hidden w-full max-w-4xl">
        {/* Form Section */}
        <div className="p-8 bg-white">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`mt-1 block w-full p-3 border rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-400 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 block w-full p-3 border rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-400 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`mt-1 block w-full p-3 border rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-400 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                rows="4"
                placeholder="Write your message here..."
                maxLength="120"
              ></textarea>
              <div className="flex justify-between items-center mt-2">
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
                <p className="text-gray-500 text-sm">{charCount} characters left</p>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-bold py-3 px-4 rounded-md hover:bg-yellow-400 transition duration-300 transform hover:scale-105 uppercase"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
