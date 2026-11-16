import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

// ---- EDIT THESE ----
const EMAIL = "sakshiprajapati696@gmail.com";
// Optional: paste a Formspree endpoint (https://formspree.io) to receive
// messages by email without a backend, e.g. "https://formspree.io/f/xxxxxxx".
// If left empty, the form opens the visitor's email app instead.
const FORM_ENDPOINT = "";
// --------------------

const GITHUB_URL = "https://github.com/prajapatisakshi696-cmd";
const LINKEDIN_URL = "https://www.linkedin.com/in/sakshi-rodhia";

const EMPTY = { name: "", email: "", subject: "", message: "" };

const inputClass =
  "w-full rounded-xl border border-purple-500/20 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50";

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-gray-300">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | mailto | error

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) err.email = "Enter a valid email";
    if (!form.subject.trim()) err.subject = "Subject is required";
    if (!form.message.trim()) err.message = "Message cannot be empty";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    if (!FORM_ENDPOINT) {
      const body = `${form.message}\n\n— ${form.name} (${form.email})`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const contactLinks = [
    { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, Icon: FaEnvelope },
    { label: "LinkedIn", value: "Connect on LinkedIn", href: LINKEDIN_URL, Icon: FaLinkedin, external: true },
    { label: "GitHub", value: "View my GitHub", href: GITHUB_URL, Icon: FaGithub, external: true },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-20 px-6 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-purple-700/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Connect!
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Have an opportunity or project in mind? I&apos;d love to connect and
            discuss how we can work together.
          </p>
        </div>

        <div
          className="grid gap-8 lg:grid-cols-5"
        >
          {/* Contact links */}
          <ul className="space-y-4 lg:col-span-2">
            {contactLinks.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 rounded-2xl border border-purple-500/20 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-xl text-purple-300">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-purple-300">{label}</span>
                    <span className="block truncate text-gray-300">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5 rounded-2xl border border-purple-500/20 bg-white/5 p-8 shadow-lg shadow-purple-950/40 backdrop-blur lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={change}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={inputClass}
                />
              </Field>

              <Field id="email" label="Email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={change}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputClass}
                />
              </Field>
            </div>

            <Field id="subject" label="Subject" error={errors.subject}>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={change}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={inputClass}
              />
            </Field>

            <Field id="message" label="Message" error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={change}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${inputClass} resize-none`}
              />
            </Field>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-semibold shadow-lg shadow-purple-900/40 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            <div aria-live="polite" className="min-h-[1.5rem] text-center text-sm">
              {status === "success" && (
                <p className="font-medium text-green-400">
                  Message sent. Thank you, I&apos;ll get back to you soon.
                </p>
              )}
              {status === "mailto" && (
                <p className="text-purple-300">
                  Opening your email app to send this message.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}