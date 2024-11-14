// Contact.js
import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent! Thank you, ${form.name}.`);
    setForm({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <div
      id="contact"
      className="p-8 bg-gray-100 text-gray-800 min-h-screen flex items-center"
    >
      <div className="max-w-md mx-auto w-full">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          <i className="fas fa-envelope mr-2"></i>Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-2 rounded border border-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-2 rounded border border-gray-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="p-2 rounded border border-gray-300 h-32 resize-none"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
