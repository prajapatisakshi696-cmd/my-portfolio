import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
      // integrate backend / email service here if needed
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2>Contact</h2>
        {success && <div className="success">✅ Message sent successfully</div>}

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>Name</label>
          <input name="name" value={form.name} onChange={change} />
          {errors.name && <small className="err">{errors.name}</small>}

          <label>Email</label>
          <input name="email" value={form.email} onChange={change} />
          {errors.email && <small className="err">{errors.email}</small>}

          <label>Message</label>
          <textarea name="message" value={form.message} onChange={change} />
          {errors.message && <small className="err">{errors.message}</small>}

          <button type="submit" className="animated-btn">
            <span className="btn-text">Send Message</span>
            <span className="btn-anim" aria-hidden></span>
          </button>
        </form>
      </div>
    </section>
  );
}