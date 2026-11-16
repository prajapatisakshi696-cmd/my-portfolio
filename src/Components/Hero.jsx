import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

const PHRASES = [
  "Full Stack Web Developer",
  "MERN Stack Developer",
  "React Developer",
];

const EMAIL = "sakshiprajapati696@gmail.com";
const GITHUB_URL = "https://github.com/prajapatisakshi696-cmd";
const LINKEDIN_URL = "https://www.linkedin.com/in/sakshi-rodhia";
const RESUME_URL = "/Sakshi-resume.pdf";
const PHOTO_URL = "/Profile.jpeg";
// true  -> photo has a white background (blended into the purple card)
// false -> you use a transparent PNG (set PHOTO_URL to "/profile.png")
const PHOTO_HAS_WHITE_BG = true;

// Small glass bubbles placed around the photo card (top, right, bottom, left)
// const PHOTO_BUBBLES = [
//   { cls: "-top-7 left-8", size: 40 },
//   { cls: "-top-3 right-16", size: 20 },
//   { cls: "-right-5 top-[38%] sm:-right-9", size: 54 },
//   { cls: "-right-2 bottom-12", size: 24 },
//   { cls: "-bottom-7 right-14", size: 44 },
//   { cls: "-bottom-3 left-16", size: 22 },
//   { cls: "-left-5 top-[14%] sm:-left-8", size: 46 },
//   { cls: "-left-3 top-[58%] sm:-left-6", size: 26 },
// ];
// const BUBBLE_BG =
//   "radial-gradient(circle at 30% 28%, rgba(233,213,255,0.45), rgba(139,92,246,0.16) 55%, rgba(124,58,237,0.05) 100%)";

