import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const RESUME_URL = "/Sakshi-resume.pdf";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  // Active link highlighting
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Scrolled state + make the last section active when the page bottom is reached
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) setActive("contact");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close the mobile menu if the screen becomes desktop-sized
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const focusRing =
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050510]";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ${
        scrolled || open
          ? "border-purple-500/20 bg-[#050510]/85 shadow-lg shadow-black/30"
          : "border-transparent bg-[#050510]/40"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          aria-label="Sakshi Prajapati, back to top"
          className={`group flex items-center gap-3 rounded-lg ${focusRing}`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-sm font-bold text-white shadow-md shadow-purple-900/50 transition group-hover:shadow-purple-500/50">
            SP
          </span>
          <span className="hidden text-lg font-semibold tracking-tight text-white sm:block">
            Sakshi Prajapati
          </span>
        </button>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              aria-current={active === id ? "page" : undefined}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition ${focusRing} ${
                active === id ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-transform duration-300 ${
                  active === id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={RESUME_URL}
            download
            className={`inline-flex items-center gap-2 rounded-lg border border-purple-500/40 px-4 py-2 text-sm font-medium text-gray-200 transition hover:border-purple-300 hover:text-white ${focusRing}`}
          >
            <FaDownload className="text-xs" />
            Resume
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className={`rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-purple-900/40 transition hover:brightness-110 ${focusRing}`}
          >
            Let&apos;s Talk
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`rounded-lg p-2 text-2xl text-gray-300 hover:text-white md:hidden ${focusRing}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu: stays mounted so it can animate open and closed */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out md:hidden ${
          open ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        }`}
      >
        <nav aria-label="Mobile" className="overflow-hidden">
          <div className="flex flex-col gap-1 border-t border-purple-500/20 bg-[#100B20]/95 px-6 py-4">
            {LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                aria-current={active === id ? "page" : undefined}
                className={`rounded-lg px-3 py-3 text-left text-base font-medium transition ${focusRing} ${
                  active === id
                    ? "bg-purple-500/10 text-fuchsia-300"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                {label}
              </button>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href={RESUME_URL}
                download
                className={`inline-flex items-center justify-center gap-2 rounded-lg border border-purple-500/40 px-4 py-2.5 text-sm font-medium text-gray-200 ${focusRing}`}
              >
                <FaDownload className="text-xs" />
                Resume
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className={`rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2.5 text-sm font-medium text-white ${focusRing}`}
              >
                Let&apos;s Talk
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}