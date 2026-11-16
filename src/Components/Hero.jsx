import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const PHRASES = [
  "Full Stack Web Developer",
  "MERN Stack Developer",
  "React Developer",
];

const GITHUB_URL = "https://github.com/prajapatisakshi696-cmd";
const LINKEDIN_URL = "https://www.linkedin.com/in/sakshi-rodhia";
const RESUME_URL = "/sakshi_resume.pdf";
const PHOTO_URL = "/Profile.jpeg";
const PHOTO_HAS_WHITE_BG = true;

const TECH = [
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", Icon: FaNodeJs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
];

function useTypewriter(phrases, typeSpeed = 90, deleteSpeed = 45, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(
        () =>
          setText(
            deleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1)
          ),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const root = useRef(null);
  const text = useTypewriter(PHRASES);
  const [imgFailed, setImgFailed] = useState(false);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        // Intro sequence
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-hero='item']", {
          opacity: 0,
          y: 32,
          duration: 0.8,
          stagger: 0.12,
        }).from(
          "[data-hero='photo']",
          { opacity: 0, scale: 0.85, duration: 1, ease: "back.out(1.4)" },
          0.2
        );

        // Gentle pulsing glow on the photo frame
        gsap.to("[data-hero='ring']", {
          opacity: 0.55,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        // Floating background orbs
        gsap.to("[data-hero='orb-a']", {
          x: 40, y: 30, duration: 7, ease: "sine.inOut", yoyo: true, repeat: -1,
        });
        gsap.to("[data-hero='orb-b']", {
          x: -30, y: -40, duration: 9, ease: "sine.inOut", yoyo: true, repeat: -1,
        });


        // Soft parallax on the photo as the page scrolls
        gsap.to("[data-hero='photo']", {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }, root);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 text-white"
      style={{ background: "radial-gradient(ellipse at 75% 30%, #100B20 0%, #050510 65%)" }}
    >
      {/* subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div
        data-hero="orb-a"
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 h-96 w-96 rounded-full bg-purple-700/25 blur-3xl"
      />
      <div
        data-hero="orb-b"
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-fuchsia-700/20 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <span
            data-hero="item"
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-white/5 px-4 py-1.5 text-sm text-purple-200 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Open to Full Stack / MERN opportunities
          </span>

          <h1
            data-hero="item"
            className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Sakshi Prajapati
            </span>
          </h1>

          <h2
            data-hero="item"
            className="mt-5 h-9 text-xl font-semibold text-gray-200 sm:text-2xl md:text-3xl"
            aria-label="Full Stack Web Developer"
          >
            <span aria-hidden="true">{text}</span>
            <span aria-hidden="true" className="ml-0.5 animate-pulse text-fuchsia-500">|</span>
          </h2>

          <p data-hero="item" className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            I&apos;m a MERN Stack Developer passionate about building clean,
            responsive, and scalable web applications. I enjoy solving
            problems, learning new technologies, and creating meaningful
            digital experiences.
          </p>

          <ul data-hero="item" className="mt-6 flex flex-wrap gap-2" aria-label="Core stack">
            {TECH.map(({ name, Icon, color }) => (
              <li
                key={name}
                className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-white/5 px-3.5 py-1.5 text-sm text-gray-200 backdrop-blur"
              >
                <Icon aria-hidden="true" style={{ color }} />
                {name}
              </li>
            ))}
          </ul>

          <div data-hero="item" className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-medium shadow-lg shadow-purple-900/40 transition hover:shadow-purple-600/50 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
            >
              View My Projects
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-purple-500/40 bg-white/5 px-6 py-3 font-medium backdrop-blur transition hover:border-purple-400 hover:text-purple-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
            >
              <FaDownload className="text-sm" />
              Download Resume
            </a>
          </div>

          <div data-hero="item" className="mt-8 flex gap-5 text-2xl">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-400 transition hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-gray-400 transition hover:text-purple-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div data-hero="photo" className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2.5rem] bg-purple-600/30 blur-2xl"
            />
            {/* gradient frame */}
            <div
              data-hero="ring"
              aria-hidden="true"
              className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-violet-700"
            />

            {/* photo card: the colored backdrop replaces the white photo background */}
            <div className="relative aspect-5/6 w-96 overflow-hidden rounded-[6rem] bg-gradient-to-br from-violet-300 via-purple-300 to-fuchsia-300 sm:w-80 md:w-96">
              {imgFailed ? (
                <div
                  role="img"
                  aria-label="Sakshi Prajapati"
                  className="flex h-full w-full items-center justify-center text-6xl font-bold text-purple-700"
                >
                  SP
                </div>
              ) : (
                <img
                  src={PHOTO_URL}
                  alt="Sakshi Prajapati"
                  width="384"
                  height="480"
                  fetchpriority="high"
                  onError={() => setImgFailed(true)}
                  className={`h-full w-full object-cover object-top ${
                    PHOTO_HAS_WHITE_BG ? "mix-blend-multiply" : ""
                  }`}
                />
              )}
              {/* soft fade at the bottom so the photo blends into the card */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#100B20]/40 to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}