const SOCIALS = [
  { href: GITHUB_URL, label: "GitHub profile", Icon: FaGithub, external: true },
  { href: LINKEDIN_URL, label: "LinkedIn profile", Icon: FaLinkedin, external: true },
  { href: `mailto:${EMAIL}`, label: "Email me", Icon: FaEnvelope },
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
          { opacity: 0, scale: 0.88, duration: 1, ease: "back.out(1.4)" },
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

        // Bubbles drifting around the photo card
        gsap.utils.toArray("[data-hero='bubble']").forEach((el) => {
          gsap.to(el, {
            x: gsap.utils.random(-8, 8),
            y: gsap.utils.random(-14, 14),
            duration: gsap.utils.random(3, 5),
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: gsap.utils.random(0, 2),
          });
        });

        // Soft parallax on the photo as the page scrolls
        gsap.to("[data-hero='photo']", {
          y: -30,
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
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 text-white"
    >
      {/* background: grid, glow orbs, wave blob and big rings */}
      {/* <div
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
      <div data-hero="orb-a" aria-hidden="true" className="pointer-events-none absolute -left-24 top-20 h-96 w-96 rounded-full bg-purple-700/25 blur-3xl" />
      <div data-hero="orb-b" aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-fuchsia-700/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-40 h-80 w-[30rem] rounded-[50%] bg-gradient-to-tr from-purple-900/60 to-transparent blur-2xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-8 hidden h-[36rem] w-[36rem] rounded-full border border-purple-500/20 lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 hidden h-[26rem] w-[26rem] rounded-full border border-purple-500/15 lg:block" /> */}

      {/* sparkles */}
      <span aria-hidden="true" className="pointer-events-none absolute left-4 top-1/3 animate-pulse text-lg text-purple-300">✦</span>
      <span aria-hidden="true" className="pointer-events-none absolute left-[52%] top-[30%] hidden animate-pulse text-xl text-purple-300 lg:block">✦</span>
      <span aria-hidden="true" className="pointer-events-none absolute bottom-24 left-[46%] hidden animate-pulse text-sm text-fuchsia-300 lg:block">✦</span>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        {/* LEFT */}
        <div>
          <span
            data-hero="item"
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-white/5 px-3.5 py-1 text-xs text-purple-100 backdrop-blur sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for Opportunities
          </span>

          <h1
            data-hero="item"
            className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
          >
            Hi, I&apos;m{" "}
            <span className="whitespace-nowrap bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Sakshi Prajapati
            </span>
          </h1>

          <h2
            data-hero="item"
            className="mt-4 flex h-8 items-center gap-3 text-lg font-semibold text-gray-100 sm:text-xl"
            aria-label="Full Stack Web Developer"
          >
            <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400" />
            <span aria-hidden="true">{text}</span>
            <span aria-hidden="true" className="-ml-2 animate-pulse text-fuchsia-500">|</span>
            <span aria-hidden="true" className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400" />
          </h2>

          <p data-hero="item" className="mt-5 max-w-md text-base leading-relaxed text-gray-400 sm:text-[17px]">
            I&apos;m a MERN Stack Developer passionate about building clean,
            responsive, and scalable web applications. I enjoy solving
            problems, learning new technologies, and creating meaningful
            digital experiences.
          </p>

          <div data-hero="item" className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-2.5 text-sm font-medium shadow-lg shadow-purple-900/50 transition hover:shadow-purple-600/60 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
            >
              View My Projects
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 rounded-full border border-purple-400/60 bg-white/5 px-6 py-2.5 text-sm font-medium shadow-[0_0_18px_rgba(168,85,247,0.25)] backdrop-blur transition hover:border-purple-300 hover:text-purple-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
            >
              <FaDownload className="text-xs" />
              Download Resume
            </a>
          </div>

          <div data-hero="item" className="mt-6 flex gap-3">
            {SOCIALS.map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-gray-300 transition hover:border-purple-400/60 hover:text-white hover:shadow-[0_0_16px_rgba(168,85,247,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end">
          <div data-hero="photo" className="relative">
            {/* big concentric halos behind the photo */}
            {/* <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/25 bg-[radial-gradient(circle,rgba(124,58,237,0.22),transparent_68%)]" /> */}
            {/* <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/15" /> */}

            <div aria-hidden="true" className="absolute -inset-6 rounded-[2.5rem] bg-purple-600/30 blur-2xl" />
            {/* gradient frame */}
            <div
              data-hero="ring"
              aria-hidden="true"
              className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-violet-700"
            />

            {/* photo card: the colored backdrop replaces the white photo background */}
            <div className="relative aspect-[4/5] w-56 overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-300 via-purple-300 to-fuchsia-300 sm:w-60 md:w-64 lg:w-72">
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
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#100B20]/40 to-transparent"
              />
            </div>

            {/* bubbles on all four sides of the photo card */}
            {/* {PHOTO_BUBBLES.map((b, i) => (
              <span
                key={i}
                data-hero="bubble"
                aria-hidden="true"
                className={`absolute rounded-full border border-purple-300/30 ${b.cls}`}
                style={{
                  width: b.size,
                  height: b.size,
                  background: BUBBLE_BG,
                  boxShadow: "0 0 22px rgba(168,85,247,0.35)",
                }}
              />
            ))} */}

            {/* sparkle + burst lines */}
            <span aria-hidden="true" className="absolute -left-10 top-1/3 hidden animate-pulse text-xl text-purple-200 sm:block">✦</span>
            {/* <svg
              aria-hidden="true"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="absolute -right-12 -top-10 hidden h-10 w-10 text-fuchsia-300 sm:block"
            >
              <path d="M6 30 L15 22" />
              <path d="M19 37 L28 25" />
              <path d="M24 12 L37 10" />
            </svg> */}

            {/* handwritten tagline with underline swoosh */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-72 bottom-24 hidden -rotate-6 xl:block"
            >
              <p
                className="text-3xl text-purple-800"
                style={{ fontFamily: "'Caveat', 'Brush Script MT', cursive" }}
              >
                Dream · Code · Grow
              </p>
              <svg viewBox="0 0 180 12" fill="none" className="mt-1 h-3 w-44 text-purple-800">
                <path d="M2 9 C 50 2, 110 2, 178 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}