import React from "react";

const DETAILS = [
  { label: "Education", value: "Bachelor of Computer Applications (BCA), IGNOU" },
  {
    label: "Focus",
    value: "MERN Stack / Full Stack Web Development",
  },
  {
    label: "Technologies",
    value: "HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB",
  },
  { label: "Languages", value: "English, Hindi" },
  {
    label: "Interests",
    value: "Web Development, UI Design, Problem Solving",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 text-white bg-[#100B20] overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 w-96 h-96 rounded-full bg-purple-700/15 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div
          className="grid md:grid-cols-2 gap-8 items-stretch"
        >
          {/* Left: story */}
          <div className="rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur p-8 shadow-lg shadow-purple-950/40 flex flex-col justify-between">
            <div className="space-y-4 text-lg leading-relaxed text-gray-300">
              <p>
                I&apos;m a BCA graduate from IGNOU and an aspiring Full Stack
                Developer specializing in the MERN stack. I build responsive,
                user-friendly web applications, from clean React interfaces to
                REST APIs backed by MongoDB.
              </p>
              <p>
                My projects include a full-stack social app with authentication
                and image uploads, an e-commerce shopping cart, and a travel
                package explorer. I value clean code, structured
                problem-solving, and learning new tools. I&apos;m now looking
                for an entry-level Full Stack / MERN role where I can
                contribute, learn, and grow.
              </p>
            </div>

            <p className="mt-8 border-l-2 border-fuchsia-500 pl-4 text-xl font-semibold bg-gradient-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
              Always learning. Always building. Always growing.
            </p>
          </div>

          {/* Right: details */}
          <div className="rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur p-8 shadow-lg shadow-purple-950/40">
            <dl className="space-y-5">
              {DETAILS.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-sm font-semibold text-purple-400">
                    {label}
                  </dt>
                  <dd className="mt-0.5 text-gray-300">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}