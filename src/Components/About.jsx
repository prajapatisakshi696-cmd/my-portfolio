import React from "react";
import { FaUser, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const EXTRA = [
  { label: "Focus", value: "MERN Stack / Full Stack Web Development" },
  { label: "Languages", value: "English, Hindi" },
  { label: "Interests", value: "Web Development, UI Design, Problem Solving" },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-14 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-purple-500/25 bg-gradient-to-br from-purple-500/10 to-white/[0.03] p-8 shadow-[0_0_50px_-12px_rgba(124,58,237,0.5)] backdrop-blur-xl md:p-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600">
              <FaUser aria-hidden="true" />
            </span>
            <h2 className="text-2xl font-bold md:text-3xl">About Me</h2>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            {/* Story */}
            <div>
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

              <p className="mt-6 inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-200">
                Always learning. Always building. Always growing.
              </p>
            </div>

            {/* Education + details */}
            <div className="relative">
              <FaLaptopCode
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-6 text-7xl text-purple-500/20"
              />
              <div className="relative space-y-5 rounded-2xl border border-purple-500/20 bg-[#100B20]/60 p-6">
                <div className="flex gap-4">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
                    <FaGraduationCap aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-purple-300">Education</p>
                    <p className="mt-1 text-gray-100">
                      Bachelor of Computer Applications (BCA)
                    </p>
                    <p className="text-sm text-gray-400">
                      Indira Gandhi National Open University (IGNOU)
                    </p>
                    <p className="text-sm text-gray-500">July 2023 – July 2026</p>
                  </div>
                </div>

                <dl className="space-y-4 border-t border-white/10 pt-5">
                  {EXTRA.map(({ label, value }) => (
                    <div key={label}>
                      <dt className="text-sm font-semibold text-purple-300">{label}</dt>
                      <dd className="text-gray-300">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}