import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      err.email = "Valid email is required";
    if (!form.message.trim()) err.message = "Message cannot be empty";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-20 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Contact Me
        </h2>

        {success && (
          <div className="mt-6 text-center text-green-400 font-medium">
            ✅ Message sent successfully
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={change}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.name && (
              <small className="text-red-400">{errors.name}</small>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Email
            </label>
            <input
              name="email"
              value={form.email}
              onChange={change}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && (
              <small className="text-red-400">{errors.email}</small>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={change}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
            {errors.message && (
              <small className="text-red-400">{errors.message}</small>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-500
                       hover:bg-indigo-600 transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
